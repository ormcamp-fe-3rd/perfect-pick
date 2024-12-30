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
  const [userData, setUserData] = useState<UserData | null>(null);
  const [checkoutItems, setCheckoutItems] = useState<CartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddressComplete, setIsAddressComplete] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const userId = userData?.id;

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('checkoutData');
      sessionStorage.removeItem('checkoutDataId');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handleBeforeUnload); // 뒤로가기 처리

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = (await getUserInfo()) as UserData;
        setUserData(userInfo);
      } catch (error) {
        console.log('사용자 정보를 가져오는 실패했습니다.', error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const checkoutData = JSON.parse(
      sessionStorage.getItem('checkoutData') || '[]',
    );

    const checkoutDataId = JSON.parse(
      sessionStorage.getItem('checkoutDataId') || '[]',
    );

    const fetchCheckoutItems = async () => {
      try {
        if (!checkoutData.length && !checkoutDataId.length) {
          window.history.back();
        }

        if (checkoutData.length > 0) {
          setCheckoutItems(checkoutData);
          return;
        }

        if (userId) {
          const cartsRef = collection(db, 'carts');
          const q = query(cartsRef, where('user_id', '==', userId));
          const querySnapshot = await getDocs(q);
          const filteredDocs = querySnapshot.docs.filter((doc) =>
            checkoutDataId.includes(doc.id),
          );

          const userItems = filteredDocs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as CartItemData),
          }));
          setCheckoutItems(userItems);
          return;
        }
      } catch (e) {
        console.error('Error fetching user cart:', e);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchCheckoutItems();
  }, [userData]);

  const isConditionMet = selectedPayment ? isPrivacyChecked : false;

  const handleAddressInput = (value: boolean) => {
    setIsAddressComplete(value);
  };

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
    <div className="mx-auto mt-16 box-content flex min-w-[490px] max-w-[1204px] flex-col gap-24 px-5">
      <div className="lg:px-2" tabIndex={0}>
        <h2 className="text-[36px] lg:text-center">구매자/배송지 정보</h2>
        <ShippingAddress
          userData={userData}
          onAddressInput={handleAddressInput}
        />
      </div>
      <div className="lg:px-2" tabIndex={0}>
        <h2 className="mb-10 text-[36px] lg:text-center">주문 정보</h2>
        <OrderDetails key="orderDetails" cartData={checkoutItems} />
      </div>
      <div className="flex justify-between gap-20 lg:flex-col lg:gap-24 lg:px-2">
        <div className="flex-grow-[2]" tabIndex={0}>
          <h2 className="mb-10 text-[36px] lg:text-center">결제 수단</h2>
          <PaymentOptions
            selectedPayment={selectedPayment}
            onPaymentSelect={handlePaymentSelect}
            isChecked={isPrivacyChecked}
            onCheckBoxChange={handleCheckBoxChange}
          />
        </div>
        <div className="flex-grow-[2]" tabIndex={0}>
          <h2 className="mb-10 text-[36px] lg:text-center">할인 적용</h2>
          <DiscountApply
            cartData={checkoutItems}
            selectedPayment={selectedPayment}
          />
        </div>
      </div>
      <PaymentButtonModal
        isAddressComplete={isAddressComplete}
        isValid={isConditionMet}
      />
    </div>
  );
}

export default PaymentPage;
