import { useState } from 'react';
import OrderDetails from '@/components/payment/OrderDetails';
import PaymentOptions from '@/components/payment/PaymentOptions';
import ShippingAddress from '@/components/payment/ShippingAddress';
import DiscountApply from '@/components/payment/DiscountApply';
import PaymentButtonModal from '@/components/payment/PaymentButtonModal';

function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const isConditionMet = selectedPayment ? isPrivacyChecked : false;

  const handlePaymentSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  const handleCheckBoxChange = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };

  return (
    <div className="mx-auto mt-16 box-content flex max-w-[1204px] flex-col gap-24 px-5">
      <div className="lg:px-10">
        <h2 className="text-[36px] lg:text-center">구매자/배송지 정보</h2>
        <ShippingAddress />
      </div>
      <div className="lg:px-10">
        <h2 className="mb-10 text-[36px] lg:text-center">주문 정보</h2>
        <OrderDetails />
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
