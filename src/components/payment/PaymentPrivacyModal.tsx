import { useState } from 'react';

import CustomCheckBox from '@/components/payment/CustomCheckBox';

interface PaymentPrivacyModalProps {
  isChecked: boolean;
  onCheckBoxChange: () => void;
}

export default function PaymentPrivacyModal({
  isChecked,
  onCheckBoxChange,
}: PaymentPrivacyModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckBoxClick = () => {
    if (!isChecked) {
      setIsOpen(true);
    }
    onCheckBoxChange();
  };

  const handleModalButton = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CustomCheckBox
        style="flex gap-4 items-center"
        boxStyle="border-0 size-6"
        strokeColor="stroke-green"
        strokeDefault="stroke-gray"
        checked={isChecked}
        onClick={handleCheckBoxClick}
      >
        [필수] 결제 서비스 이용 약관, 개인정보 처리 동의 ＞
      </CustomCheckBox>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute left-1/2 top-1/2 flex w-2/3 max-w-[680px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-12 rounded-2xl bg-white px-10 py-20 text-lg font-semibold text-gray checked:flex">
            <div>[필수] 개인정보 제공 동의(판매자)</div>
            <div>
              퍼펙트픽을 이용하여 퍼펙트픽 가맹점에서 제공하는 상품 및 서비스를
              구매하고자 할 경우, 퍼펙트픽㈜는 거래 당사자간 원활한 의사소통 및
              배송, 상담 등 거래이행을 위하여 필요한 최소한의 개인정보를 아래와
              같이 제공하고 있습니다. <br />
              1. 개인정보를 제공받는 자상품 및 서비스 판매자 <br />
              2. 제공하는 개인정보 항목이름, 아이디, (휴대)전화번호, 상품
              구매정보,결제수단, 상품 수령인 정보(배송상품:수령인명, 주소,
              (휴대)전화번호, 퍼펙트픽 아이디, 휴대전화번호),
              개인통관고유부호(통관 필요 상품 주문 시에만 해당) <br />
              3. 개인정보를 제공받는 자의 이용목적판매자와 구매자의 원활한 거래
              진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의
              고객관리, 물품배송, 통관, 새로운 상품/서비스 정보와 고지사항의
              안내, 상품/서비스 구매에 따른 혜택 제공, 서비스 개선·통계·분석{' '}
              <br />
              4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간개인정보
              이용목적 달성 시까지 보존합니다. 단, 관계 법령의 규정에 의하여
              일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.{' '}
              <br />위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시
              퍼펙트픽을 이용한 상품 및 디지털 콘텐츠 구매가 불가능합니다. 그
              밖의 내용은 퍼펙트픽 가맹점의 자체 이용약관 및 개인정보처리방침에
              따릅니다.
            </div>
            <button
              className="h-20 w-40 rounded-[50px] bg-black text-2xl font-semibold text-[white] md:w-[160px]"
              onClick={handleModalButton}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}
