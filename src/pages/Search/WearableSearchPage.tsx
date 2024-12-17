import SearchSide from '../../components/productSearch/Feature/SearchSide';
import DefaultOption from '../../components/productSearch/Options/DefaultOption';
import MobileOption from '../../components/productSearch/Options/MobileOption';

function WearableSearchPage() {
  return (
    <>
      <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
        <div className="md:hidden">
          <div className="flex gap-5">
            <DefaultOption type="wearable" />
            <SearchSide imageSrc="../images/Products/werable-side.png" />
          </div>
        </div>
        <div className="hidden md:!block">
          <MobileOption type="wearable" />
        </div>
      </div>
    </>
  );
}

export default WearableSearchPage;
