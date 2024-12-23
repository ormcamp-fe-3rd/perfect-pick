// CheckBox.tsx

import { Checkbox } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

interface CheckBoxProps {
  item: string; // 체크된 항목의 값
  onClick: (item: string) => void; // 클릭 시 호출될 함수
}

function CheckBox({ item, onClick }: CheckBoxProps) {
  const [enabled, setEnabled] = useState(false);

  const handleChange = () => {
    setEnabled((prev) => !prev);
    onClick(item); // 클릭 시 선택된 항목을 부모에게 전달
  };

  return (
    <Checkbox checked={enabled} onChange={handleChange} as={Fragment}>
      {({ checked, disabled }) => (
        <span
          className={clsx(
            'block size-6 rounded bg-skyblue',
            checked && !disabled && 'bg-skyblue',
            disabled && 'cursor-not-allowed opacity-50',
          )}
        >
          <svg
            className={clsx(
              'stroke-black',
              checked ? 'opacity-100' : 'opacity-0',
            )}
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </Checkbox>
  );
}

export default CheckBox;
