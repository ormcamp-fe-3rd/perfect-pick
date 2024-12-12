interface LoginInputProps {
  name: string;
  type: string;
  validate: (value: string) => string | null;
  value: string;
  onChange: (value: string) => void;
  errorText: string | null;
}

export default function LoginInput({
  name,
  type,
  value,
  onChange,
  errorText,
}: LoginInputProps) {
  return (
    <div className="mb-4">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`${name}를 입력해주세요.`}
        className={`h-[70px] w-full rounded-[10px] border-[1px] px-[25px] disabled:bg-[#e3e3e3] ${errorText ? 'border-red' : 'border-black'}`}
      />
      {errorText && (
        <p className="text-red-500 mt-2 text-sm text-red">{errorText}</p>
      )}
    </div>
  );
}
