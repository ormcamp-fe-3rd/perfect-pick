interface LoginButtonProps {
  name: string;
}

export default function LoginButton({ name }: LoginButtonProps) {
  return (
    <>
      <button
        type="submit"
        className="mt-[60px] flex h-20 w-full items-center justify-center rounded-full bg-pureblack text-2xl font-semibold text-white md:mt-[5px] md:h-[60px] md:text-lg"
      >
        {name}
      </button>
    </>
  );
}
