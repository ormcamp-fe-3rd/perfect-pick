import { useEffect, useMemo, useState } from 'react';
import CartCheckBox from '@/components/cart/CartCheckBox';
import CartListItem from '@/components/cart/CartListItem';
import { db, getUserInfo } from '@/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from '@firebase/firestore';
import { CartItemData, UserData } from '@/types';

interface CartData extends CartItemData {
  id: string;
}

export default function CartTable() {
  const [userId, setUserId] = useState('');
  const [cartData, setCartData] = useState<CartData[]>([]);
  const [allItemsId, setAllItemsId] = useState<string[]>([]);
  const [selectedItemsId, setSelectedItemsId] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = (await getUserInfo()) as UserData;
        setUserId(userInfo.id);
      } catch (error) {
        console.log('사용자 정보를 가져오는 실패했습니다.', error);
      }
    };

    const fetchUserCart = async () => {
      try {
        const cartsRef = collection(db, 'carts');
        const q = query(cartsRef, where('user_id', '==', userId));
        const querySnapSopt = await getDocs(q);

        const userCart = querySnapSopt.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as CartItemData),
        }));
        setCartData(userCart);
      } catch (e) {
        console.error('Error fetching user cart:', e);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
    fetchUserCart();
  }, [userId]);

  useEffect(() => {
    const newAllItemsId = cartData.map((item) => item.id);
    setAllItemsId(newAllItemsId);
    setSelectedItemsId(newAllItemsId);
  }, [cartData]);

  // 선택된 상품의 데이터
  const selectedItems = useMemo(() => {
    return cartData.filter((item) => new Set(selectedItemsId).has(item.id));
  }, [cartData, selectedItemsId]);

  // 선택된 상품의 총 상품금액
  const totalPrice = useMemo(() => {
    return selectedItems.reduce((sum, item) => {
      const total =
        (item.price.productPrice + (item.price.accessoriesPrice ?? 0)) *
        item.amount;
      return sum + total;
    }, 0);
  }, [selectedItems]);

  // 선택된 상품의 총 배송비
  const totalDeliveryFee = useMemo(() => {
    return selectedItems.reduce((sum, item) => {
      const total = item.price.deliveryFee ?? 0;
      return sum + total;
    }, 0);
  }, [selectedItems]);

  // 상품별 체크박스 선택 시 동작
  const handleCheckboxChange = (itemId: string, isChecked: boolean) => {
    setSelectedItemsId((prev) => {
      if (isChecked) {
        return [...prev, itemId];
      } else {
        return [...prev].filter((item) => item !== itemId);
      }
    });
  };

  // 전체상품 체크박스 선택 시 동작
  const handleSelectAllChange = (isChecked: boolean) => {
    if (isChecked) {
      setSelectedItemsId(allItemsId);
    } else {
      setSelectedItemsId([]);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // 장바구니 수량 수정
  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    try {
      const cartItemRef = doc(db, 'carts', itemId);
      await updateDoc(cartItemRef, { amount: newQuantity });

      const updatedCart = cartData.map((item) =>
        item.id === itemId ? { ...item, amount: newQuantity } : item,
      );
      setCartData(updatedCart);
      alert('수량이 변경되었습니다.');
    } catch (error) {
      console.error('Error updating quantity', error);
    }
  };

  // 선택삭제 버튼 동작
  const handleDeleteSelectedItems = async () => {
    try {
      await Promise.all(
        selectedItemsId.map((id) => {
          const docRef = doc(db, 'carts', id);
          return deleteDoc(docRef);
        }),
      );
      const updatedCart = cartData.filter(
        (item) => !selectedItemsId.includes(item.id),
      );
      setCartData(updatedCart);
      alert('선택된 상품이 삭제되었습니다.');
    } catch (error) {
      alert(`상품 삭제 중 오류 발생:${error}`);
    }
  };

  if (cartData.length === 0) {
    return (
      <div className="mt-20 text-center text-2xl">장바구니가 비어있습니다.</div>
    );
  }

  return (
    <div>
      <div className="mb-6 ml-6 mt-5 flex w-full gap-4 md:ml-2">
        <CartCheckBox
          checkedFormula={selectedItemsId.length === cartData.length}
          label="ml-6 text-2xl"
          onChange={(isChecked) => handleSelectAllChange(isChecked)}
        >
          모두 선택
        </CartCheckBox>
        <button
          className="h-[35px] w-[126px] rounded-[50px] bg-[#D9D9D9] text-2xl"
          onClick={handleDeleteSelectedItems}
        >
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
      {cartData.map((item) => (
        <CartListItem
          key={item.id}
          item={item}
          checkedItemsId={selectedItemsId}
          onCheckboxChange={handleCheckboxChange}
          onQuantityChange={handleQuantityChange}
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
