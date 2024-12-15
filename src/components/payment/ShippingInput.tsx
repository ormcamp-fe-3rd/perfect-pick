interface ShippingInputProps {
  type?: string;
  placeholder?: string;
  layout?: string;
  style?: string;
  value?: string;
  onInputChange?: (value: string) => void;
  enabled?: boolean;
}

export default function ShippingInput({
  type,
  placeholder,
  layout,
  style,
  value,
  onInputChange = () => {},
  enabled = true,
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
          className={`${style} h-16 w-full rounded-[10px] border p-6 text-lg`}
          value={value}
          onChange={handleInputChange}
          disabled={!enabled}
        />
      </div>
    </>
  );
}
