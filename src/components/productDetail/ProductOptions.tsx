import { Select } from '@headlessui/react';
import { useState } from 'react';

function Stepper() {
  const [amount, setAmount] = useState(1);

  const adjustButtonClick = (action: number) => {
    if (action === -1) {
      setAmount(Math.max(1, amount - 1));
    } else {
      setAmount(Math.min(10, amount + 1));
    }
  };

  return (
    <div className="flex text-center text-lg font-semibold">
      <button
        className="flex size-10 items-center justify-center bg-[#D9D9D9]"
        onClick={() => adjustButtonClick(-1)}
      >
        -
      </button>
      <div className="flex h-10 w-20 items-center justify-center border-gray">
        {amount}
      </div>
      <button
        className="flex size-10 items-center justify-center bg-[#D9D9D9]"
        onClick={() => adjustButtonClick(1)}
      >
        +
      </button>
    </div>
  );
}

export default function ProductOptions() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-6 md:items-center lg:gap-4">
          <span className="text-xl leading-none text-gray sm:text-base md:text-base lg:text-base">
            Samsung
          </span>
          <div className="text-3xl font-semibold leading-none lg:text-[30px]">
            갤럭시 S24 FE 자급제
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-5">
            <div className="flex gap-20 lg:gap-5">
              <span className="text-[36px] leading-none text-red lg:text-2xl">
                14%
              </span>
              <span className="text-[36px] font-extrabold leading-none text-red lg:text-2xl">
                896,000원
              </span>
            </div>
            <span className="text-2xl font-semibold leading-none text-gray line-through lg:text-base">
              946,000원
            </span>
          </div>
        </div>
        <div className="my-8 flex flex-col gap-5 text-lg lg:my-5 lg:gap-3">
          <Select
            name="color"
            aria-label="color choice"
            className="h-12 rounded-xl border border-gray lg:h-9"
          >
            <option value="">컬러</option>
            <option value="">옵션1</option>
            <option value="">옵션2</option>
            <option value="">옵션3</option>
          </Select>
          <Select
            name="storage"
            aria-label="storage choice"
            className="h-12 rounded-xl border border-gray lg:h-9"
          >
            <option value="">용량</option>
            <option value="">옵션1</option>
            <option value="">옵션2</option>
            <option value="">옵션3</option>
          </Select>
          <Select
            name="additional product"
            aria-label="additional product choice"
            className="h-12 rounded-xl border border-gray lg:h-9"
          >
            <option value="">추가상품</option>
            <option value="">옵션1</option>
            <option value="">옵션2</option>
            <option value="">옵션3</option>
          </Select>
        </div>
        <div className="flex flex-col gap-6 border-y px-3 py-5 lg:gap-4 lg:px-2 lg:py-4">
          <div className="text-lg font-semibold leading-none">
            옵션: 컬러/용량/추가상품
          </div>
          <div className="flex items-center justify-between">
            <Stepper />
            <div className="text-[36px] font-extrabold leading-none lg:text-[28px]">
              총 금액
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-around">
          <button className="h-16 w-[220px] rounded-[50px] bg-gray text-2xl text-[#FFFFFF] lg:h-10 lg:w-[140px] lg:text-lg">
            장바구니 담기
          </button>
          <button className="h-16 w-[220px] rounded-[50px] bg-red text-2xl text-[#FFFFFF] lg:h-10 lg:w-[140px] lg:text-lg">
            구매하기
          </button>
        </div>
      </div>
    </>
  );
}
