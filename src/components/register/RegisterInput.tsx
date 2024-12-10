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
}: RegisterProps) {
  return (
    <>
      <div className="mt-[50px] flex flex-wrap items-center justify-between">
        <input
          type={type}
          placeholder={placeholder}
          className={`h-[70px] rounded-[10px] border-[1px] border-black px-[25px] disabled:bg-[#e3e3e3] ${showButton == false ? 'w-full' : 'w-[calc(100%-188px)]'}`}
          disabled={disableInput}
        />
        {showButton && (
          <button
            className={`h-[70px] rounded-full bg-black text-center text-2xl font-semibold text-white ${buttonFullSize == false ? 'w-[170px]' : 'w-full'}`}
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

      <ul className="mt-[22px] flex">
        {checkTexts.map((text, index) => (
          <li key={index} className={`flex ${index > 0 ? 'ml-5' : ''}`}>
            <img
              src="../images/register/ico-check-gray.svg"
              alt="체크 아이콘"
            />
            <p className="ml-[5px] text-gray">{text}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
