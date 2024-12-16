import { Input } from '@headlessui/react';

interface InputStringProps {
  width?: string;
  height?: string;
  defaultText?: string;
}

function SearchInput({
  width,
  height,
  defaultText = '검색어를 입력해주세요.',
}: InputStringProps) {
  return (
    <div className={`flex items-center justify-center`}>
      <div className={'relative lg:w-full lg:px-[15px] md:w-full md:px-[10px]'}>
        <Input
          name="full_name"
          type="text"
          className={` ${width} ${height} rounded-[70px] border border-black pl-[45px] text-lg text-gray lg:w-full`}
          defaultValue={defaultText}
        />
        <img
          src="../images/header/ico-search.svg"
          alt="Search Icon"
          className="absolute right-[45px] top-1/2 size-[34px] -translate-y-1/2 transform"
        />
      </div>
    </div>
  );
}

export default SearchInput;
