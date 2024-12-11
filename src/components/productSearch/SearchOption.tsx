import {
  CATEGORIES_MOBILE,
  CATEGORIES_TABLET,
  CATEGORIES_WERABLE,
  MOBILE_DATA,
  TABLET_DATA,
  WERABLE_DATA,
} from '../../constants/optionsData.ts';
import Check from './CheckBox.tsx';
import InputString from './InputString.tsx';

interface SearchOptionProps {
  type: 'CATEGORIES_MOBILE' | 'CATEGORIES_TABLET' | 'CATEGORIES_WERABLE';
}

function SearchOption({ type }: SearchOptionProps) {
  const categories = {
    CATEGORIES_MOBILE: CATEGORIES_MOBILE,
    CATEGORIES_TABLET: CATEGORIES_TABLET,
    CATEGORIES_WERABLE: CATEGORIES_WERABLE,
  }[type];

  const data = {
    CATEGORIES_MOBILE: MOBILE_DATA,
    CATEGORIES_TABLET: TABLET_DATA,
    CATEGORIES_WERABLE: WERABLE_DATA,
  }[type];

  return (
    <div className="h-[600px] w-full max-w-[1000px] rounded-xl border-2 border-black text-xl font-semibold">
      <div className="flex">
        {/* 카테고리 레이블 */}
        <div className="space-y-[45px] pl-6 pr-[62px] pt-[30px]">
          {categories.map((category, index) => (
            <p key={index}>{category}</p>
          ))}
        </div>
        {/* 옵션 컬럼들 */}
        {[0, 1, 2, 3].map((colIndex) => (
          <div
            key={colIndex}
            className={`space-y-[45px] ${colIndex !== 3 ? 'pr-[103px]' : ''} pt-[30px]`}
          >
            {data.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center gap-[17px]">
                <Check />
                <p>{row[colIndex]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="pt-[30px]">
        <div className="flex items-center">
          <p className="pl-6">가격대</p>
          <div className="ml-[84px] flex w-[800px] items-center">
            <InputString width="300px"></InputString>
            <p className="px-[90px] text-[28px]">~</p>
            <InputString width="300px"></InputString>
          </div>
        </div>
        <div className="pt-[30px]">
          <div className="flex items-center">
            <p className="pl-6">검색</p>
            <div className="pl-[100px]">
              <InputString width="800px"></InputString>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[160px] pt-[35px] lg:w-[1000px] lg:justify-center">
            <button className="h-[45px] w-[180px] rounded-[10px] bg-skyblue">
              초기화
            </button>
            <button className="h-[45px] w-[180px] rounded-[10px] bg-salmon">
              검색 옵션 적용
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchOption;
