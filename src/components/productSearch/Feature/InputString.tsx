import { Input } from '@headlessui/react';

interface InputStringProps {
  width?: string;
  bgColor?: string;
}

function InputString({ width, bgColor = 'skyblue' }: InputStringProps) {
  return (
    <Input
      name="full_name"
      type="text"
      className={`${width} h-[39px] rounded`}
      style={{ backgroundColor: bgColor }}
    />
  );
}

export default InputString;
