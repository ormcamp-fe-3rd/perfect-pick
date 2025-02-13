import { useState } from 'react';
import ActionButton from '@/components/productDetail/ActionButton';
import CustomStepper from '@/components/common/CustomStepper';
import SelectOption from '@/components/productDetail/SelectOption';
import { db } from '@/firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from '@firebase/firestore';
import { CartItemData, Product } from '@/types';
import { useNavigate } from 'react-router';
import { calculateSelectedPrice } from '@/utils/price';
import { optionLabel } from '@/utils/optionLabel';
import sortBySize from '@/utils/sortBySize';

interface ProductOptionsProps {
  product: Product;
  userId?: string;
}

export default function ProductOptions({
  product,
  userId,
}: ProductOptionsProps) {
  const navigate = useNavigate();

  const optionalPrices = Object.entries(product)
    .filter(([key]) => key.startsWith('opt_'))
    .reduce(
      (acc, [key, value]) => {
        const newKey = key.replace('opt_', '');
        acc[newKey] = value as Record<string, number>;
        return acc;
      },
      {} as Record<string, Record<string, number>>,
    );

  const initialSelectedOptions = Object.entries(optionalPrices).reduce(
    (acc, key) => {
      acc[key[0]] = '';
      return acc;
    },
    {} as Record<string, string>,
  );

  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions,
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(1); // 상품 수량 기본값 1

  const handleSelectedOptions = (key: string, value: string) => {
    const updatedOptions = { ...selectedOptions, [key]: value };
    setSelectedOptions(updatedOptions);

    const totalPrice =
      calculateSelectedPrice(product, updatedOptions, optionalPrices) *
      itemCount;

    setTotalPrice(totalPrice);
  };

  const handleChangeItemCount = (count: number) => {
    setItemCount(count);

    const totalPrice =
      calculateSelectedPrice(product, selectedOptions, optionalPrices) * count;

    setTotalPrice(totalPrice);
  };

  const removeSelectedOption = () => {
    setSelectedOptions(initialSelectedOptions);
    setItemCount(1);
    setTotalPrice(0);
  };

  const selectedOptionsLabel = optionLabel(selectedOptions);

  const checkRequiredOptionsSelected = Object.entries(selectedOptions)
    .filter(([key]) => key !== 'additional')
    .every(([, value]) => value);

  const cartItemData = {
    product_title: product.title,
    product_id: product.id,
    option: selectedOptions,
    amount: itemCount,
    price: {
      productPrice: totalPrice / itemCount,
      accessoriesPrice: 0,
      deliveryFee: product.price_delivery || 0,
    },
    user_id: userId,
    thumbnail: product.src[1],
  };

  const isOptionSelected = () => {
    if (!checkRequiredOptionsSelected) {
      alert('옵션을 확인해주세요.');
      return false;
    }
    return true;
  };

  const saveToGuestCart = () => {
    // 조건에 맞는 문서 조회
    const currentCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    const existingItemIndex = currentCart.findIndex(
      (item: CartItemData) =>
        JSON.stringify(item.option) === JSON.stringify(cartItemData.option),
    );

    // 동일 옵션이 있으면 수량 업데이트, 없으면 항목 추가
    if (existingItemIndex !== -1) {
      currentCart[existingItemIndex].amount += cartItemData.amount;
    } else {
      const newItem = { ...cartItemData, id: new Date().getTime() };
      currentCart.push(newItem);
    }

    sessionStorage.setItem('cart', JSON.stringify(currentCart));
  };

  const saveToUserCart = async () => {
    try {
      // 조건에 맞는 문서 조회
      const cartsRef = collection(db, 'carts');
      const q = query(
        cartsRef,
        where('user_id', '==', cartItemData.user_id),
        where('product_id', '==', cartItemData.product_id),
        where('option', '==', cartItemData.option),
      );
      const querySnapshot = await getDocs(q);

      // 동일 옵션이 있으면 수량 업데이트, 없으면 항목 추가
      if (!querySnapshot.empty) {
        const existingDoc = querySnapshot.docs[0];
        const existingAmount = existingDoc.data().amount;
        const newAmount = existingAmount + cartItemData.amount;
        await updateDoc(doc(db, 'carts', existingDoc.id), {
          amount: newAmount,
        });
      } else {
        await addDoc(collection(db, 'carts'), cartItemData);
      }
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const saveCartItemData = async () => {
    if (!isOptionSelected()) return;

    if (!userId) {
      saveToGuestCart();
    } else {
      await saveToUserCart();
    }
  };

  const saveCheckoutData = async () => {
    if (isOptionSelected()) {
      const checkoutData = cartItemData;
      await new Promise((resolve) => {
        sessionStorage.setItem('checkoutData', JSON.stringify([checkoutData]));
        resolve(true);
      });
      navigate('/payment');
    }
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
            {product.price_origin?.toLocaleString()}원
          </span>
        </div>
      </div>
      <div className="my-8 flex flex-col gap-5 text-lg md:my-5 md:gap-3">
        {Object.entries(optionalPrices)
          .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
          .map(([key, value], index) => (
            <SelectOption
              key={index}
              name={key}
              options={sortBySize(Object.keys(value))}
              value={selectedOptions[key]}
              onChange={handleSelectedOptions}
            />
          ))}
      </div>
      {checkRequiredOptionsSelected && (
        <div className="flex flex-col gap-6 border-y px-3 py-5 md:gap-4 md:px-2 md:py-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-semibold md:text-lg">
              {`옵션: ${selectedOptionsLabel}`}
            </div>
            <button
              className="size-6 rounded-md border border-gray font-semibold"
              onClick={removeSelectedOption}
            >
              X
            </button>
          </div>
          <div className="flex">
            <CustomStepper
              frameStyle="max-w-48"
              onChange={handleChangeItemCount}
            />
            <div className="w-full text-end text-[36px] font-extrabold leading-none md:text-2xl">
              {totalPrice === 0 ? '' : `${totalPrice.toLocaleString()}원`}
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 flex justify-around gap-4">
        <ActionButton
          buttonName="장바구니 담기"
          buttonStyle="bg-gray"
          type="openModal"
          confirmLinkPath="/cart"
          onButtonClick={saveCartItemData}
          modalContent={
            <>
              <div>상품명: {product.title}</div>
              <div>옵션: {selectedOptionsLabel}</div>
              <div>수량: {itemCount}</div>
              <div>금액: {totalPrice.toLocaleString()}원</div>
            </>
          }
          disableModal={!checkRequiredOptionsSelected}
        />
        <ActionButton
          buttonName="구매하기"
          buttonStyle="bg-red"
          onButtonClick={saveCheckoutData}
        />
      </div>
    </div>
  );
}
