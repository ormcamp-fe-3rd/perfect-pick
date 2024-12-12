export default function OrderHistory() {
  const orderHistory = [
    {
      id: 1,
      name: '갤럭시 S24 FE 자급제',
      src: 'https://i.imgur.com/svOz7A9b.jpg',
      options: {
        color: 'white',
        storage: '256G',
        accessories: 'PD 충전기 절전형(케이블 미포함)',
      },
      amount: 1,
      price: {
        productPrice: 1000000,
        accessoriesPrice: 15000,
      },
    },
    {
      id: 2,
      name: '아이패드 프로 11인치 (Wi-Fi)',
      src: 'https://i.imgur.com/Ae1wefjb.jpg',
      options: { color: '스페이스 블랙', storage: '1T' },
      amount: 1,
      price: { productPrice: 2000000 },
    },
    {
      id: 3,
      name: '갤럭시 S24 FE 자급제',
      src: 'https://i.imgur.com/svOz7A9b.jpg',
      options: { color: 'white', storage: '512G' },
      amount: 1,
      price: { productPrice: 1000000, deliveryFee: 3000 },
    },
  ];

  const totalPrice = orderHistory.reduce((sum, item) => {
    const total =
      (item.price?.productPrice + (item.price?.accessoriesPrice ?? 0)) *
      item.amount;
    return sum + total;
  }, 0);

  const totalDeliveryFee = orderHistory.reduce((sum, item) => {
    const total = item.price?.deliveryFee ?? 0;
    return sum + total;
  }, 0);

  return (
    <>
      {orderHistory.map((item) => (
        <div className="mt-[15px] flex items-center justify-between gap-5 border-t p-10 text-xl font-semibold md:flex-col md:items-start md:p-5">
          <div key={item.id} className="flex gap-5">
            <img
              className="size-[110px] rounded-[10px]"
              src={item.src}
              alt={`${item.name}'s image`}
            />
            <div className="grid grid-cols-1 items-center">
              <div className="col-span-1 font-extrabold">{item.name}</div>
              <div className="col-span-1">
                옵션: {Object.values(item.options).join('/')}
              </div>
              <div className="col-span-1 text-start">{item.amount}개</div>
            </div>
          </div>
          <div>
            {(
              (item.price?.productPrice ?? 0) +
              (item.price?.accessoriesPrice ?? 0)
            ).toLocaleString()}
            원
          </div>
        </div>
      ))}
      <div className="flex w-full items-center justify-end gap-12 border-y px-12 py-4 text-xl font-extrabold">
        <span>총 주문금액 </span>
        <span className="text-red">
          {(totalPrice + totalDeliveryFee).toLocaleString()}원
        </span>
      </div>
    </>
  );
}
