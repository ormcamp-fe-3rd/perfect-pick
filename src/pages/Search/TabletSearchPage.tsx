import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import Product from '@/components/productSearch/Product/Product';
import ProductContainer from '@/components/productSearch/Product/ProductContainer';
import { loadProductToDB } from '@/firebase';

import SearchSide from '../../components/productSearch/Feature/SearchSide';
import DefaultOption from '../../components/productSearch/Options/DefaultOption';
import MobileOption from '../../components/productSearch/Options/MobileOption';

function TabletSearchPage() {
  const [products, setProducts] = useState<DocumentData[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); // 선택된 항목을 관리하는 상태
  console.log(selectedItems);

  const handleApplyClick = (selectedItems: string[]) => {
    // "검색 옵션 적용" 버튼 클릭 시 선택된 항목 배열을 상태에 저장
    setSelectedItems(selectedItems);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = (await loadProductToDB()).filter(
          (product) => product.category_id === 'tablet',
        );
        setProducts(productData);
      } catch (error) {
        console.log('상품 정보를 가져오는데 실패했습니다.', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
      <div className="md:hidden">
        <div className="flex gap-5">
          {/* DefaultOption에 선택된 항목을 전달하는 onApplyClick */}
          <DefaultOption type="mobile" onApplyClick={handleApplyClick} />
          <SearchSide imageSrc="../images/Products/tablet-side.png" />
        </div>
      </div>
      <div className="hidden md:block">
        <MobileOption type="mobile" onApplyClick={handleApplyClick} />
      </div>
      <ProductContainer>
        {/* Firebase에서 가져온 데이터로 렌더링 */}
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product
              key={index}
              company={product.brand}
              discPrice={product.price_sell.toLocaleString()}
              height="h-[300px]"
              width="max-w-[320px] md:max-w-[548px]"
              image={product.src[1]}
              name={product.title}
              origPrice={product.price_origin.toLocaleString()}
            />
          ))
        ) : (
          <p>로딩 중...</p>
        )}
      </ProductContainer>
    </div>
  );
}

export default TabletSearchPage;
