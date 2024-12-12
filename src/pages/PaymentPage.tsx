import OrderDetails from '@/components/payment/OrderDetails';
import PaymentOptions from '@/components/payment/PaymentOptions';
import ShippingAddress from '@/components/payment/ShippingAddress';
import DiscountApply from '@/components/payment/DiscountApply';

function PaymentPage() {
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
          <PaymentOptions />
        </div>
        <div className="flex-grow">
          <h2 className="mb-10 text-[36px] lg:text-center">할인 적용</h2>
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
