import { useState } from 'react';

interface CustomStepperProps {
  shape?: 'round' | 'square';
  frameStyle?: string;
  numberStyle?: string;
  buttonStyle?: string;
  defaultValue?: number;
  onChange?: (newQuantity: number) => void;
}

export default function CustomStepper({
  shape = 'square',
  frameStyle = '',
  numberStyle = '',
  buttonStyle = '',
  defaultValue = 1,
  onChange = () => {},
}: CustomStepperProps) {
  const [amount, setAmount] = useState(defaultValue);

  const adjustButtonClick = (action: number) => {
    const newAmount =
      action < 0 ? Math.max(1, amount + action) : Math.min(10, amount + action);

    setAmount(newAmount);
    onChange(newAmount);
  };

  const shapeProp = shape === 'round' ? 'rounded-full' : '';

  return (
    <div
      className={`${frameStyle} flex w-full max-w-40 justify-between gap-5 text-center text-lg font-semibold`}
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
