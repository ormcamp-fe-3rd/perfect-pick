import CustomCheckBox from '@/components/payment/CustomCheckBox';
import ShippingInput from './ShippingInput';

export default function ShippingAddress() {
  return (
    <>
      <CustomCheckBox style="flex right-0 gap-6 mb-6 text-2xl leading-none justify-end lg:mt-5">
        기본 배송지 적용
      </CustomCheckBox>
      <div className="flex flex-col gap-4 text-xl font-semibold">
        <div className="flex w-full items-center">
          <div className="w-1/6 lg:w-3/12">받으시는 분</div>
          <ShippingInput
            layout="w-5/6 ml-6"
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div className="flex items-center">
          <div className="w-1/6 lg:w-3/12">받으시는 분 연락처</div>
          <ShippingInput
            layout="w-5/6 ml-6"
            placeholder="연락처를 입력해주세요"
          />
        </div>
        <div className="flex">
          <div className="w-1/6 lg:w-3/12">주소</div>
          <div className="ml-6 flex w-5/6 flex-col gap-4">
            <div className="flex">
              <ShippingInput
                layout="w-full"
                placeholder="주소 찾기로 입력해주세요"
                style="bg-[#D9D9D9]"
              />
              <button className="text-white ml-4 w-[170px] rounded-[50px] border bg-black text-center text-2xl font-semibold">
                주소 찾기
              </button>
            </div>
            <ShippingInput placeholder="상세 주소를 입력해주세요" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/6 lg:w-3/12">배송 메세지</div>
          <ShippingInput
            layout="w-5/6 ml-6"
            placeholder="배송 메세지를 입력해주세요"
          />
        </div>
      </div>
    </>
  );
}
