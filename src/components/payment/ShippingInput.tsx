interface ShippingInputProps {
  type?: string;
  placeholder?: string;
  id?: string;
  layout?: string;
  style?: string;
  value?: string;
  onInputChange?: (value: string) => void;
  enabled?: boolean;
  showButton?: boolean;
  buttonId?: string;
  buttonSize?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function ShippingInput({
  type,
  placeholder,
  id,
  layout,
  style,
  value,
  onInputChange = () => {},
  enabled = true,
  showButton = false,
  buttonId,
  buttonSize = '',
  buttonText = '내용입력',
  onButtonClick,
}: ShippingInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <>
      <div className={`flex w-full ${layout}`}>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className={`${style} h-16 w-full rounded-[10px] border p-6 text-lg`}
          value={value}
          onChange={handleInputChange}
          disabled={!enabled}
        />
      </div>
      {showButton && (
        <button
          type="button"
          id={buttonId}
          className={`text-white ${buttonSize} ml-4 w-[170px] rounded-[50px] border bg-black text-center text-2xl font-semibold text-white`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}
    </>
  );
}
