import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import Product from '@/components/productSearch/Product/Product';
import ProductContainer from '@/components/productSearch/Product/ProductContainer';
import { loadProductToDB } from '@/firebase';

import SearchSide from '../../components/productSearch/Feature/SearchSide';
import DefaultOption from '../../components/productSearch/Options/DefaultOption';
import MobileOption from '../../components/productSearch/Options/MobileOption';

function MobileSearchPage() {
  const [products, setProducts] = useState<DocumentData[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedOptionCategory, setselectedOptionCategory] = useState<
    string[]
  >([]);
  const [firstPrice, setFirstPrice] = useState<number>(0);
  const [secondPrice, setSecondPrice] = useState<number>(0);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const handleApplyClick = (
    selectedItems: string[],
    selectedOptionCategory: string[],
    firstPrice: number,
    secondPrice: number,
    selectedTitle: string,
  ) => {
    setSelectedItems(selectedItems);
    setselectedOptionCategory(selectedOptionCategory);
    setFirstPrice(firstPrice);
    setSecondPrice(secondPrice);
    setSelectedTitle(selectedTitle);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = (await loadProductToDB()).filter((product) => {
          if (product.category_id !== 'mobile') return false;

          // 가격 필터링
          if (
            (firstPrice && product.price_sell < firstPrice) ||
            (secondPrice && product.price_sell > secondPrice)
          ) {
            return false;
          }

          // 제목 검색 필터링
          if (selectedTitle && !product.title.includes(selectedTitle)) {
            return false;
          }

          return selectedOptionCategory.every((category, index) => {
            const selectedItem = selectedItems[index];

            if (category === 'brand') {
              return product.brand === selectedItem;
            }
            if (category === 'opt_storage') {
              return (
                product.opt_storage &&
                product.opt_storage[selectedItem] !== undefined
              );
            }

            return true;
          });
        });

        setProducts(productData);
      } catch (error) {
        console.log('상품 정보를 가져오는데 실패했습니다.', error);
      }
    };
    fetchProducts();
  }, [
    selectedItems,
    selectedOptionCategory,
    firstPrice,
    secondPrice,
    selectedTitle,
  ]); // 제목 필터링 추가

  return (
    <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
      <div className="md:hidden">
        <div className="flex gap-5">
          <DefaultOption type="mobile" onApplyClick={handleApplyClick} />
          <SearchSide imageSrc="../images/Products/galaxy-side.png" />
        </div>
      </div>
      <div className="hidden md:block">
        <MobileOption type="mobile" onApplyClick={handleApplyClick} />
      </div>
      <ProductContainer>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Link
              to={`/product/${product.id}`} // 상품 상세 페이지로 링크 추가
              key={index}
            >
              <Product
                company={product.brand}
                discPrice={product.price_sell.toLocaleString()}
                height="h-[300px]"
                width="max-w-[320px] md:max-w-[548px]"
                image={product.src[1]}
                name={product.title}
                origPrice={product.price_origin.toLocaleString()}
              />
            </Link>
          ))
        ) : (
          <p>로딩 중...</p>
        )}
      </ProductContainer>
    </div>
  );
}

export default MobileSearchPage;
