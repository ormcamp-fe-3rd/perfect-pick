import { Select } from '@headlessui/react';

interface SelectOptionProps {
  name: string;
  options: string[];
  onChange: (key: string, value: string) => void;
  style?: string;
}

export default function SelectOption({
  name,
  options,
  onChange,
  style,
}: SelectOptionProps) {
  const labels: Record<string, string> = {
    color: '색상',
    storage: '용량',
    additional: '추가상품',
  };

  return (
    <>
      <Select
        name={name}
        aria-label={`${name} choice`}
        className={`${style} h-12 rounded-xl border border-gray md:h-9`}
        onChange={(e) => onChange(name, e.target.value)}
      >
        <option value="">{labels[name] || '구분'}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </>
  );
}
