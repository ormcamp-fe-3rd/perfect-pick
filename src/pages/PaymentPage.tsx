import CustomCheckBox from '@/components/payment/CustomCheckBox';
import ShippingAddress from '@/components/payment/ShippingAddress';

function PaymentPage() {
  return (
    <div className="mx-24 mt-16 flex flex-col gap-24">
      <div>
        <div className="text-[36px] lg:text-center">구매자/배송지 정보</div>
        <CustomCheckBox style="flex right-0 gap-6 text-2xl leading-none justify-end">
          기본 배송지 적용
        </CustomCheckBox>
        <ShippingAddress />
      </div>
      <div>
        <div className="text-[36px] lg:text-center">주문 정보</div>
        <span>컴포넌트</span>
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
