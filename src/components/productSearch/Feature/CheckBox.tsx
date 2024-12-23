import { Checkbox } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

interface CheckBoxProps {
  item: string; // 체크된 항목의 값
  type: string; // 체크된 항목의 타입
  onClick: (item: string, type: string) => void;
}

function CheckBox({ item, type, onClick }: CheckBoxProps) {
  const [enabled, setEnabled] = useState(false);

  const handleChange = () => {
    setEnabled((prev) => !prev);
    onClick(item, type);
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
