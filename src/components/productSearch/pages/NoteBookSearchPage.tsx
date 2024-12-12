import DefaultOption from '../Options/DefaultOption';
import MobileOption from '../Options/MobileOption';

function ProductSearch() {
  return (
    <>
      <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
        <div className="md:hidden">
          <DefaultOption type="CATEGORIES_NOTEBOOK" />
        </div>
        <div className="hidden md:!block">
          <MobileOption type="CATEGORIES_NOTEBOOK" />
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
