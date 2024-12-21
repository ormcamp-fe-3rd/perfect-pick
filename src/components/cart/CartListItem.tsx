import CartCheckBox from '@/components/cart/CartCheckBox';
import CustomStepper from '@/components/common/CustomStepper';
import { CartItemData } from '@/types';

interface CartData extends CartItemData {
  id: string;
}

interface CartListItemProps {
  item: CartData;
  checkedItemsId: string[];
  onCheckboxChange: (id: string, isChecked: boolean) => void;
}

export default function CartListItem({
  item,
  checkedItemsId,
  onCheckboxChange,
}: CartListItemProps) {
  return (
    <>
      <div className="grid grid-cols-7 items-center border-b lg:grid-cols-1">
        <div className="col-span-4 lg:col-span-1">
          <div className="flex items-center gap-6 border-r p-6 lg:border-0 lg:px-10 md:px-2">
            <CartCheckBox
              checkedFormula={new Set(checkedItemsId).has(item.id)}
              onChange={(isChecked) => onCheckboxChange(item.id, isChecked)}
            />
            <div className="flex items-center gap-11 lg:gap-6">
              <img
                className="size-[110px] rounded-[10px]"
                // src={item.src}
                alt={`${item.product_title}'s image`}
              />
              <div className="flex flex-col justify-center gap-6">
                <div className="text-2xl font-semibold">
                  {item.product_title}
                </div>
                <div className="text-lg font-semibold">
                  옵션: {Object.values(item.option).join('/')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center border-r lg:border-0">
          <div className="absolute left-20 hidden text-2xl lg:block">수량:</div>
          <div className="flex w-full justify-center lg:w-52">
            <CustomStepper
              shape="round"
              frameStyle="size-10 lg:size-7"
              numberStyle="text-2xl lg:text-xl"
              defaultValue={item.amount}
            />
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center border-r py-3 text-2xl lg:border-0 lg:text-xl">
          <div className="absolute left-20 hidden text-2xl lg:block">
            상품금액:
          </div>
          {(
            ((item.price.productPrice ?? 0) +
              (item.price.accessoriesPrice ?? 0)) *
            item.amount
          ).toLocaleString()}
          원
        </div>
        <div className="relative flex h-full items-center justify-center py-3 text-2xl lg:text-xl">
          <div className="absolute left-20 hidden text-2xl lg:block">
            배송비:
          </div>
          <div className="text-center text-2xl lg:text-xl">
            {(item.price.deliveryFee ?? 0).toLocaleString()}원
          </div>
        </div>
      </div>
    </>
  );
}
