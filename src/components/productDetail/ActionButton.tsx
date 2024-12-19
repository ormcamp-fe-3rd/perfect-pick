import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '@/components/productDetail/Modal';

interface ActionButtonProps {
  buttonName: string;
  buttonStyle?: string;
  type?: 'openModal' | 'moveLink' | 'default';
  confirmLinkPath?: string;
  moveLinkPath?: string;
  onClick?: () => void;
  modalContent?: ReactNode;
  onConfirmClick?: () => void;
  disableModal?: boolean;
}

export default function ActionButton({
  buttonName,
  buttonStyle,
  type = 'default',
  confirmLinkPath = '/',
  moveLinkPath = '/',
  onClick,
  modalContent,
  onConfirmClick,
  disableModal = false,
}: ActionButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (moveLinkPath: string) => {
    if (disableModal) {
      setIsModalOpen(false);
      alert('필수 옵션을 선택해주세요');
    } else if (type === 'openModal') {
      setIsModalOpen(true);
    } else if (type === 'moveLink') {
      navigate(moveLinkPath);
    } else {
      onClick;
    }
  };

  const handleModalConfirmClick = (confirmLinkPath: string) => {
    if (onConfirmClick) {
      onConfirmClick();
    }
    navigate(confirmLinkPath);
  };

  return (
    <>
      <button
        className={`h-16 w-[220px] rounded-[50px] ${buttonStyle} bg-black text-2xl text-[#FFFFFF] md:h-10 md:w-[140px] md:text-lg`}
        onClick={() => handleButtonClick(moveLinkPath)}
      >
        {buttonName}
      </button>
      <Modal
        title={buttonName}
        content={modalContent}
        isOpen={isModalOpen}
        buttonType="double"
        onConfirm={() => handleModalConfirmClick(confirmLinkPath)}
        onClose={() => setIsModalOpen(false)}
      ></Modal>
    </>
  );
}
