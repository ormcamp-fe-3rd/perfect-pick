import { useState } from 'react';

interface RoundStepperProps {
  defaultValue: number;
  fontSize?: string;
  shape: 'round' | 'square';
}

export default function CustomStepper({
  defaultValue = 1,
  fontSize,
  shape = 'square',
}: RoundStepperProps) {
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
    <div className="flex text-center text-lg font-semibold">
      <button
        className={`${fontSize} flex size-10 items-center justify-center ${shapeProp} bg-[#D9D9D9]`}
        onClick={() => adjustButtonClick(-1)}
      >
        -
      </button>
      <div
        className={`${fontSize} flex h-10 w-20 items-center justify-center border-gray`}
      >
        {amount}
      </div>
      <button
        className={`${fontSize} flex size-10 items-center justify-center ${shapeProp} bg-[#D9D9D9]`}
        onClick={() => adjustButtonClick(1)}
      >
        +
      </button>
    </div>
  );
}
