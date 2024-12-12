import SearchSide from '../Feature/SearchSide';
import DefaultOption from '../Options/DefaultOption';
import MobileOption from '../Options/MobileOption';

function ProductSearch() {
  return (
    <>
      <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
        <div className="md:hidden">
          <div className="flex gap-5">
            <DefaultOption type="CATEGORIES_TABLET" />
            <SearchSide imageSrc="../images/Products/tablet-side.png" />
          </div>
        </div>
        <div className="hidden md:!block">
          <MobileOption type="CATEGORIES_TABLET" />
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
