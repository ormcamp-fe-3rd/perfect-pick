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
        <div>
          <span className="text-xl text-gray">Samsung</span>
          <div className="text-3xl font-semibold">갤럭시 S24 FE 자급제</div>
          <div className="flex gap-20">
            <span className="text-[36px] text-red">14% </span>
            <span className="text-[36px] font-extrabold text-red">
              896,000원
            </span>
          </div>
          <span className="text-2xl font-semibold text-gray line-through">
            946,000원
          </span>
        </div>
        <div className="my-8 flex flex-col gap-5 text-lg">
          <Select
            name="color"
            aria-label="color choice"
            className="h-12 rounded-xl border border-gray"
          >
            <option value="">컬러</option>
            <option value="">옵션1</option>
            <option value="">옵션2</option>
            <option value="">옵션3</option>
          </Select>
          <Select
            name="storage"
            aria-label="storage choice"
            className="h-12 rounded-xl border border-gray"
          >
            <option value="">용량</option>
            <option value="">옵션1</option>
            <option value="">옵션2</option>
            <option value="">옵션3</option>
          </Select>
          <Select
            name="additional product"
            aria-label="additional product choice"
            className="h-12 rounded-xl border border-gray"
          >
            <option value="">추가상품</option>
            <option value="">옵션1</option>
            <option value="">옵션2</option>
            <option value="">옵션3</option>
          </Select>
        </div>
        <div className="border-y px-3 py-5">
          <div className="text-lg font-semibold">옵션: 컬러/용량/추가상품</div>
          <div className="mt-5 flex items-center justify-between">
            <Stepper />
            <div className="text-[36px] font-extrabold">총 금액</div>
          </div>
        </div>
        <div className="mt-4 flex justify-around">
          <button className="h-16 w-[220px] rounded-[50px] bg-gray text-2xl text-[#FFFFFF]">
            장바구니 담기
          </button>
          <button className="h-16 w-[220px] rounded-[50px] bg-red text-2xl text-[#FFFFFF]">
            구매하기
          </button>
        </div>
      </div>
    </>
  );
}
