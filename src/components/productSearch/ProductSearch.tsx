import DropdownMenu from './DropdownMenu';
import SearchOption from './SearchOption';

function ProductSearch() {
  return (
    <div className="mx-auto mt-14 w-[1400px] md:mt-3">
      <div className="flex gap-5">
        <SearchOption type="CATEGORIES_MOBILE"></SearchOption>
        <div className="lg:hidden">
          <img
            className="rounded-xl border-[0.1px]"
            src="../images/Products/galaxy-side.png"
            alt="galaxy-side"
          />
          <button className="mt-[57px] h-[87px] w-[380px] rounded-xl bg-skyblue text-2xl font-semibold">
            맞춤형 제품 추천
          </button>
        </div>
      </div>
      <div className="test">
        <button className="mt-[23px] hidden h-[45px] w-[994px] rounded-xl bg-skyblue text-2xl font-semibold lg:block">
          맞춤형 제품 추천
        </button>
        <div className="flex w-full justify-end pt-[50px]">
          <DropdownMenu></DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
