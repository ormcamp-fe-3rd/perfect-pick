import { useState } from 'react';

interface UserInfoInputProps {
  type?: string;
  placeholder?: string;
  layout?: string;
  style?: string;
  height?: string;
  showButton?: boolean;
  buttonSize?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function UserInfoInput({
  type,
  placeholder,
  layout,
  style,
  height = 'h-[54px]',
  showButton = false,
  buttonSize = 'h-[54px] w-[170px]',
  buttonText = '내용입력',
  onButtonClick,
}: UserInfoInputProps) {
  const [value, setValue] = useState('');

  return (
    <>
      <div className={`flex ${layout}`}>
        <input
          type={type}
          placeholder={placeholder}
          className={`${style} ${height} w-full rounded-[10px] border p-6 text-lg`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {showButton && (
          <button
            className={`text-white ${buttonSize} ml-[15px] rounded-full bg-black text-center text-xl font-semibold lg:text-lg`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </>
  );
}
