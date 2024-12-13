import { Select } from '@headlessui/react';

interface SelectOptionProps {
  name: string;
  options: string[];
  height?: string;
}

export default function SelectOption({
  name,
  height = 'h-12 md:h-9',
  options,
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
        className={`${height} rounded-xl border border-gray`}
      >
        <option value={name}>{labels[name] ? labels[name] : name}</option>
        {options.map((option) => (
          <option value={`${option}`}>{option}</option>
        ))}
      </Select>
    </>
  );
}
