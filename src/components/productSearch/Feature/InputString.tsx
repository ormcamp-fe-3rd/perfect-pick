import { Input } from '@headlessui/react';

interface InputStringProps {
  width?: string;
  bgColor?: string;
  value?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputString({
  width,
  bgColor = 'skyblue',
  value,
  onChange,
}: InputStringProps) {
  return (
    <Input
      name="full_name"
      type="text"
      className={`${width} h-[39px] rounded`}
      style={{ backgroundColor: bgColor }}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputString;
