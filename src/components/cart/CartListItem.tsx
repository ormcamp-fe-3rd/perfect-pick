import CartCheckBox from '@/components/cart/CartCheckBox';
import CustomStepper from '@/components/common/CustomStepper';
import { CartItemData } from '@/types';
import { Link } from 'react-router';

interface CartData extends CartItemData {
  id: string;
}

interface CartListItemProps {
  item: CartData;
  checkedItemsId: string[];
  onCheckboxChange: (id: string, isChecked: boolean) => void;
  onQuantityChange: (itemId: string, newQuantity: number) => void;
}

export default function CartListItem({
  item,
  checkedItemsId,
  onCheckboxChange,
  onQuantityChange,
}: CartListItemProps) {
  const totalPrice =
    (item.price.productPrice + (item.price.accessoriesPrice ?? 0)) *
    item.amount;

  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(item.id, newQuantity);
  };

  const optionsLabel = Object.entries(item.option)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .filter(([, value]) => value)
    .map(([, value]) => value)
    .join('/');

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
              <Link to={`/product/${item.product_id}`}>
                <img
                  className="size-[110px] rounded-[10px]"
                  src={item.thumbnail}
                  alt={`${item.product_title}'s image`}
                />
              </Link>
              <div className="flex flex-col justify-center gap-6">
                <div className="text-2xl font-semibold">
                  {item.product_title}
                </div>
                <div className="text-lg font-semibold">
                  옵션: {optionsLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center border-r lg:border-0">
          <div className="absolute left-20 hidden w-full text-2xl lg:block">
            수량:
          </div>
          <div className="flex w-full justify-center lg:w-52">
            <CustomStepper
              shape="round"
              frameStyle="size-10"
              numberStyle="text-2xl lg:text-xl"
              defaultValue={item.amount}
              onChange={handleQuantityChange}
            />
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center border-r py-3 text-2xl lg:border-0 lg:text-xl">
          <div className="absolute left-20 hidden text-2xl lg:block">
            상품금액:
          </div>
          {totalPrice.toLocaleString()}원
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
