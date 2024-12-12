import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import {
  CATEGORIES_MOBILE,
  CATEGORIES_NOTEBOOK,
  CATEGORIES_TABLET,
  CATEGORIES_WERABLE,
  MOBILE_DATA,
  NOTEBOOK_DATA,
  TABLET_DATA,
  WERABLE_DATA,
} from '../../../constants/optionsData.ts';
import Check from '../Feature/CheckBox.tsx';
import InputString from '../Feature/InputString.tsx';
import ButtonLayout from '../Feature/ProductBtn.tsx';

interface DefaultOptionProps {
  type:
    | 'CATEGORIES_MOBILE'
    | 'CATEGORIES_TABLET'
    | 'CATEGORIES_WERABLE'
    | 'CATEGORIES_NOTEBOOK';
}

function DefaultOption({ type }: DefaultOptionProps) {
  const categories = {
    CATEGORIES_MOBILE: CATEGORIES_MOBILE,
    CATEGORIES_TABLET: CATEGORIES_TABLET,
    CATEGORIES_WERABLE: CATEGORIES_WERABLE,
    CATEGORIES_NOTEBOOK: CATEGORIES_NOTEBOOK,
  }[type];

  const data = {
    CATEGORIES_MOBILE: MOBILE_DATA,
    CATEGORIES_TABLET: TABLET_DATA,
    CATEGORIES_WERABLE: WERABLE_DATA,
    CATEGORIES_NOTEBOOK: NOTEBOOK_DATA,
  }[type];

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: type === 'CATEGORIES_NOTEBOOK' ? 5 : 4,
    slidesToScroll: 2,
  };

  return (
    <div
      className={`h-[600px] ${type === 'CATEGORIES_NOTEBOOK' ? 'w-full' : 'w-[1000px]'} rounded-xl border-2 border-black text-xl font-semibold lg:mx-auto lg:w-[calc(100%-30px)] lg:overflow-hidden`}
    >
      {categories.map((category, rowIndex) => (
        <div key={rowIndex} className="flex w-full">
          <div className="flex min-w-[150px] items-center pl-6 pt-[30px]">
            <p>{category}</p>
          </div>

          <div className="mr-10 w-full min-w-[850px] flex-1 overflow-hidden pt-[30px]">
            <Slider {...sliderSettings}>
              <div className="flex items-center">
                <div className="flex items-center gap-[17px]">
                  <Check />
                  <p>{data[rowIndex][0]}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-[17px]">
                  <Check />
                  <p>{data[rowIndex][1]}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-[17px]">
                  <Check />
                  <p>{data[rowIndex][2]}</p>
                </div>
              </div>
              <div className="flex w-[180px] items-center">
                <div className="flex items-center gap-[17px]">
                  <Check />
                  <p>{data[rowIndex][3]}</p>
                </div>
              </div>
              <div
                className={`flex w-[180px] items-center ${!data[rowIndex][4] ? 'invisible' : ''}`}
              >
                <div className="flex items-center gap-[17px]">
                  <Check />
                  <p>{data[rowIndex][4]}</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      ))}

      <div className="pt-[30px]">
        <div className="flex">
          {/* 가격대 레이블 */}
          <div className="flex w-[150px] min-w-[150px] items-center pl-6">
            <p>가격대</p>
          </div>
          {/* 가격대 입력 필드 */}
          <div className="mr-9 flex w-full">
            <InputString width="w-full lg:max-w-[330px]" />
            <p className="px-[90px] text-[28px]">~</p>
            <InputString width="w-full lg:max-w-[330px]" />
          </div>
        </div>
        <div className="pt-[30px]">
          <div className="flex">
            <div className="flex w-[150px] min-w-[150px] items-center pl-6">
              검색
            </div>
            <div className="mr-9 w-full">
              <InputString width="w-full lg:max-w-[800px]" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-[160px] pt-[35px] lg:w-screen">
            <ButtonLayout
              height="h-[45px]"
              width="w-[180px] min-w-[180px]"
              backgroundColor="bg-skyblue"
              text="초기화"
              rounded="rounded-[10px]"
            ></ButtonLayout>
            <ButtonLayout
              height="h-[45px]"
              width="w-[180px] min-w-[180px]"
              backgroundColor="bg-salmon"
              text="검색 옵션 적용"
              rounded="rounded-[10px]"
            ></ButtonLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DefaultOption;
