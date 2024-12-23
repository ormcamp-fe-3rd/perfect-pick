import { useState } from 'react';

import optionsData from '../../../constants/optionsData.json';
import { CategoryData, OptionsData } from '../../../constants/optionsData.ts';
import BottomSheet from '../BottomSheet/BottomSheet';
import BottomSheetFeature from '../BottomSheet/BottomSheetFeature';
import ButtonLayout from '../Product/ProductBtn.tsx';
import { DefaultOptionProps } from './DefaultOption.tsx';

const typedOptionsData: OptionsData = optionsData;

function MobileOption({ type, onApplyClick }: DefaultOptionProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetCategory, setBottomSheetCategory] =
    useState<DefaultOptionProps['type']>('mobile');
  const [bottomSheetCategoryTag, setBottomSheetCategoryTag] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOptionCategory] = useState<string[]>([]);
  const [firstPrice] = useState<number>(0);
  const [secondPrice] = useState<number>(0);
  const [selectedTitle] = useState<string>('');

  const handleOpenBottomSheet = (
    category: DefaultOptionProps['type'],
    categoryTag: string,
  ) => {
    setBottomSheetCategory(category);
    setBottomSheetCategoryTag(categoryTag);
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => setIsBottomSheetOpen(false);

  const handleItemClick = (item: string) => {
    setSelectedOptions((prevState) => {
      if (prevState.includes(item)) {
        return prevState.filter((i) => i !== item);
      } else {
        return [...prevState, item];
      }
    });
  };

  const handleApplyClick = () => {
    onApplyClick(
      selectedOptions,
      selectedOptionCategory,
      firstPrice,
      secondPrice,
      selectedTitle,
    );
  };

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
          text="초기화"
          onClick={() => {
            window.location.reload();
          }}
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
        />
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-[calc(25%-12px)]"
          fontSize="text-lg"
          text="세부 검색"
          onClick={() => handleOpenBottomSheet(type, '세부 검색')}
        />
      </div>

      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <BottomSheetFeature
          category={bottomSheetCategory}
          categoryTag={bottomSheetCategoryTag}
          onItemClick={handleItemClick}
        />
      </BottomSheet>

      <div className="flex justify-center gap-3 px-[10px] pt-5">
        <ButtonLayout
          backgroundColor="bg-skyblue"
          height="h-[45px]"
          width="w-full"
          fontSize="text-lg"
          text="옵션 적용"
          onClick={handleApplyClick}
        />
      </div>
    </div>
  );
}

export default MobileOption;
