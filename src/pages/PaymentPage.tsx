import OrderDetails from '@/components/payment/OrderDetails';
import PaymentOptions from '@/components/payment/PaymentOptions';
import ShippingAddress from '@/components/payment/ShippingAddress';
import DiscountApply from '@/components/payment/DiscountApply';

function PaymentPage() {
  return (
    <div className="mx-auto mt-16 box-content flex max-w-[1204px] flex-col gap-24 px-5">
      <div className="lg:px-10">
        <div className="text-[36px] lg:text-center">구매자/배송지 정보</div>
        <ShippingAddress />
      </div>
      <div className="lg:px-10">
        <div className="mb-10 text-[36px] lg:text-center">주문 정보</div>
        <OrderDetails />
      </div>
      <div className="flex justify-between gap-20 lg:flex-col lg:gap-24 lg:px-10">
        <div className="flex-grow-[2]">
          <div className="mb-10 text-[36px] lg:text-center">결제 수단</div>
          <PaymentOptions />
        </div>
        <div className="flex-grow">
          <div className="mb-10 text-[36px] lg:text-center">할인 적용</div>
          <DiscountApply />
        </div>
      </div>
      <button className="m-auto h-20 w-[226px] rounded-[50px] bg-red text-2xl text-[white] md:w-[160px]">
        결제하기
      </button>
    </div>
  );
}

export default PaymentPage;
