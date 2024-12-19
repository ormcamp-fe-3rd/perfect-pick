import { useState } from 'react';

interface UserInfoInputProps {
  id: string;
  type?: string;
  placeholder?: string;
  layout?: string;
  style?: string;
  height?: string;
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
  showButton = false,
  buttonId,
  buttonSize = 'h-[54px] w-[170px]',
  buttonText = '내용입력',
  onButtonClick,
}: UserInfoInputProps) {
  const [value, setValue] = useState('');

  return (
    <>
      <div className={`flex ${layout}`}>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`${style} ${height} w-full rounded-[10px] border p-6 text-lg`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {showButton && (
          <button
            id={buttonId}
            className={`text-white ${buttonSize} ml-[15px] rounded-full bg-black text-center text-lg font-semibold`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </>
  );
}
