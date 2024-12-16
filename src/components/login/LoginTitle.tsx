interface LoginTitleProps {
  title: string;
}

export default function LoginTitle({ title }: LoginTitleProps) {
  return (
    <>
      <h2 className="pt-[70px] text-center text-3xl font-extrabold lg:pt-[50px] md:pt-[25px] md:text-[30px]">
        {title}
      </h2>
    </>
  );
}
