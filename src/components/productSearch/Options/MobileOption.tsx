import { useState } from 'react';

import optionsData from '../../../constants/optionsData.json';
import { CategoryData, OptionsData } from '../../../constants/optionsData.ts';
import BottomSheet from '../BottomSheet/BottomSheet.tsx';
import BottomSheetFeature from '../BottomSheet/BottomSheetFeature.tsx';
import ButtonLayout from '../Product/ProductBtn.tsx';
import { DefaultOptionProps } from './DefaultOption';

const typedOptionsData: OptionsData = optionsData;

function MobileOption({ type }: DefaultOptionProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetCategory, setBottomSheetCategory] =
    useState<DefaultOptionProps['type']>('mobile');
  const [bottomSheetCategoryTag, setBottomSheetCategoryTag] = useState('');
  const [isPrice, setIsPrice] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const handleOpenBottomSheet = (
    category: DefaultOptionProps['type'],
    categoryTag: string,
  ) => {
    setBottomSheetCategory(category);
    setBottomSheetCategoryTag(categoryTag);
    setIsPrice(categoryTag === '가격대');
    setIsSearch(categoryTag === '세부 검색');
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => setIsBottomSheetOpen(false);

  const categoryData: CategoryData = typedOptionsData[type];
  const categories = categoryData.categories;

  return (
    <div className="w-max-[548px] h-[148px] w-full pb-3">
      <div className="flex justify-center gap-3 px-[10px]">
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text="정렬"
        />
        {categories.slice(0, 3).map((option, index) => (
          <ButtonLayout
            key={index}
            backgroundColor="bg-skyblue"
            height="h-[45px]"
            width="w-[calc(25%-12px)]"
            fontSize="text-lg"
            text={option}
            onClick={() => handleOpenBottomSheet(type, option)}
          />
        ))}
      </div>
      <div className="flex justify-center gap-3 px-[10px] pt-3">
        {categories.slice(3, 5).map((option, index) => (
          <ButtonLayout
            key={index}
            backgroundColor="bg-skyblue"
            height="h-[45px]"
            width="w-[calc(25%-12px)]"
            fontSize="text-lg"
            text={option}
            onClick={() => handleOpenBottomSheet(type, option)}
          />
        ))}
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
        <BottomSheetFeature
          category={bottomSheetCategory}
          categoryTag={bottomSheetCategoryTag}
          price={isPrice}
          search={isSearch}
        ></BottomSheetFeature>
      </BottomSheet>
    </div>
  );
}
export default MobileOption;
