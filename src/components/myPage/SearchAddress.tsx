export default function SearchAddress() {
  const addressInput = document.getElementById(
    'inputBaseAddress',
  ) as HTMLInputElement;
  const address = addressInput.value;

  if (address.trim() === '') {
    alert('주소를 입력해주세요!');
    return;
  }

  const apiKey = import.meta.env.VITE_VWORLD_API_KEY;
  const encodedAddress = encodeURIComponent(address);

  // VWorld 지오코딩 API 호출
  fetch(
    `/api/req/search?service=search&request=search&version=2.0&size=10&page=1&query=${encodedAddress}&format=json&type=road&key=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.response.status === 'OK') {
        const roadTitle = data.response.result.items[0].title;
        const roadDistrict = data.response.result.items[0].district.split(',');
        const secondDistrict = roadDistrict[1]
          ? roadDistrict[1].trim()
          : roadDistrict[0];
        const fullRoadAddress = `${roadTitle}, ${secondDistrict}`;
        addressInput.value = fullRoadAddress;
      } else {
        alert('주소를 찾을 수 없습니다.');
      }
    })
    .catch((error) => console.error('API 요청 에러:', error));

  return;
}
