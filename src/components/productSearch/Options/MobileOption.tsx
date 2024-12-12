import { useState } from 'react';

import {
  CATEGORIES_MOBILE,
  CATEGORIES_NOTEBOOK,
  CATEGORIES_TABLET,
  CATEGORIES_WERABLE,
} from '@/constants/optionsData';

import BottomSheet from '../Feature/BottomSheet';
import BottomSheetButton from '../Feature/BottomSheetFeature';
import ButtonLayout from '../Feature/ProductBtn';

interface MobileOptionProps {
  type:
    | 'CATEGORIES_MOBILE'
    | 'CATEGORIES_TABLET'
    | 'CATEGORIES_WERABLE'
    | 'CATEGORIES_NOTEBOOK';
}

function MobileOption({ type }: MobileOptionProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetCategory, setBottomSheetCategory] = useState<
    | 'CATEGORIES_MOBILE'
    | 'CATEGORIES_TABLET'
    | 'CATEGORIES_WERABLE'
    | 'CATEGORIES_NOTEBOOK'
  >('CATEGORIES_MOBILE');
  const [bottomSheetCategoryTag, setBottomSheetCategoryTag] = useState('');
  const [isPrice, setIsPrice] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const handleOpenBottomSheet = (
    category:
      | 'CATEGORIES_MOBILE'
      | 'CATEGORIES_TABLET'
      | 'CATEGORIES_WERABLE'
      | 'CATEGORIES_NOTEBOOK',
    categoryTag: string,
  ) => {
    setBottomSheetCategory(category);
    setBottomSheetCategoryTag(categoryTag);
    setIsPrice(categoryTag === '가격대');
    setIsSearch(categoryTag === '세부 검색');
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => setIsBottomSheetOpen(false);

  const CATEGORY = {
    CATEGORIES_MOBILE: CATEGORIES_MOBILE,
    CATEGORIES_TABLET: CATEGORIES_TABLET,
    CATEGORIES_WERABLE: CATEGORIES_WERABLE,
    CATEGORIES_NOTEBOOK: CATEGORIES_NOTEBOOK,
  };

  const options = CATEGORY[type];

  return (
    <div className="w-max-[548px] h-[148px] w-screen pb-3">
      <div className="flex justify-center gap-3 px-[10px]">
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text="정렬"
        ></ButtonLayout>
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text={options[0]}
          onClick={() => handleOpenBottomSheet(type, options[0])}
        ></ButtonLayout>
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text={options[1]}
          onClick={() => handleOpenBottomSheet(type, options[1])}
        ></ButtonLayout>
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text={options[2]}
          onClick={() => handleOpenBottomSheet(type, options[2])}
        ></ButtonLayout>
      </div>
      <div className="flex justify-center gap-3 px-[10px] pt-3">
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text={options[3]}
          onClick={() => handleOpenBottomSheet(type, options[3])}
        ></ButtonLayout>
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text={options[4]}
          onClick={() => handleOpenBottomSheet(type, options[4])}
        ></ButtonLayout>
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text="가격대"
          onClick={() => handleOpenBottomSheet(type, '가격대')}
        ></ButtonLayout>
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text="세부 검색"
          onClick={() => handleOpenBottomSheet(type, '세부 검색')}
        ></ButtonLayout>
      </div>
      <div className="px-[10px] pt-[15px]">
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-full"
          fontSize="text-lg"
          text="맞춤형 제품 추천"
        ></ButtonLayout>
      </div>
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <BottomSheetButton
          category={bottomSheetCategory}
          categoryTag={bottomSheetCategoryTag}
          price={isPrice}
          search={isSearch}
        ></BottomSheetButton>
      </BottomSheet>
    </div>
  );
}
export default MobileOption;
