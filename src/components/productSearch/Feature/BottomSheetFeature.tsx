import { Button } from '@headlessui/react';

import {
  CATEGORIES_MOBILE,
  CATEGORIES_NOTEBOOK,
  CATEGORIES_TABLET,
  CATEGORIES_WERABLE,
  MOBILE_DATA,
  NOTEBOOK_DATA,
  TABLET_DATA,
  WERABLE_DATA,
} from '../../../constants/optionsData';
import InputString from './InputString';
import ButtonLayout from './ProductBtn';

interface BottomSheetButtonProps {
  category:
    | 'CATEGORIES_MOBILE'
    | 'CATEGORIES_TABLET'
    | 'CATEGORIES_WERABLE'
    | 'CATEGORIES_NOTEBOOK';
  categoryTag: string;
  price?: boolean;
  search?: boolean;
}

function BottomSheetButton({
  category,
  categoryTag,
  price = false,
  search = false,
}: BottomSheetButtonProps) {
  const CATEGORY = {
    CATEGORIES_MOBILE: { options: CATEGORIES_MOBILE, data: MOBILE_DATA },
    CATEGORIES_TABLET: { options: CATEGORIES_TABLET, data: TABLET_DATA },
    CATEGORIES_WERABLE: { options: CATEGORIES_WERABLE, data: WERABLE_DATA },
    CATEGORIES_NOTEBOOK: { options: CATEGORIES_NOTEBOOK, data: NOTEBOOK_DATA },
  };

  const { options, data } = CATEGORY[category];
  const SelectedIndex = options.indexOf(categoryTag);
  const selectedData = data[SelectedIndex] || [];

  if (price) {
    return (
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
    );
  } else if (search) {
    return (
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
    );
  } else {
    return (
      <div className="mx-11 max-w-[568px] rounded-t-md bg-gray text-2xl text-white">
        <div className="mb-8 mt-4 text-center">{categoryTag}</div>
        {selectedData.map((item, currentIndex) => (
          <Button
            key={currentIndex}
            className="mb-4 block h-10 w-full max-w-[480px] justify-center border-b-[0.1px] border-white text-left"
          >
            {item}
          </Button>
        ))}
      </div>
    );
  }
}

export default BottomSheetButton;
