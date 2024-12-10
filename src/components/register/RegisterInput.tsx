interface RegisterProps {
  type: string;
  placeholder: string;
  checkText: string;
}

export default function RegisterInput({
  type,
  placeholder,
  checkText,
}: RegisterProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-[50px] h-[70px] w-full rounded-[10px] border-[1px] border-black px-[25px]"
      />
      <ul className="mt-[22px]">
        <li className="flex">
          <img src="../images/register/ico-check-gray.svg" alt="체크 아이콘" />
          <p className="ml-[5px] text-gray">{checkText}</p>
        </li>
      </ul>
    </>
  );
}
