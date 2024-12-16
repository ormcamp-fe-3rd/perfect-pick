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
  onChange?: (value: string) => void;
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
  onChange,
}: RegisterProps) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false); // 입력 필드가 클릭되었는지 여부

  const handleBlur = () => {
    setTouched(true); // 입력 필드가 한 번이라도 포커스를 잃으면 touched를 true로 설정
    const result = validation(value);
    setIsValid(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue); // 부모 컴포넌트로 값 전달
  };

  return (
    <>
      <div className="mt-[50px] flex flex-wrap items-center justify-between">
        <input
          type={type}
          placeholder={placeholder}
          className={`h-[70px] rounded-[10px] border-[1px] px-[25px] disabled:bg-[#e3e3e3] ${
            !showButton ? 'w-full' : 'w-[calc(100%-188px)] md:w-full'
          } ${
            touched && !isValid
              ? 'border-red'
              : touched && isValid
                ? 'border-black'
                : ''
          }`}
          disabled={disableInput}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {showButton && (
          <button
            className={`h-[70px] rounded-full bg-black text-center text-2xl font-semibold text-white md:mt-[15px] md:h-[60px] md:text-lg ${
              !buttonFullSize ? 'w-[170px] md:w-full' : 'w-full'
            }`}
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
        {checkTexts.map((text) => (
          <li key={text} className="mr-5 flex">
            <img
              src={`../images/register/ico-check-${isValid ? 'green' : 'gray'}.svg`}
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
