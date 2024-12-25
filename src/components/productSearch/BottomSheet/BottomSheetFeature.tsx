import { Button } from '@headlessui/react';

import optionsData from '../../../constants/optionsData.json';
import { CategoryData, OptionsData } from '../../../constants/optionsData.ts';
import InputString from '../Feature/InputString.tsx';
import ButtonLayout from '../Product/ProductBtn.tsx';
import BottomSheetContainer from './BottomSheetContainer.tsx';

const typedOptionsData: OptionsData = optionsData;
const optionType = ['brand', 'brand', 'size', 'date', 'featue'];

export interface BottomSheetButtonProps {
  category: 'mobile' | 'tablet' | 'wearable' | 'notebook';
  categoryTag: string;
  price?: boolean;
  search?: boolean;
  onItemClick: (item: string, type: string) => void;
}

function BottomSheetFeature({
  category,
  categoryTag,
  price = false,
  search = false,
  onItemClick,
}: BottomSheetButtonProps) {
  const categoryData: CategoryData = typedOptionsData[category];
  const categories = categoryData.categories;
  const data = categoryData.data;
  const SelectedIndex = categories.indexOf(categoryTag);
  const selectedData = data[SelectedIndex] || [];

  return (
    <BottomSheetContainer>
      {price ? (
        <div className="mx-11 max-w-[568px] rounded-t-md bg-gray text-2xl text-white">
          <div className="mb-8 mt-4 text-center">가격대</div>
          <div className="w-max-[480px] block w-full justify-center space-y-8 text-center">
            <InputString bgColor="white"></InputString>
            <div>~</div>
            <InputString bgColor="white"></InputString>
            <div className="absolute bottom-[20px] right-[50px] flex space-x-16">
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="확인"
                textColor="text-white"
              ></ButtonLayout>
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="취소"
                textColor="text-white"
              ></ButtonLayout>
            </div>
          </div>
        </div>
      ) : search ? (
        <div className="mx-11 max-w-[568px] rounded-t-md bg-gray text-2xl text-white">
          <div className="mb-8 mt-4 text-center">세부 검색</div>
          <div className="w-max-[480px] block w-full pt-24 text-center">
            <InputString bgColor="white"></InputString>
            <div className="absolute bottom-[20px] right-[50px] flex space-x-16">
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="확인"
                textColor="text-white"
              ></ButtonLayout>
              <ButtonLayout
                width="h-[38px]"
                height="w-auto"
                text="취소"
                textColor="text-white"
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
