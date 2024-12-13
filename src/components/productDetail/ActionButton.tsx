import { useState } from 'react';
import Modal from '@/components/productDetail/Modal';
import { useNavigate } from 'react-router-dom';

interface ActionButtonProps {
  buttonName: string;
  buttonStyle?: string;
  type?: 'openModal' | 'moveLink' | 'default';
  path?: string;
  onClick?: () => void;
  modalContent?: string;
}

export default function ActionButton({
  buttonName,
  buttonStyle,
  type = 'default',
  path = '/',
  onClick,
  modalContent,
}: ActionButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    if (type === 'openModal') {
      setIsModalOpen(true);
    } else if (type === 'moveLink') {
      navigate(path);
    } else {
      onClick;
    }
  };

  return (
    <>
      <button
        className={`h-16 w-[220px] rounded-[50px] ${buttonStyle} bg-black text-2xl text-[#FFFFFF] md:h-10 md:w-[140px] md:text-lg`}
        onClick={() => handleButtonClick(path)}
      >
        {buttonName}
      </button>
      <Modal
        title={buttonName}
        content={modalContent}
        isOpen={isModalOpen}
        buttonType="double"
        onConfirm={() => navigate(path)}
        onClose={() => setIsModalOpen(false)}
      ></Modal>
    </>
  );
}
