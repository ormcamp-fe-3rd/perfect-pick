import { useState } from 'react';
import { Checkbox, Field, Label } from '@headlessui/react';

type CheckBoxProps = {
  size?: string;
  color?: string;
  checkedColor?: string;
  labelStyle?: string;
  children?: React.ReactNode;
};

export default function CheckBox({
  size = 'size-4',
  color = 'bg-white',
  checkedColor = 'bg-blue-500',
  labelStyle = 'text-gray-700',
  children,
}: CheckBoxProps) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Field className="flex items-center gap-6">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? checkedColor : color} group block ${size} rounded border`}
      >
        {/* Checkmark icon */}
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
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
      </Checkbox>
      <Label className={labelStyle}>{children}</Label>
    </Field>
  );
}
