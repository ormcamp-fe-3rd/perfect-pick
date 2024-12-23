// DefaultOption.tsx

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
  onApplyClick: (selectedItems: string[]) => void; // 검색 옵션 적용 버튼 클릭 시 배열을 전달하는 콜백
}

function DefaultOption({ type, onApplyClick }: DefaultOptionProps) {
  const categoryData: CategoryData = typedOptionsData[type];
  const categories = categoryData.categories;
  const data = categoryData.data;

  const [selectedItems, setSelectedItems] = useState<string[]>([]); // 선택된 항목을 관리하는 상태

  const handleItemClick = (item: string) => {
    setSelectedItems((prevState) => {
      if (prevState.includes(item)) {
        // 이미 선택된 항목이면 배열에서 제거
        return prevState.filter((i) => i !== item);
      } else {
        // 선택되지 않은 항목이면 배열에 추가
        return [...prevState, item];
      }
    });
  };

  const handleApplyClick = () => {
    // "검색 옵션 적용" 버튼 클릭 시 선택된 항목 배열을 MobileSearchPage로 전달
    onApplyClick(selectedItems);
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
                    <CheckBox item={item} onClick={handleItemClick} />
                    <p>{item}</p>
                  </div>
                </div>
              ))}
              {data[rowIndex][4] && ( // 5번째 요소가 존재하는 경우에만 렌더링
                <div className="flex w-[180px] items-center">
                  <div className="flex items-center gap-[17px]">
                    <CheckBox
                      item={data[rowIndex][4]}
                      onClick={handleItemClick}
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
              onClick={handleApplyClick}
            ></ButtonLayout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultOption;
