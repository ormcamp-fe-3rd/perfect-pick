import Product from '@/components/productSearch/Product/Product';
import ProductContainer from '@/components/productSearch/Product/ProductContainer';

import SearchSide from '../../components/productSearch/Feature/SearchSide';
import DefaultOption from '../../components/productSearch/Options/DefaultOption';
import MobileOption from '../../components/productSearch/Options/MobileOption';

function MobileSearchPage() {
  return (
    <>
      <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
        <div className="md:hidden">
          <div className="flex gap-5">
            <DefaultOption type="mobile" />
            <SearchSide imageSrc="../images/Products/galaxy-side.png" />
          </div>
        </div>
        <div className="hidden md:!block">
          <MobileOption type="mobile" />
        </div>
        <ProductContainer>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
          <Product
            company="삼성"
            discPrice="896,000원"
            height="h-[300px]"
            width=" max-w-[320px] md:max-w-[548px]"
            image="../images/Products/galaxy-side.png"
            name="갤럭시 S24 FE자급제"
            origPrice="946,000"
          ></Product>
        </ProductContainer>
      </div>
    </>
  );
}

export default MobileSearchPage;
