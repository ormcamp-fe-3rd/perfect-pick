import { useMemo, useState } from 'react';
import CartCheckBox from '@/components/cart/CartCheckBox';
import CartListItem from './CartListItem';

// 임시: 추후 서버 연결
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

export default function CartTable() {
  const allItemsID = new Set(cartList.map((item) => item.id));
  const [checkedItemsID, setCheckedItemsID] = useState(allItemsID);

  // 상품별 체크박스 선택 시 동작
  const handleCheckboxChange = (itemId: number, isChecked: boolean) => {
    setCheckedItemsID((prev) => {
      if (isChecked) {
        return new Set([...prev, itemId]);
      } else {
        return new Set([...prev].filter((item) => item !== itemId));
      }
    });
  };

  // 전체상품 체크박스 선택 시 동작
  const handleSelectAllChange = (isChecked: boolean) => {
    if (isChecked) {
      setCheckedItemsID(allItemsID);
    } else {
      setCheckedItemsID(new Set());
    }
  };

  // 선택된 상품의 데이터
  const selectedItems = useMemo(() => {
    return cartList.filter((item) => checkedItemsID.has(item.id));
  }, [cartList, checkedItemsID]);

  // 선택된 상품의 총 상품금액
  const totalPrice = useMemo(() => {
    return selectedItems.reduce((sum, item) => {
      const total =
        (item.price?.productPrice + (item.price?.accessoriesPrice ?? 0)) *
        item.amount;
      return sum + total;
    }, 0);
  }, [selectedItems]);

  // 선택된 상품의 총 배송비
  const totalDeliveryFee = useMemo(() => {
    return selectedItems.reduce((sum, item) => {
      const total = item.price?.deliveryFee ?? 0;
      return sum + total;
    }, 0);
  }, [selectedItems]);

  return (
    <div>
      <div className="mb-6 ml-6 mt-5 flex w-full gap-4 md:ml-2">
        <CartCheckBox
          checkedFormula={checkedItemsID.size === cartList.length}
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
        <CartListItem
          item={item}
          checkedItems={checkedItemsID}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
      <div className="flex w-full items-center justify-end gap-12 border-b py-2 pr-12 text-2xl font-semibold lg:flex-col lg:items-center lg:gap-3 lg:pr-6 md:text-xl">
        <div className="flex gap-12 lg:gap-3 md:flex-col">
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
    </div>
  );
}
