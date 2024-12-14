import { ReactNode } from 'react';

interface ModalProps {
  title?: string;
  content?: ReactNode;
  textStyle?: string;
  isOpen: boolean;
  buttonType?: 'single' | 'double';
  buttonStyle?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

export default function Modal({
  title = '타이틀을 입력해주세요',
  content = '설명을 입력해주세요',
  textStyle = 'text-2xl font-semibold',
  isOpen,
  buttonType = 'single',
  buttonStyle = 'h-14 w-32',
  onConfirm = () => {},
  onClose = () => {},
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div
          className={`absolute left-1/2 top-1/2 flex w-2/3 max-w-[680px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-12 rounded-2xl bg-[white] px-10 py-20 ${textStyle} min-w-fit`}
        >
          <div>{title}</div>
          <div>{content}</div>
          <div className="flex gap-5">
            <button
              className={`${buttonStyle} rounded-[50px] bg-black text-2xl font-semibold text-[white]`}
              onClick={onConfirm}
            >
              확인
            </button>
            {buttonType === 'double' && (
              <button
                className={`${buttonStyle} rounded-[50px] bg-black text-2xl font-semibold text-[white]`}
                onClick={onClose}
              >
                닫기
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
