import { Checkbox } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

interface CheckBoxProps {
  style?: string;
  boxStyle?: string;
  label?: string;
  children?: string;
}

export default function CustomCheckBox({
  style,
  boxStyle = 'size-6',
  label,
  children,
}: CheckBoxProps) {
  const [enabled, setEnabled] = useState(false);

  const handleLabelClick = () => {
    const isChecked = !enabled;
    setEnabled(isChecked);
  };

  return (
    <div className={style}>
      <Checkbox checked={enabled} onChange={setEnabled} as={Fragment}>
        {({ checked, disabled }) => (
          <span
            className={clsx(
              `bg-white block ${boxStyle} rounded border`,
              checked && !disabled && 'bg-black',
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
      <span className={label} onClick={handleLabelClick}>
        {children}
      </span>
    </div>
  );
}
