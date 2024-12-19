import SearchInput from '@/components/productSearch/Feature/SearchInput';
import Product from '@/components/productSearch/Product/Product';
import ProductContainer from '@/components/productSearch/Product/ProductContainer';

function TotalSearchPage() {
  return (
    <>
      <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
        <div className="pb-[88px] md:pb-0">
          <div className="pb-[33px] text-center text-3xl font-extrabold">
            통합검색
          </div>
          <div className="pb-[33px] text-center font-SUIT text-2xl">
            <strong>"임시"</strong>으로 검색한 결과입니다.
          </div>
          <SearchInput
            height="h-[84px] md:h-[58px]"
            width="w-[824px]"
          ></SearchInput>
        </div>
        <ProductContainer marginTop="mt-[88px] md:mt-[50px]">
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

export default TotalSearchPage;
