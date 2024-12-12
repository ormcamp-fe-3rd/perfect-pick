interface LoginButtonProps {
  name: string;
  onClick: () => void;
}

export default function LoginButton({ name, onClick }: LoginButtonProps) {
  return (
    <>
      <button
        type="submit"
        className="mt-[60px] flex h-20 w-full items-center justify-center rounded-full bg-pureblack text-2xl font-semibold text-white md:mt-[5px] md:h-[60px] md:text-lg"
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}
