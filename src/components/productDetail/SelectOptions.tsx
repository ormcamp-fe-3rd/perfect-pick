import { Select } from '@headlessui/react';

interface SelectOptionsProps {
  name: string;
  options: string[];
  height?: string;
}

export default function SelectOptions({
  name,
  height = 'h-12 md:h-9',
  options,
}: SelectOptionsProps) {
  let label = '';
  switch (name) {
    case 'color':
      label = '색상';
      break;
    case 'storage':
      label = '용량';
      break;
    case 'additional':
      label = '추가상품';
      break;
    default:
      label = name;
  }
  return (
    <>
      <Select
        name={name}
        aria-label={`${name} choice`}
        className={`${height} rounded-xl border border-gray`}
      >
        <option value="label">{label}</option>
        {options.map((option) => (
          <option value={`${option}`}>{option}</option>
        ))}
      </Select>
    </>
  );
}
