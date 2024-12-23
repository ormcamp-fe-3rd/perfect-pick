import { ReactNode } from 'react';

interface ModalProps {
  title?: string;
  content?: ReactNode;
  textStyle?: string;
  isOpen: boolean;
  buttonType?: 'single' | 'double';
  buttonStyle?: string;
  leftButtonName?: string;
  rightButtonName?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

export default function Modal({
  title = '타이틀을 입력해주세요',
  content = '설명을 입력해주세요',
  textStyle = 'text-2xl font-semibold',
  isOpen,
  buttonType = 'single',
  buttonStyle = 'min-h-14 min-w-32 p-4',
  leftButtonName = '확인',
  rightButtonName = '닫기',
  onConfirm = () => {},
  onClose = () => {},
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div
          className={`${textStyle} absolute left-1/2 top-1/2 flex w-2/3 min-w-[400px] max-w-[680px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-12 text-nowrap rounded-2xl bg-[white] p-20`}
        >
          <div>{title}</div>
          <div>{content}</div>
          <div className="flex gap-5">
            <button
              className={`${buttonStyle} rounded-[50px] bg-black text-xl font-semibold text-[white]`}
              onClick={onConfirm}
            >
              {leftButtonName}
            </button>
            {buttonType === 'double' && (
              <button
                className={`${buttonStyle} rounded-[50px] bg-black text-xl font-semibold text-[white]`}
                onClick={onClose}
              >
                {rightButtonName}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
