import { CartData } from '@/types';

interface OrderDetailsProps {
  cartData: CartData[];
}

export default function OrderDetails({ cartData }: OrderDetailsProps) {
  if (!cartData || cartData.length === 0) {
    return <div>로딩 중...</div>;
  }

  const totalPrice = cartData.reduce((sum, item) => {
    const total =
      ((item.price?.productPrice ?? 0) + (item.price?.accessoriesPrice ?? 0)) *
      item.amount;
    return sum + total;
  }, 0);

  const totalDeliveryFee = cartData.reduce((sum, item) => {
    const total = item.price?.deliveryFee ?? 0;
    return sum + total;
  }, 0);

  const optionsLabel = (item: Record<string, string>) => {
    if (!item) return '';
    return Object.entries(item)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      .filter(([, value]) => value)
      .map(([, value]) => value)
      .join('/');
  };

  return (
    <>
      <div className="grid h-12 grid-cols-10 items-center text-center text-xl font-semibold lg:hidden">
        <div className="col-span-3 border-r">상품명</div>
        <div className="col-span-4 border-r">옵션</div>
        <div className="col-span-1 border-r">수량</div>
        <div className="col-span-2">금액</div>
      </div>
      {cartData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-10 items-center border-t py-5 text-xl font-semibold lg:grid-cols-1 lg:gap-2 lg:px-12"
        >
          <div className="col-span-3 lg:col-span-1 lg:font-extrabold">
            {item.product_title}
          </div>
          <div className="col-span-4 lg:col-span-1">
            옵션: {optionsLabel(item.option)}
          </div>
          <div className="col-span-1 text-center lg:col-span-1 lg:text-start">
            {item.amount}개
          </div>
          <div className="col-span-2 text-end lg:col-span-1 lg:text-start">
            {(
              item.price?.productPrice + (item.price?.accessoriesPrice ?? 0)
            ).toLocaleString()}
            원
          </div>
        </div>
      ))}
      <div className="flex w-full items-center justify-end gap-12 border-y px-12 py-4 text-xl font-semibold lg:flex-col lg:items-center lg:gap-3 md:text-xl">
        <div className="flex gap-12 lg:gap-3 md:flex-col">
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
