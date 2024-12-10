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

  const initialCheckedItems = new Set(cartList.map((item) => item.id));
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  const handleCheckboxChange = (itemId: number, isChecked: boolean) => {
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        return new Set([...prevCheckedItems, itemId]);
      } else {
        return new Set([...prevCheckedItems].filter((item) => item !== itemId));
      }
    });
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
        <CartCheckBox label="ml-6 text-2xl">모두 선택</CartCheckBox>
        <button className="h-[35px] w-[126px] rounded-[50px] bg-[#D9D9D9] text-2xl">
          선택 삭제
        </button>
      </div>
      <table>
        <thead className="h-12 border-y bg-[#D9D9D9] text-2xl font-semibold">
          <th className="w-3/6">상품정보</th>
          <th className="w-1/6">수량</th>
          <th className="w-1/6">상품금액</th>
          <th className="w-1/6">배송비</th>
        </thead>
        <tbody>
          {cartList.map((item, index) => (
            <tr key={index} className="h-[150px] border-b">
              <td className="ml-6 flex h-[150px] items-center gap-6 border-r">
                <CartCheckBox
                  checked={checkedItems.has(item.id)}
                  onChange={(isChecked) =>
                    handleCheckboxChange(item.id, isChecked)
                  }
                />
                <div className="flex items-center gap-11">
                  <img
                    className="size-[110px]"
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
              </td>
              <td className="border-r">
                <div className="flex justify-center">
                  <CustomStepper
                    shape="round"
                    fontSize="text-2xl"
                    defaultValue={item.amount}
                  />
                </div>
              </td>
              <td className="border-r text-center text-2xl font-semibold">
                {(
                  (item.price?.productPrice ?? 0) +
                  (item.price?.accessoriesPrice ?? 0)
                ).toLocaleString()}
                원
              </td>
              <td className="text-center text-2xl font-semibold">
                {item.price?.deliveryFee ?? 0}원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex h-20 w-full items-center justify-end gap-12 border-b pr-12 text-2xl font-semibold">
        <span>상품금액 {totalPrice.toLocaleString()}원</span>
        <span>+</span>
        <span>배송비 {totalDeliveryFee.toLocaleString()}원</span>
        <span>=</span>
        <span>총 {(totalPrice + totalDeliveryFee).toLocaleString()}원</span>
      </div>
    </>
  );
}
