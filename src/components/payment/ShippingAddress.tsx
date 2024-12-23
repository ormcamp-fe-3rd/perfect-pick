import { useState } from 'react';

import CustomCheckBox from '@/components/payment/CustomCheckBox';
import ShippingInput from '@/components/payment/ShippingInput';
import { UserData } from '@/types';
import SearchAddress from '@/components/common/SearchAddress';

interface ShippingAddressProps {
  userData: UserData | null;
}

export default function ShippingAddress({ userData }: ShippingAddressProps) {
  const [inputValues, setInputValues] = useState<Record<string, string | null>>(
    {},
  );
  const [memberAdressChecked, setMemberAdressChecked] = useState(false);

  const updateInputValues = (key: string, value: string) => {
    const updatedInputValues = { ...inputValues, [key]: value };
    setInputValues(updatedInputValues);

    // 배송메세지를 제외하고 수동 입력 시, 체크박스 해제
    if (key !== 'shippingMessage' && memberAdressChecked) {
      setMemberAdressChecked(false);
    }
  };

  const handleCheckboxChange = () => {
    const newCheckedState = !memberAdressChecked;
    setMemberAdressChecked(newCheckedState);
    if (newCheckedState && userData) {
      setInputValues({ ...userData });
    }
  };

  const handleSearchAddress = async () => {
    const searchedAddress = (await SearchAddress()) || '';
    updateInputValues('address', searchedAddress);
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
            value={inputValues.username ?? ''}
            onInputChange={(value) => updateInputValues('username', value)}
          />
        </div>
        <div className="flex items-center">
          <div className="w-1/6 lg:w-3/12">받으시는 분 연락처</div>
          <ShippingInput
            layout="w-5/6 pl-6"
            placeholder="연락처를 입력해주세요"
            key="recipientNumber"
            value={inputValues.recipientNumber ?? ''}
            onInputChange={(value) =>
              updateInputValues('recipientNumber', value)
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
                id="inputBaseAddress"
                style="bg-[#D9D9D9]"
                key="baseAddress"
                value={inputValues.address ?? ''}
                onInputChange={(value) => updateInputValues('address', value)}
                showButton={true}
                buttonText="주소찾기"
                onButtonClick={handleSearchAddress}
              />
            </div>
            <ShippingInput
              layout="pl-6"
              placeholder="상세 주소를 입력해주세요"
              key="detailedAddress"
              value={inputValues.detailAddress ?? ''}
              onInputChange={(value) =>
                updateInputValues('detailAddress', value)
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
            value={inputValues.shippingMessage ?? ''}
            onInputChange={(value) =>
              updateInputValues('shippingMessage', value)
            }
          />
        </div>
      </div>
    </>
  );
}
