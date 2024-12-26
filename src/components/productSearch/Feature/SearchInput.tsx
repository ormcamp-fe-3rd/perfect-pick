import { Input } from '@headlessui/react';
import { useState } from 'react';

interface InputStringProps {
  width?: string;
  height?: string;
  defaultText?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function SearchInput({
  width,
  height,
  defaultText = '검색어를 입력해주세요.',
  onBlur,
}: InputStringProps) {
  const [value, setValue] = useState(defaultText); // 입력 필드 상태 관리

  const handleFocus = () => {
    if (value === defaultText) {
      setValue(''); // 포커스 시 기본 텍스트 제거
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value.trim()) {
      setValue(defaultText); // 입력값이 없으면 기본 텍스트 복원
    }
    onBlur?.(event); // 외부에서 전달된 onBlur 호출
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // 입력값 업데이트
  };

  const handleSearchClick = () => {};

  return (
    <div className="flex items-center justify-center">
      <div className="relative lg:w-full lg:px-[15px] md:w-full md:px-[10px]">
        <Input
          name="search"
          type="text"
          className={`${width} ${height} rounded-[70px] border border-black pl-[45px] text-lg text-gray lg:w-full`}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <img
          src="../images/header/ico-search.svg"
          alt="Search Icon"
          className="absolute right-[45px] top-1/2 size-[34px] -translate-y-1/2 transform"
          onClick={handleSearchClick} // 검색 아이콘 클릭 시 처리
        />
      </div>
    </div>
  );
}

export default SearchInput;
