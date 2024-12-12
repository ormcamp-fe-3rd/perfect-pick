import { useState } from 'react';

interface ShippingInputProps {
  type?: string;
  placeholder?: string;
  layout?: string;
  style?: string;
}

export default function ShippingInput({
  type,
  placeholder,
  layout,
  style,
}: ShippingInputProps) {
  const [value, setValue] = useState('');

  return (
    <>
      <div className={`flex ${layout}`}>
        <input
          type={type}
          placeholder={placeholder}
          className={`${style} h-16 w-full rounded-[10px] border p-6 text-lg`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
}
