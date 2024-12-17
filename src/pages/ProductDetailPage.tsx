import ProductDescription from '@/components/productDetail/ProductDescription';
import ProductImages from '@/components/productDetail/ProductImages';
import ProductOptions from '@/components/productDetail/ProductOptions';

function ProductDetailPage() {
  return (
    <div className="mx-10">
      <div className="mx-auto mt-9 max-w-[1400px] lg:mt-6">
        <div className="flex w-full flex-row gap-10 lg:flex-col">
          <div className="flex-grow">
            <ProductImages />
          </div>
          <div className="p-4">
            <ProductOptions />
          </div>
        </div>
        <div className="mb-[30px] mt-[120px] w-full lg:mt-14">
          <ProductDescription />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
