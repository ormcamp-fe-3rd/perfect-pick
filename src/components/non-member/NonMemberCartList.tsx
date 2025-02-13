export default function NonMemberCartList() {
  const List = [
    {
      src: 'https://placehold.co/176x176',
      title: '갤럭시 S24 FE 자급제',
      option: ['white', '256G', '25W PD 충전기 절전형(케이블 미포함)'],
      amount: 1,
      price: 896000,
    },
    {
      src: 'https://placehold.co/176x176',
      title: '갤럭시 S24 FE 자급제2',
      option: ['white', '256G', '25W PD 충전기 절전형(케이블 미포함)'],
      amount: 2,
      price: 896000,
    },
    {
      src: 'https://placehold.co/176x176',
      title: '갤럭시 S24 FE 자급제3',
      option: ['white', '256G', '25W PD 충전기 절전형(케이블 미포함)'],
      amount: 3,
      price: 996000,
    },
  ];

  const totalPrice = List.reduce(
    (acc, item) => acc + item.price * item.amount,
    0,
  );

  return (
    <>
      <ul>
        {List.map((list, index) => (
          <li
            className={`box-border flex items-center justify-between px-5 py-[35px] lg:px-[10px] md:items-start md:py-[25px] ${index === List.length - 1 ? 'border-b-2 border-b-black' : 'border-b border-[#ddd]'}`}
          >
            <div className="pic w-[176px] overflow-hidden rounded-[10px] md:h-[87px] md:w-[87px]">
              <img src={list.src} alt={list.title} className="h-full w-full" />
            </div>
            <div className="flex w-[calc(100%-236px)] flex-wrap items-center justify-between lg:w-[calc(100%-206px)] md:w-[calc(100%-108px)]">
              <div className="font-semibold">
                <strong className="mb-[25px] block text-2xl md:mb-3 md:text-lg">
                  {list.title}
                </strong>
                <p className="text-gray">옵션 : {list.option.join(', ')}</p>
                <p className="text-gray md:mt-3">수량 : {list.amount}</p>
              </div>
              <p className="text-2xl font-semibold md:mt-[25px] md:text-xl">
                {list.price.toLocaleString()}원
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-[35px] text-right text-2xl md:text-xl">
        <span className="font-semibold">총 주문금액</span>
        <span className="ml-[70px] font-extrabold text-red">
          {totalPrice.toLocaleString()}
        </span>
      </p>
    </>
  );
}
