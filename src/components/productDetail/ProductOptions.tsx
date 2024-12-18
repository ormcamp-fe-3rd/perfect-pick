import { useState } from 'react';
import ActionButton from '@/components/productDetail/ActionButton';
import CustomStepper from '@/components/productDetail/CustomStepper';
import SelectOption from '@/components/productDetail/SelectOption';

export default function ProductOptions({ product }: { product: any }) {
  const optionalPrices: Record<string, Record<string, number>> = {
    color: product.opt_color,
    storage: product.opt_storage,
  };

  const [selectedOptions, setSelectedOptions] = useState(
    Object.keys(optionalPrices).reduce(
      (acc, key) => {
        acc[key] = '';
        return acc;
      },
      {} as Record<string, string>,
    ),
  );

  const [totalPrice, setTotalPrice] = useState(product.price_sell);

  const [itemCount, setItemCount] = useState(1);

  const handleSelectedOptions = (key: string, value: string) => {
    const updatedOptions = { ...selectedOptions, [key]: value };
    setSelectedOptions(updatedOptions);

    const price = calculateTotalPrice(updatedOptions) * itemCount;
    setTotalPrice(price);
  };

  const handleChangeItemCount = (action: number) => {
    let updatedCount = itemCount;
    if (action < 0) {
      updatedCount = Math.max(1, itemCount + action);
    } else if (action > 0) {
      updatedCount = Math.min(10, itemCount + action);
    }
    setItemCount(updatedCount);

    const price = calculateTotalPrice(selectedOptions) * updatedCount;
    setTotalPrice(price);
  };

  const SelectiedOptionsLabel = Object.entries(selectedOptions)
    .filter(([, value]) => value)
    .map(([, value]) => value)
    .join('/');

  const checkRequiredOptionsSelected = Object.entries(selectedOptions)
    .filter(([key]) => key !== 'additional')
    .every(([, value]) => value);

  const calculateTotalPrice = (selectedOptions: Record<string, string>) => {
    let total = product.price_sell;
    for (const key in selectedOptions) {
      if (selectedOptions[key]) {
        total += optionalPrices[key][selectedOptions[key]];
      }
    }
    return total * itemCount;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 md:items-center md:gap-4">
        <span className="text-xl leading-none text-gray md:text-base">
          {product.brand}
        </span>
        <div className="text-3xl font-semibold leading-none md:text-[30px]">
          {product.title}
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 sm:gap-5">
          <div className="flex gap-20 lg:gap-10 md:gap-5">
            <span className="text-[36px] leading-none text-red md:text-2xl">
              {product.price_dis_rate}
            </span>
            <span className="text-[36px] font-extrabold leading-none text-red md:text-2xl">
              {product.price_sell.toLocaleString()}원 ~
            </span>
          </div>
          <span className="text-2xl font-semibold leading-none text-gray line-through md:text-base">
            {product.price_origin.toLocaleString()}원
          </span>
        </div>
      </div>
      <div className="my-8 flex flex-col gap-5 text-lg md:my-5 md:gap-3">
        {Object.entries(optionalPrices).map(([key, value], index) => (
          <SelectOption
            key={index}
            name={key}
            options={Object.keys(value)}
            onChange={handleSelectedOptions}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 border-y px-3 py-5 md:gap-4 md:px-2 md:py-4">
        {SelectiedOptionsLabel && (
          <div className="text-2xl font-semibold leading-none md:text-lg">
            {`옵션: ${SelectiedOptionsLabel}`}
          </div>
        )}
        <div className="flex items-center justify-between">
          <CustomStepper style="max-w-48" onAdjust={handleChangeItemCount} />
          <div className="w-full text-end text-[36px] font-extrabold leading-none md:text-[28px]">
            {totalPrice.toLocaleString()}원
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-around gap-4">
        <ActionButton
          buttonName="장바구니 담기"
          buttonStyle="bg-gray"
          type="openModal"
          path="/cart"
          modalContent={
            <>
              <div>상품명: {product.title}</div>
              <div>옵션: {SelectiedOptionsLabel}</div>
              <div>수량: {itemCount}</div>
              <div>금액: {totalPrice.toLocaleString()}원</div>
            </>
          }
          disableModal={!checkRequiredOptionsSelected}
        />
        <ActionButton
          buttonName="구매하기"
          buttonStyle="bg-red"
          type="moveLink"
          path="/payment"
        />
      </div>
    </div>
  );
}
