import { useState } from 'react';

interface CustomStepperProps {
  defaultValue?: number;
  size?: string;
  fontSize?: string;
  shape?: 'round' | 'square';
}

export default function CustomStepper({
  defaultValue = 1,
  size = 'size-10',
  fontSize,
  shape = 'square',
}: CustomStepperProps) {
  const [amount, setAmount] = useState(defaultValue);

  const adjustButtonClick = (action: number) => {
    if (action === -1) {
      setAmount(Math.max(1, amount - 1));
    } else {
      setAmount(Math.min(10, amount + 1));
    }
  };

  const shapeProp = shape === 'round' ? 'rounded-full' : '';

  return (
    <div
      className={`mx-3 flex w-full items-center justify-between gap-5 text-center text-lg font-semibold`}
    >
      <button
        className={`${fontSize} flex ${size} items-center justify-center ${shapeProp} bg-[#D9D9D9]`}
        onClick={() => adjustButtonClick(-1)}
      >
        -
      </button>
      <div
        className={`${fontSize} flex h-10 items-center justify-center border-gray`}
      >
        {amount}
      </div>
      <button
        className={`${fontSize} flex ${size} items-center justify-center ${shapeProp} bg-[#D9D9D9]`}
        onClick={() => adjustButtonClick(1)}
      >
        +
      </button>
    </div>
  );
}
