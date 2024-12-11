import OrderDetails from '@/components/payment/OrderDetails';
import ShippingAddress from '@/components/payment/ShippingAddress';

function PaymentPage() {
  return (
    <div className="mx-auto mt-16 box-content flex max-w-[1204px] flex-col gap-24 px-5">
      <div>
        <div className="text-[36px] lg:text-center">구매자/배송지 정보</div>
        <ShippingAddress />
      </div>
      <div>
        <div className="mb-10 text-[36px] lg:text-center">주문 정보</div>
        <OrderDetails />
      </div>
      <div className="flex justify-between">
        <div className="">
          <div className="text-[36px] lg:text-center">결제 수단</div>
          <span>컴포넌트</span>
        </div>
        <div>
          <div className="text-[36px] lg:text-center">할인 적용</div>
          <span>컴포넌트</span>
        </div>
      </div>
      <div>결제하기</div>
    </div>
  );
}

export default PaymentPage;
