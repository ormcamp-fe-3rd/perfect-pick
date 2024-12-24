import { db } from '@/firebase';
import { CartData } from '@/types';
import { doc, getDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
interface DiscountApplyProps {
  cartData: CartData[];
  selectedPayment: string;
}

export default function DiscountApply({
  cartData,
  selectedPayment,
}: DiscountApplyProps) {
  const [discountData, setDiscountData] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchDiscountData = async () => {
      const docRef = doc(db, 'payment', 'discount');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDiscountData(Object.values(docSnap.data())[0]);
      }
    };

    fetchDiscountData();
  }, []);

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

  const discountedPrice = discountData[selectedPayment] ?? 0;
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
      <div className="hidden items-center justify-between gap-5">
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
