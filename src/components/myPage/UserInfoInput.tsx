import { ChangeEvent } from 'react';

interface UserInfoInputProps {
  id: string;
  type?: string;
  placeholder?: string;
  layout?: string;
  style?: string;
  height?: string;
  value?: string; // 외부에서 전달받는 입력값
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // 외부에서 전달받는 상태 변경 함수
  showButton?: boolean;
  buttonId?: string;
  buttonSize?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function UserInfoInput({
  id,
  type,
  placeholder,
  layout = '',
  style,
  height = 'h-[54px]',
  value = '',
  onChange = () => {},
  showButton = false,
  buttonId,
  buttonSize = 'h-[54px] w-[170px]',
  buttonText = '내용입력',
  onButtonClick,
}: UserInfoInputProps) {
  return (
    <div className={`flex ${layout}`}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${style} ${height} w-full rounded-[10px] border p-6 text-lg`}
        value={value}
        onChange={onChange} // 외부 상태 관리
      />
      {showButton && (
        <button
          type="button"
          id={buttonId}
          className={`text-white ${buttonSize} ml-[15px] rounded-full bg-black text-center text-lg font-semibold`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
