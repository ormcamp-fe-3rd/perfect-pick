interface LoginInputProps {
  name: string;
  type: string;
  errorText: string;
}

export default function LoginInput({ name, type, errorText }: LoginInputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={`${name}를 입력해주세요.`}
        className="h-[70px] w-full rounded-[10px] border-[1px] px-[25px] disabled:bg-[#e3e3e3]"
      />
      <p>{errorText}</p>
    </>
  );
}
