import { useState } from 'react';

interface CustomStepperProps {
  shape?: 'round' | 'square';
  defaultValue?: number;
  style?: string;
  numberStyle?: string;
  buttonStyle?: string;
}

export default function CustomStepper({
  shape = 'square',
  defaultValue = 1,
  style,
  numberStyle,
  buttonStyle,
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
      className={`${style} flex w-full items-center justify-between gap-5 text-center text-lg font-semibold`}
    >
      <button
        className={`${buttonStyle} flex size-10 items-center justify-center ${shapeProp} bg-[#D9D9D9]`}
        onClick={() => adjustButtonClick(-1)}
      >
        -
      </button>
      <div
        className={`${numberStyle} flex h-10 items-center justify-center border-gray`}
      >
        {amount}
      </div>
      <button
        className={`${buttonStyle} flex size-10 items-center justify-center ${shapeProp} bg-[#D9D9D9]`}
        onClick={() => adjustButtonClick(1)}
      >
        +
      </button>
    </div>
  );
}
