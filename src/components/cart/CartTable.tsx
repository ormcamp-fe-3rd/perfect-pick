import { useState } from 'react';
import CartCheckBox from './CartCheckBox';
import CustomStepper from './CustomStepper';

export default function CartTable() {
  const cartList = [
    {
      id: 1,
      name: '갤럭시 S24 FE 자급제',
      src: 'https://i.imgur.com/svOz7A9b.jpg',
      options: {
        color: 'white',
        storage: '256G',
        accessories: 'PD 충전기 절전형(케이블 미포함)',
      },
      amount: 2,
      price: {
        productPrice: 896000,
        accessoriesPrice: 15000,
      },
    },
    {
      id: 2,
      name: '아이패드 프로 11인치 (Wi-Fi)',
      src: 'https://i.imgur.com/Ae1wefjb.jpg',
      options: { color: '스페이스 블랙', storage: '1T' },
      amount: 1,
      price: { productPrice: 2594000 },
    },
    {
      id: 3,
      name: '갤럭시 S24 FE 자급제',
      src: 'https://i.imgur.com/svOz7A9b.jpg',
      options: { color: 'white', storage: '512G' },
      amount: 1,
      price: { productPrice: 896000, deliveryFee: 3000 },
    },
  ];

  const allItems = new Set(cartList.map((item) => item.id));
  const [checkedItems, setCheckedItems] = useState(allItems);

  const handleCheckboxChange = (itemId: number, isChecked: boolean) => {
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        return new Set([...prevCheckedItems, itemId]);
      } else {
        return new Set([...prevCheckedItems].filter((item) => item !== itemId));
      }
    });
  };

  const handleSelectAllChange = (isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems(allItems);
    } else {
      setCheckedItems(new Set());
    }
  };

  const selectedItems = cartList.filter((item) => checkedItems.has(item.id));

  const totalPrice = selectedItems.reduce((sum, item) => {
    const total =
      (item.price?.productPrice + (item.price?.accessoriesPrice ?? 0)) *
      item.amount;
    return sum + total;
  }, 0);

  const totalDeliveryFee = selectedItems.reduce((sum, item) => {
    const total = item.price?.deliveryFee ?? 0;
    return sum + total;
  }, 0);

  return (
    <>
      <div className="mb-6 ml-6 mt-5 flex w-full gap-4">
        <CartCheckBox
          checkedFormula={checkedItems.size === cartList.length}
          label="ml-6 text-2xl"
          onChange={(isChecked) => handleSelectAllChange(isChecked)}
        >
          모두 선택
        </CartCheckBox>
        <button className="h-[35px] w-[126px] rounded-[50px] bg-[#D9D9D9] text-2xl">
          선택 삭제
        </button>
      </div>
      <div className="grid h-12 grid-cols-7 items-center border-y bg-[#D9D9D9] lg:grid-cols-1">
        <div className="col-span-4 border-r text-center text-2xl font-semibold lg:border-0">
          상품정보
        </div>
        <div className="border-r text-center text-2xl font-semibold lg:hidden">
          수량
        </div>
        <div className="border-r text-center text-2xl font-semibold lg:hidden">
          상품금액
        </div>
        <div className="text-center text-2xl font-semibold lg:hidden">
          배송비
        </div>
      </div>
      {cartList.map((item) => (
        <div className="grid grid-cols-7 items-center border-b lg:grid-cols-1">
          <div className="col-span-4 lg:col-span-1">
            <div className="flex items-center gap-6 border-r p-6 lg:border-0 lg:px-10">
              <CartCheckBox
                checkedFormula={checkedItems.has(item.id)}
                onChange={(isChecked) =>
                  handleCheckboxChange(item.id, isChecked)
                }
              />
              <div className="flex items-center gap-11 lg:gap-6">
                <img
                  className="size-[110px] rounded-[10px]"
                  src={item.src}
                  alt={`${item.name}'s image`}
                />
                <div className="flex flex-col justify-center gap-6">
                  <div className="text-2xl font-semibold">{item.name}</div>
                  <div className="text-lg font-semibold">
                    옵션: {Object.values(item.options).join('/')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center border-r lg:border-0">
            <div className="absolute left-20 hidden text-2xl lg:block">
              수량:
            </div>
            <div className="flex w-full lg:w-52">
              <CustomStepper
                shape="round"
                size="size-10 lg:size-7"
                fontSize="text-2xl lg:text-xl"
                defaultValue={item.amount}
              />
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center border-r py-3 text-2xl lg:border-0 lg:text-xl">
            <div className="absolute left-20 hidden text-2xl lg:block">
              상품금액:
            </div>
            {(
              (item.price?.productPrice ?? 0) +
              (item.price?.accessoriesPrice ?? 0)
            ).toLocaleString()}
            원
          </div>
          <div className="relative flex h-full items-center justify-center py-3 text-2xl lg:text-xl">
            <div className="absolute left-20 hidden text-2xl lg:block">
              배송비:
            </div>
            <div className="text-center text-2xl lg:text-xl">
              {item.price?.deliveryFee ?? 0}원
            </div>
          </div>
        </div>
      ))}
      <div className="flex w-full items-center justify-end gap-12 border-b py-2 pr-12 text-2xl font-semibold md:text-xl lg:flex-col lg:items-center lg:gap-3 lg:pr-6">
        <div className="flex gap-12 md:flex-col lg:gap-3">
          <span>상품금액 {totalPrice.toLocaleString()}원</span>
          <div className="flex justify-center gap-12 lg:gap-3">
            <span>+</span>
            <span>배송비 {totalDeliveryFee.toLocaleString()}원</span>
          </div>
        </div>
        <div className="flex gap-12 lg:gap-3">
          <span>=</span>
          <span>총 {(totalPrice + totalDeliveryFee).toLocaleString()}원</span>
        </div>
      </div>
    </>
  );
}
