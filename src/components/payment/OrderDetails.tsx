export default function OrderDetails() {
  const currentOrderList = [
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

  const totalPrice = currentOrderList.reduce((sum, item) => {
    const total =
      (item.price?.productPrice + (item.price?.accessoriesPrice ?? 0)) *
      item.amount;
    return sum + total;
  }, 0);

  const totalDeliveryFee = currentOrderList.reduce((sum, item) => {
    const total = item.price?.deliveryFee ?? 0;
    return sum + total;
  }, 0);

  return (
    <>
      <div className="grid h-12 grid-cols-10 items-center border-b text-center text-xl font-semibold">
        <div className="col-span-3 border-r">상품명</div>
        <div className="col-span-4 border-r">옵션</div>
        <div className="col-span-1 border-r">수량</div>
        <div className="col-span-2">금액</div>
      </div>
      {currentOrderList.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-10 items-center border-b py-5 text-xl font-semibold"
        >
          <div className="col-span-3">{item.name}</div>
          <div className="col-span-4">
            {Object.values(item.options).join('/')}
          </div>
          <div className="col-span-1 text-center">{item.amount}</div>
          <div className="col-span-2 text-end">
            {(
              (item.price?.productPrice ?? 0) +
              (item.price?.accessoriesPrice ?? 0)
            ).toLocaleString()}
            원
          </div>
        </div>
      ))}
      <div className="flex w-full items-center justify-end gap-12 border-b py-4 pr-12 text-xl font-semibold md:text-xl lg:flex-col lg:items-center lg:gap-3 lg:pr-6">
        <div className="flex gap-12 md:flex-col lg:gap-3">
          <span>상품금액 {totalPrice.toLocaleString()}원</span>
          <div className="flex justify-center gap-12 lg:gap-3">
            <span>+</span>
            <span>배송비 {totalDeliveryFee.toLocaleString()}원</span>
          </div>
        </div>
        <div className="flex gap-12 lg:gap-3">
          <span>=</span>
          <span>총 {(totalPrice + totalDeliveryFee).toLocaleString()}원</span>
        </div>
      </div>
    </>
  );
}
