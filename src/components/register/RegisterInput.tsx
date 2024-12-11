import { useState } from 'react';

interface RegisterProps {
  type: string;
  placeholder: string;
  checkTexts: string[];
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonFullSize?: boolean;
  addressInput?: boolean;
  disableInput?: boolean;
  validation: (value: string) => boolean;
}

export default function RegisterInput({
  type,
  placeholder,
  checkTexts,
  showButton = false,
  buttonText = '내용입력',
  onButtonClick,
  buttonFullSize = false,
  addressInput = false,
  disableInput = false,
  validation,
}: RegisterProps) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleBlur = () => {
    const result = validation(value);
    setIsValid(result);
  };

  return (
    <>
      <div className="mt-[50px] flex flex-wrap items-center justify-between">
        <input
          type={type}
          placeholder={placeholder}
          className={`h-[70px] rounded-[10px] border-[1px] px-[25px] disabled:bg-[#e3e3e3] ${showButton === false ? 'w-full' : 'w-[calc(100%-188px)] md:w-full'} ${isValid === false ? 'border-red' : isValid === true ? 'border-black' : ''}`}
          disabled={disableInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
        />
        {showButton && (
          <button
            className={`h-[70px] rounded-full bg-black text-center text-2xl font-semibold text-white md:mt-[15px] md:h-[60px] md:text-lg ${buttonFullSize === false ? 'w-[170px] md:w-full' : 'w-full'}`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
        {addressInput && (
          <input
            type="text"
            placeholder="상세 주소를 입력해주세요."
            className="mt-[15px] h-[70px] w-full rounded-[10px] border-[1px] border-black px-[25px]"
          />
        )}
      </div>

      <ul className="mt-[22px] flex flex-wrap">
        {checkTexts.map((text, index) => (
          <li key={index} className="mr-5 flex">
            <img
              src={`${isValid ? '../images/register/ico-check-green.svg' : '../images/register/ico-check-gray.svg'}`}
              alt="체크 아이콘"
            />
            <p className={`ml-[5px] ${isValid ? 'text-green' : 'text-gray'}`}>
              {text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}