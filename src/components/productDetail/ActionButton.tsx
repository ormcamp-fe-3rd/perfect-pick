import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '@/components/productDetail/Modal';

interface ActionButtonProps {
  buttonName: string;
  buttonStyle?: string;
  type?: 'openModal' | 'moveLink';
  confirmLinkPath?: string;
  moveLinkPath?: string;
  modalContent?: ReactNode;
  onButtonClick?: () => void;
  onConfirmClick?: () => void;
  disableModal?: boolean;
}

export default function ActionButton({
  buttonName,
  buttonStyle,
  type,
  confirmLinkPath = '',
  moveLinkPath = '',
  modalContent,
  onButtonClick = () => {},
  onConfirmClick = () => {},
  disableModal = false,
}: ActionButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onButtonClick();

    if (type === 'openModal') {
      !disableModal && setIsModalOpen(true);
    } else {
      navigate(moveLinkPath);
    }
  };

  const handleModalConfirmClick = () => {
    if (onConfirmClick) {
      onConfirmClick();
    }
    navigate(confirmLinkPath);
  };

  return (
    <>
      <button
        className={`h-16 w-[220px] rounded-[50px] ${buttonStyle} bg-black text-2xl text-[#FFFFFF] md:h-10 md:w-[140px] md:text-lg`}
        onClick={() => handleButtonClick()}
      >
        {buttonName}
      </button>
      <Modal
        title={`${buttonName} 완료!`}
        content={modalContent}
        isOpen={isModalOpen}
        buttonType="double"
        leftButtonName="장바구니 이동"
        rightButtonName="쇼핑 계속하기"
        onConfirm={() => handleModalConfirmClick()}
        onClose={() => setIsModalOpen(false)}
      ></Modal>
    </>
  );
}
