import { useEffect, useState } from 'react';

import DiscountApply from '@/components/payment/DiscountApply';
import OrderDetails from '@/components/payment/OrderDetails';
import PaymentButtonModal from '@/components/payment/PaymentButtonModal';
import PaymentOptions from '@/components/payment/PaymentOptions';
import ShippingAddress from '@/components/payment/ShippingAddress';
import { db, getUserInfo } from '@/firebase';
import { CartData, CartItemData, UserData } from '@/types';
import { collection, getDocs, query, where } from '@firebase/firestore';

function PaymentPage() {
  const [userId, setUserId] = useState('');
  const [checkoutItems, setCheckoutItems] = useState<CartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const isConditionMet = selectedPayment ? isPrivacyChecked : false;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = (await getUserInfo()) as UserData;
        setUserId(userInfo.id);
      } catch (error) {
        console.log('사용자 정보를 가져오는 실패했습니다.', error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchCheckoutItems = async () => {
      try {
        if (!userId) {
          const guestItems = JSON.parse(sessionStorage.getItem('cart') || '[]');
          setCheckoutItems(guestItems);
          return;
        }

        const cartsRef = collection(db, 'carts');
        const q = query(cartsRef, where('user_id', '==', userId));
        const querySnapshot = await getDocs(q);

        const checkoutData = JSON.parse(
          sessionStorage.getItem('checkoutData') || '[]',
        );
        const filteredDocs = querySnapshot.docs.filter((doc) =>
          checkoutData.includes(doc.id),
        );

        const userItems = filteredDocs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as CartItemData),
        }));
        console.log('filteredDocs', filteredDocs);
        setCheckoutItems(userItems);
      } catch (e) {
        console.error('Error fetching user cart:', e);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchCheckoutItems();
  }, [userId]);

  const handlePaymentSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  const handleCheckBoxChange = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto mt-16 box-content flex max-w-[1204px] flex-col gap-24 px-5">
      <div className="lg:px-10">
        <h2 className="text-[36px] lg:text-center">구매자/배송지 정보</h2>
        <ShippingAddress />
      </div>
      <div className="lg:px-10">
        <h2 className="mb-10 text-[36px] lg:text-center">주문 정보</h2>
        <OrderDetails cartData={checkoutItems} />
      </div>
      <div className="flex justify-between gap-20 lg:flex-col lg:gap-24 lg:px-10">
        <div className="flex-grow-[2]">
          <h2 className="mb-10 text-[36px] lg:text-center">결제 수단</h2>
          <PaymentOptions
            selectedPayment={selectedPayment}
            onPaymentSelect={handlePaymentSelect}
            isChecked={isPrivacyChecked}
            onCheckBoxChange={handleCheckBoxChange}
          />
        </div>
        <div className="flex-grow">
          <h2 className="mb-10 text-[36px] lg:text-center">할인 적용</h2>
          <DiscountApply />
        </div>
      </div>
      <PaymentButtonModal isValid={isConditionMet} />
    </div>
  );
}

export default PaymentPage;
