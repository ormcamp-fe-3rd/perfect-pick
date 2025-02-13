declare global {
  interface Window {
    daum: {
      Postcode: any;
    };
  }
}

export default function searchAddress(): Promise<string> {
  return new Promise((resolve, reject) => {
    // 스크립트 로드 여부 확인
    const existingScript = document.querySelector(
      'script[src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"]',
    );

    // 스크립트가 없다면 동적으로 추가
    if (!existingScript) {
      const script = document.createElement('script');
      script.src =
        '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
      script.async = true;

      script.onload = () => {
        openPostcode(resolve, reject);
      };

      document.body.appendChild(script);
    } else {
      openPostcode(resolve, reject);
    }
  });
}

function openPostcode(
  resolve: (value: string) => void,
  reject: (reason?: any) => void,
) {
  const postcode = new window.daum.Postcode({
    oncomplete: (data: any) => {
      const roadAddress = `${data.zonecode}, ${data.roadAddress}`;
      if (roadAddress) {
        resolve(roadAddress);
      } else {
        reject(new Error('도로명 주소를 선택하지 않았습니다.'));
      }
    },
  });

  postcode.open();
}
