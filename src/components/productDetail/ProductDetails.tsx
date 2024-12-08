import ProductImages from './ProductImages';
import ProductOptions from './ProductOptions';
import ProductDescription from './ProductDescription';

export default function ProductDetails() {
  return (
    <div className="mx-auto mt-9 max-w-[1440px]">
      <span className="text-xl">Tablet &gt; Samsung</span>
      <div className="mt-4 flex w-full flex-row gap-14">
        <div className="h-[640px] w-[780px]">
          <ProductImages />
        </div>
        <div className="flex-[3]">
          <ProductOptions />
        </div>
      </div>
      <div className="mb-[30px] mt-[120px] w-full">
        <ProductDescription />
      </div>
    </div>
  );
}
