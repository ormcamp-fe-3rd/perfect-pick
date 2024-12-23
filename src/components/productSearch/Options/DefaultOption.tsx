import { useState } from 'react';
import Slider from 'react-slick';

import optionsData from '../../../constants/optionsData.json';
import { CategoryData, OptionsData } from '../../../constants/optionsData.ts';
import CheckBox from '../Feature/CheckBox.tsx'; // CheckBox 컴포넌트
import InputString from '../Feature/InputString.tsx';
import ButtonLayout from '../Product/ProductBtn.tsx';

const typedOptionsData: OptionsData = optionsData;

export interface DefaultOptionProps {
  type: 'mobile' | 'tablet' | 'wearable' | 'notebook';
  onApplyClick: (
    selectedOptions: string[],
    selectedOptionCategory: string[],
    firstPrice: number,
    secondPrice: number,
    selectedTitle: string,
  ) => void; // 검색 옵션 적용 버튼 클릭 시 배열을 전달하는 콜백
}

function DefaultOption({ type, onApplyClick }: DefaultOptionProps) {
  const categoryData: CategoryData = typedOptionsData[type];
  const categories = categoryData.categories;
  const data = categoryData.data;

  const optionType = ['brand', 'opt_storage', 'size', 'date', 'featue'];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOptionCategory, setselectedOptionCategory] = useState<
    string[]
  >([]);
  const [firstPrice, setFirstPrice] = useState<number>(0);
  const [secondPrice, setSecondPrice] = useState<number>(0);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const handleItemClick = (item: string, type: string) => {
    setSelectedOptions((prevState) => {
      if (prevState.includes(item)) {
        return prevState.filter((i) => i !== item);
      } else {
        return [...prevState, item];
      }
    });

    setselectedOptionCategory((prevState) => {
      if (prevState.includes(type)) {
        return prevState.filter((t) => t !== type);
      } else {
        return [...prevState, type];
      }
    });
  };

  const handlePriceChange = (price: string, type: 'first' | 'second') => {
    const parsedPrice = parseFloat(price);
    if (!isNaN(parsedPrice)) {
      if (type === 'first') {
        setFirstPrice(parsedPrice);
      } else {
        setSecondPrice(parsedPrice);
      }
    }
  };

  const handleTitleChange = (title: string) => {
    setSelectedTitle(title); // 제목은 하나의 값만 처리
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

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: type === 'notebook' ? 5 : 4,
    slidesToScroll: 2,
  };

  return (
    <div
      className={`h-[600px] ${type === 'notebook' ? 'w-full' : 'w-[1000px]'} rounded-xl border-2 border-black text-xl font-semibold lg:mx-auto lg:w-[calc(100%-30px)] lg:overflow-hidden`}
    >
      {categories.map((category, rowIndex) => (
        <div key={rowIndex} className="flex w-full">
          <div className="flex min-w-[150px] items-center pl-6 pt-[30px]">
            <p>{category}</p>
          </div>

          <div className="mr-10 w-full min-w-[850px] flex-1 overflow-hidden pt-[30px]">
            <Slider {...sliderSettings}>
              {data[rowIndex].slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center gap-[17px]">
                    <CheckBox
                      item={item}
                      onClick={handleItemClick}
                      type={optionType[rowIndex]}
                    />
                    <p>{item}</p>
                  </div>
                </div>
              ))}
              {data[rowIndex][4] && (
                <div className="flex w-[180px] items-center">
                  <div className="flex items-center gap-[17px]">
                    <CheckBox
                      item={data[rowIndex][4]}
                      onClick={handleItemClick}
                      type={optionType[rowIndex]}
                    />
                    <p>{data[rowIndex][4]}</p>
                  </div>
                </div>
              )}
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
            <InputString
              width="w-full lg:max-w-[330px]"
              value={firstPrice || ''} // 값이 없을 때 빈 문자열 처리
              onChange={(e) => handlePriceChange(e.target.value, 'first')}
            />
            <p className="px-[90px] text-[28px]">~</p>
            <InputString
              width="w-full lg:max-w-[330px]"
              value={secondPrice || ''} // 값이 없을 때 빈 문자열 처리
              onChange={(e) => handlePriceChange(e.target.value, 'second')}
            />
          </div>
        </div>
        <div className="pt-[30px]">
          <div className="flex">
            <div className="flex w-[150px] min-w-[150px] items-center pl-6">
              검색
            </div>
            <div className="mr-9 w-full">
              <InputString
                width="w-full lg:max-w-[800px]"
                value={selectedTitle || ''} // 값이 없을 때 빈 문자열 처리
                onChange={(e) => handleTitleChange(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-[160px] pt-[35px] lg:w-screen">
            <ButtonLayout
              height="h-[45px]"
              width="w-[180px] min-w-[180px]"
              backgroundColor="bg-skyblue"
              text="초기화"
              rounded="rounded-[10px]"
              onClick={() => {
                window.location.reload();
              }}
            ></ButtonLayout>
            <ButtonLayout
              height="h-[45px]"
              width="w-[180px] min-w-[180px]"
              backgroundColor="bg-salmon"
              text="검색 옵션 적용"
              rounded="rounded-[10px]"
              onClick={handleApplyClick}
            ></ButtonLayout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultOption;
