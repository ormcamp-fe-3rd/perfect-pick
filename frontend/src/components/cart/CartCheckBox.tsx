import { Fragment, useState } from 'react';
import { Checkbox } from '@headlessui/react';
import clsx from 'clsx';

interface CartCheckBoxProps {
  checkedFormula?: boolean;
  onChange?: (isChecked: boolean) => void;
  style?: string;
  label?: string;
  children?: string;
}

export default function CartCheckBox({
  checkedFormula = false,
  onChange,
  style = 'size-6',
  label = 'hidden',
  children,
}: CartCheckBoxProps) {
  const [enabled, setEnabled] = useState(checkedFormula);

  const handleChange = (isChecked: boolean) => {
    if (onChange) {
      onChange(isChecked);
    } else {
      setEnabled(isChecked);
    }
  };

  const handleLabelClick = () => {
    handleChange(!enabled);
  };

  return (
    <div className="flex items-center">
      <Checkbox
        checked={checkedFormula ?? enabled}
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
      <span className={label} onClick={handleLabelClick}>
        {children}
      </span>
    </div>
  );
}
