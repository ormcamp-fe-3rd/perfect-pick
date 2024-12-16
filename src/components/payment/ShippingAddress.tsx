import { useState } from 'react';
import CustomCheckBox from '@/components/payment/CustomCheckBox';
import ShippingInput from '@/components/payment/ShippingInput';

// 임시: 추후 서버 연결
const memberAddress = {
  baseAddress: '12345, 서울특별시 강남구 테헤란로 123',
  detailedAddress: '10층 A호',
  recipientName: '홍길동',
  recipientNumber: '010-1234-1234',
};

export default function ShippingAddress() {
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [memberAdressChecked, setMemberAdressChecked] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    let updatedInputValues = { ...inputValues, [key]: value };
    setInputValues(updatedInputValues);

    // 배송메세지를 제외하고 수동 입력 시, 체크박스 해제
    if (key !== 'shippingMessage' && memberAdressChecked) {
      setMemberAdressChecked(false);
    }
  };

  const handleCheckboxChange = () => {
    const newCheckedState = !memberAdressChecked;
    setMemberAdressChecked(newCheckedState);
    setInputValues(newCheckedState ? memberAddress : inputValues);
  };

  return (
    <>
      <CustomCheckBox
        onClick={handleCheckboxChange}
        checked={memberAdressChecked}
        style="flex right-0 gap-6 mb-6 text-2xl leading-none justify-end lg:mt-5"
      >
        기본 배송지 적용
      </CustomCheckBox>
      <div className="flex flex-col gap-4 text-xl font-semibold">
        <div className="flex w-full items-center">
          <div className="w-1/6 lg:w-3/12">받으시는 분</div>
          <ShippingInput
            layout="w-5/6 pl-6"
            placeholder="이름을 입력해주세요"
            key="recipientName"
            value={inputValues.recipientName}
            onInputChange={(value) => handleInputChange('recipientName', value)}
          />
        </div>
        <div className="flex items-center">
          <div className="w-1/6 lg:w-3/12">받으시는 분 연락처</div>
          <ShippingInput
            layout="w-5/6 pl-6"
            placeholder="연락처를 입력해주세요"
            key="recipientNumber"
            value={inputValues.recipientNumber}
            onInputChange={(value) =>
              handleInputChange('recipientNumber', value)
            }
          />
        </div>
        <div className="flex">
          <div className="w-1/6 lg:w-3/12">주소</div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex">
              <ShippingInput
                layout="pl-6"
                placeholder="주소 찾기로 입력해주세요"
                style="bg-[#D9D9D9]"
                key="baseAddress"
                value={inputValues.baseAddress}
                onInputChange={(value) =>
                  handleInputChange('baseAddress', value)
                }
                enabled={false}
              />
              <button className="text-white ml-4 w-[170px] rounded-[50px] border bg-black text-center text-2xl font-semibold">
                주소 찾기
              </button>
            </div>
            <ShippingInput
              layout="pl-6"
              placeholder="상세 주소를 입력해주세요"
              key="detailedAddress"
              value={inputValues.detailedAddress}
              onInputChange={(value) =>
                handleInputChange('detailedAddress', value)
              }
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/6 lg:w-3/12">배송 메세지</div>
          <ShippingInput
            layout="w-5/6 pl-6"
            placeholder="배송 메세지를 입력해주세요"
            key="shippingMessage"
            value={inputValues.shippingMessage}
            onInputChange={(value) =>
              handleInputChange('shippingMessage', value)
            }
          />
        </div>
      </div>
    </>
  );
}
