import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import SearchSide from '@/components/productSearch/Feature/SearchSide';
import DefaultOption from '@/components/productSearch/Options/DefaultOption';
import MobileOption from '@/components/productSearch/Options/MobileOption';
import ProductContainer from '@/components/productSearch/Product/ProductContainer';
import { loadProductToDB } from '@/firebase';

import { filterProducts } from '../utils/filterProduct';
import Product from './Product';

interface ProductListPageProps {
  categoryId: OptionProps['type'];
  imageSrc?: string;
}

export interface OptionProps {
  type: 'mobile' | 'tablet' | 'wearable' | 'notebook';
  onApplyClick: (
    selectedOptions: string[],
    selectedOptionCategory: string[],
    firstPrice: number,
    secondPrice: number,
    selectedTitle: string,
  ) => void;
}

const ProductListPage: React.FC<ProductListPageProps> = ({
  categoryId,
  imageSrc = '',
}) => {
  const [products, setProducts] = useState<DocumentData[]>([]);
  const [firstPrice, setFirstPrice] = useState<number | null>(null);
  const [secondPrice, setSecondPrice] = useState<number | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOptionCategory, setSelectedOptionCategory] = useState<
    string[]
  >([]);

  const handleApplyClick = (
    selectedItems: string[],
    selectedOptionCategory: string[],
    firstPrice: number,
    secondPrice: number,
    selectedTitle: string,
  ) => {
    setSelectedOptions(selectedItems);
    setSelectedOptionCategory(selectedOptionCategory);
    setFirstPrice(firstPrice);
    setSecondPrice(secondPrice);
    setSelectedTitle(selectedTitle);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await loadProductToDB();
        const productData = filterProducts(
          allProducts,
          firstPrice,
          secondPrice,
          selectedTitle,
          selectedOptionCategory,
          selectedOptions,
          categoryId,
        );
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [
    categoryId,
    selectedOptions,
    selectedOptionCategory,
    firstPrice,
    secondPrice,
    selectedTitle,
  ]);

  return (
    <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
      <div className="md:hidden">
        <div className="flex gap-5">
          <DefaultOption type={categoryId} onApplyClick={handleApplyClick} />
          {imageSrc && imageSrc !== '' && <SearchSide imageSrc={imageSrc} />}
        </div>
      </div>
      <div className="hidden md:!block">
        <MobileOption type={categoryId} onApplyClick={handleApplyClick} />
      </div>
      <ProductContainer>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product
              height="h-[300px]"
              width="max-w-[320px] md:max-w-[548px]"
              resource={product}
              key={index}
            />
          ))
        ) : (
          <p>로딩 중...</p>
        )}
      </ProductContainer>
    </div>
  );
};

export default ProductListPage;
