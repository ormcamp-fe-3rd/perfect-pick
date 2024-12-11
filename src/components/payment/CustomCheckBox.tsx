import { Checkbox } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

interface CheckBoxProps {
  style?: string;
  boxSize?: string;
  boxStyle?: string;
  checkedStyle?: string;
  strokeColor?: string;
  strokeDefault?: string;
  label?: string;
  onClick?: (isChecked: boolean) => void;
  children?: string;
}

export default function CustomCheckBox({
  style,
  boxSize = 'size-6',
  boxStyle = 'bg-white rounded border',
  checkedStyle,
  strokeColor = 'black',
  strokeDefault = 'opacity-0',
  label,
  onClick = () => {},
  children,
}: CheckBoxProps) {
  const [enabled, setEnabled] = useState(false);

  const handleLabelClick = () => {
    const isChecked = !enabled;
    setEnabled(isChecked);
    onClick(isChecked);
  };

  return (
    <div className={style}>
      <Checkbox checked={enabled} onChange={setEnabled} as={Fragment}>
        {({ checked, disabled }) => (
          <span
            className={clsx(
              `block ${boxSize} ${boxStyle}`,
              checked && !disabled && `${checkedStyle}`,
              disabled && 'cursor-not-allowed opacity-50',
            )}
          >
            <svg
              className={clsx(checked ? strokeColor : strokeDefault)}
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
