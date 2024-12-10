interface NonMemberSectionTitleProps {
  title: string;
  firstSection?: boolean;
}

export default function NonMemberSectionTitle({
  title,
  firstSection,
}: NonMemberSectionTitleProps) {
  return (
    <>
      <h3
        className={`border-b-[2px] border-b-black pb-[15px] text-2xl font-bold leading-none ${firstSection ? 'mt-10' : 'mt-[60px]'}`}
      >
        {title}
      </h3>
    </>
  );
}
