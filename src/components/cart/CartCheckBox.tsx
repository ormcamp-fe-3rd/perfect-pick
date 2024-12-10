import { Fragment, useState } from 'react';
import { Checkbox } from '@headlessui/react';
import clsx from 'clsx';

interface CartCheckBoxProps {
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
  style?: string;
  label?: string;
  children?: string;
}

export default function CartCheckBox({
  checked,
  onChange,
  style = 'size-6',
  label = 'hidden',
  children,
}: CartCheckBoxProps) {
  const [enabled, setEnabled] = useState(checked || false);

  const handleChange = (isChecked: boolean) => {
    if (onChange) {
      onChange(isChecked);
    } else {
      setEnabled(isChecked);
    }
  };

  return (
    <div className="flex items-center">
      <Checkbox
        checked={checked !== undefined ? checked : enabled}
        onChange={handleChange}
        as={Fragment}
      >
        {({ checked, disabled }) => (
          <span
            className={clsx(
              `block ${style} rounded border`,
              !checked && 'bg-[white]',
              checked && !disabled && 'bg-black',
              disabled && 'cursor-not-allowed opacity-50',
            )}
          >
            <svg
              className={clsx(
                'stroke-[white]',
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
      <span className={label}>{children}</span>
      {/* <span className="pl-6 text-2xl">{children}</span> */}
    </div>
  );
}
