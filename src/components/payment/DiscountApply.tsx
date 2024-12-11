export default function DiscountApply() {
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
        discountedPrice: 3000,
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
      price: {
        productPrice: 1000000,
        deliveryFee: 3000,
      },
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

  const totalDiscountedPrice = currentOrderList.reduce((sum, item) => {
    const total = item.price?.discountedPrice ?? 0;
    return sum + total;
  }, 0);

  return (
    <div className="flex flex-col gap-6 text-xl font-semibold">
      <div className="flex justify-between">
        <div>주문금액</div>
        <div>{(totalPrice + totalDeliveryFee).toLocaleString()}원</div>
      </div>
      <div className="flex justify-between">
        <div>즉시 할인</div>
        <div>- {totalDiscountedPrice.toLocaleString()}원</div>
      </div>
      <div className="flex justify-between">
        <div>결제수단 할인</div>
        <div>- 0원</div>
      </div>
      <div className="flex items-center justify-between">
        <div>포인트 사용</div>
        <input
          className="w-1/2 rounded-[10px] border px-4 py-2 text-end"
          placeholder="보유 포인트"
        ></input>
      </div>
      <div className="flex justify-between">
        <div>최종 결제 금액</div>
        <div>
          {(
            totalPrice +
            totalDeliveryFee -
            totalDiscountedPrice
          ).toLocaleString()}
          원
        </div>
      </div>
    </div>
  );
}
