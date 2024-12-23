import { CartData } from '@/types';
interface DiscountApplyProps {
  cartData: CartData[];
  selectedPayment: string;
}

export default function DiscountApply({
  cartData,
  selectedPayment,
}: DiscountApplyProps) {
  const totalPrice = cartData.reduce((sum, item) => {
    const total =
      (item.price?.productPrice + (item.price?.accessoriesPrice ?? 0)) *
      item.amount;
    return sum + total;
  }, 0);

  const totalDeliveryFee = cartData.reduce((sum, item) => {
    const total = item.price?.deliveryFee ?? 0;
    return sum + total;
  }, 0);

  const paymentDiscount: { [key: string]: number } = {
    creditCard: 1000,
    NaverPay: 3000,
    TossPay: 2000,
    bankTransfer: 5000,
  };

  const discountedPrice = paymentDiscount[selectedPayment] ?? 0;
  const finalPrice = totalPrice + totalDeliveryFee - discountedPrice;

  return (
    <div className="flex flex-col gap-6 text-2xl font-semibold">
      <div className="flex justify-between gap-5">
        <div>주문금액</div>
        <div>{(totalPrice + totalDeliveryFee).toLocaleString()}원</div>
      </div>
      <div className="flex justify-between gap-5">
        <div>결제수단 할인</div>
        <div>- {discountedPrice}원</div>
      </div>
      <div className="flex hidden items-center justify-between gap-5">
        <div>포인트 사용</div>
        <input
          className="w-1/2 rounded-[10px] border px-4 py-2 text-end"
          placeholder="보유 포인트"
        ></input>
      </div>
      <div className="flex justify-between gap-5">
        <div>최종 결제 금액</div>
        <div>{finalPrice.toLocaleString()}원</div>
      </div>
    </div>
  );
}
