import ProductImages from './ProductImages';
import ProductOptions from './ProductOptions';
import ProductDescription from './ProductDescription';

export default function ProductDetails() {
  return (
    <div className="mx-auto mt-9 max-w-[1400px] lg:mt-6">
      <div className="flex w-full flex-row gap-10 md:flex-col lg:gap-5">
        <div className="h-[650px] flex-[4] md:mx-[30px] md:h-[400px] lg:h-[450px] lg:flex-[3]">
          <ProductImages />
        </div>
        <div className="flex-[3] p-4">
          <ProductOptions />
        </div>
      </div>
      <div className="mb-[30px] mt-[120px] w-full lg:mt-14">
        <ProductDescription />
      </div>
    </div>
  );
}
