import { useState } from 'react';

interface CustomStepperProps {
  shape?: 'round' | 'square';
  style?: string;
  numberStyle?: string;
  buttonStyle?: string;
  defaultValue?: number;
  onAdjust?: (action: number) => void;
}

export default function CustomStepper({
  shape = 'square',
  style = '',
  numberStyle = '',
  buttonStyle = '',
  defaultValue = 1,
  onAdjust,
}: CustomStepperProps) {
  const [amount, setAmount] = useState(defaultValue);

  const adjustButtonClick = (action: number) => {
    if (onAdjust) {
      onAdjust(action);
    }

    if (action < 0) {
      setAmount(Math.max(1, amount + action));
    } else if (action > 0) {
      setAmount(Math.min(10, amount + action));
    }
  };

  const shapeProp = shape === 'round' ? 'rounded-full' : '';

  return (
    <div
      className={`${style} flex w-full max-w-40 justify-between gap-5 text-center text-lg font-semibold`}
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
