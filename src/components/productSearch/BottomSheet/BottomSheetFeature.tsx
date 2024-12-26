import { Button } from '@headlessui/react';

import { getOptionType } from '@/firebase.ts';

import optionsData from '../../../constants/optionsData.json';
import { CategoryData, OptionsData } from '../../../constants/optionsData.ts';
import InputString from '../Feature/InputString.tsx';
import ButtonLayout from '../Product/ProductBtn.tsx';
import BottomSheetContainer from './BottomSheetContainer.tsx';

const typedOptionsData: OptionsData = optionsData;

export interface BottomSheetButtonProps {
  category: 'mobile' | 'tablet' | 'wearable' | 'notebook';
  categoryTag: string;
  onItemClick: (item: string, type: string) => void;
  isOpen: () => void;
  onPriceChange?: (price: string, type: 'first' | 'second') => void;
  onTitleChange?: (title: string) => void;
  firstPrice: number;
  secondPrice: number;
  selectedTitle: string;
}

function BottomSheetFeature({
  category,
  categoryTag,
  firstPrice,
  secondPrice,
  selectedTitle,
  onItemClick,
  isOpen,
  onPriceChange,
  onTitleChange,
}: BottomSheetButtonProps) {
  const categoryData: CategoryData = typedOptionsData[category];
  const categories = categoryData.categories;
  const data = categoryData.data;
  const SelectedIndex = categories.indexOf(categoryTag);
  const selectedData = data[SelectedIndex] || [];
  const optionType = getOptionType(category);

  return (
    <BottomSheetContainer>
      {categoryTag == '가격대' ? (
        <div className="mx-11 max-w-[568px] rounded-t-md bg-gray text-2xl text-white">
          <div className="mb-8 mt-4 text-center">가격대</div>
          <div className="w-max-[480px] block w-full justify-center space-y-8 text-center">
            <InputString
              bgColor="white"
              value={firstPrice ?? ''}
              onChange={(e) => onPriceChange?.(e.target.value, 'first')}
            ></InputString>
            <div>~</div>
            <InputString
              bgColor="white"
              value={secondPrice ?? ''}
              onChange={(e) => onPriceChange?.(e.target.value, 'second')}
            ></InputString>
            <div className="absolute bottom-[20px] right-[50px] flex space-x-16">
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="확인"
                textColor="text-white"
                onClick={() => {
                  isOpen();
                }}
              ></ButtonLayout>
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="취소"
                textColor="text-white"
                onClick={() => {
                  isOpen();
                  onPriceChange?.('', 'second');
                  onPriceChange?.('', 'first');
                }}
              ></ButtonLayout>
            </div>
          </div>
        </div>
      ) : categoryTag == '세부 검색' ? (
        <div className="mx-11 max-w-[568px] rounded-t-md bg-gray text-2xl text-white">
          <div className="mb-8 mt-4 text-center">세부 검색</div>
          <div className="w-max-[480px] block w-full pt-24 text-center">
            <InputString
              bgColor="white"
              value={selectedTitle || ''}
              onChange={(e) => onTitleChange?.(e.target.value)}
            ></InputString>
            <div className="absolute bottom-[20px] right-[50px] flex space-x-16">
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="확인"
                textColor="text-white"
                onClick={() => {
                  isOpen();
                }}
              ></ButtonLayout>
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="취소"
                textColor="text-white"
                onClick={() => {
                  isOpen();
                  onTitleChange?.('');
                }}
              ></ButtonLayout>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-11 max-w-[568px] rounded-t-md bg-gray text-2xl text-white">
          <div className="mb-8 mt-4 text-center">{categoryTag}</div>
          {selectedData.map((item, currentIndex) => (
            <Button
              key={currentIndex}
              className="mb-4 block h-10 w-full max-w-[480px] justify-center border-b-[0.1px] border-white text-left"
              onClick={() => {
                onItemClick(item, optionType[SelectedIndex]);
                isOpen();
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      )}
    </BottomSheetContainer>
  );
}

export default BottomSheetFeature;
