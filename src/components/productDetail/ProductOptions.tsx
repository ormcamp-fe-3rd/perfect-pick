import CustomStepper from '@/components/productDetail/CustomStepper';
import SelectOption from '@/components/productDetail/SelectOption';
import ActionButton from '@/components/productDetail/ActionButton';

export default function ProductOptions() {
  const optionsList: Record<string, string[]> = {
    color: ['white', 'black', 'blue'],
    storage: ['128GB', '256GB', '512G', '1TB'],
    additional: ['charger1', 'charger2', 'cable'],
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 md:items-center md:gap-4">
        <span className="text-xl leading-none text-gray md:text-base">
          Samsung
        </span>
        <div className="text-3xl font-semibold leading-none md:text-[30px]">
          갤럭시 S24 FE 자급제
        </div>
        <div className="flex flex-col gap-6 sm:gap-5 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex gap-20 md:gap-5 lg:gap-10">
            <span className="text-[36px] leading-none text-red md:text-2xl">
              14%
            </span>
            <span className="text-[36px] font-extrabold leading-none text-red md:text-2xl">
              896,000원
            </span>
          </div>
          <span className="text-2xl font-semibold leading-none text-gray line-through md:text-base">
            946,000원
          </span>
        </div>
      </div>
      <div className="my-8 flex flex-col gap-5 text-lg md:my-5 md:gap-3">
        {Object.keys(optionsList).map((key) => (
          <SelectOption name={key} options={optionsList[key]} />
        ))}
      </div>
      <div className="flex flex-col gap-6 border-y px-3 py-5 md:gap-4 md:px-2 md:py-4">
        <div className="text-2xl font-semibold leading-none md:text-lg">
          옵션: 컬러/용량/추가상품
        </div>
        <div className="flex items-center justify-between">
          <CustomStepper />
          <div className="w-full text-end text-[36px] font-extrabold leading-none md:text-[28px]">
            총 금액
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-around gap-4">
        <ActionButton
          buttonName="장바구니 담기"
          buttonStyle="bg-gray"
          type="openModal"
          path="/cart"
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
