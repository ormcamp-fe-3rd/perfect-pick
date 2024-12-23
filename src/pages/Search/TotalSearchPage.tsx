import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import SearchInput from '@/components/productSearch/Feature/SearchInput';
import Product from '@/components/productSearch/Product/Product';
import ProductContainer from '@/components/productSearch/Product/ProductContainer';
import { loadProductToDB } from '@/firebase';

function TotalSearchPage() {
  const [products, setProducts] = useState<DocumentData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await loadProductToDB();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('상품 데이터를 로드하는 중 오류가 발생했습니다.', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // 검색어에 따른 필터링 useEffect
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <>
      <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
        <div className="pb-[88px] md:pb-0">
          <div className="pb-[33px] text-center text-3xl font-extrabold">
            통합검색
          </div>
          <div className="pb-[33px] text-center font-SUIT text-2xl">
            {searchQuery.length !== 0 && (
              <>
                <strong>"{searchQuery}"</strong>으로 검색한 결과입니다.
              </>
            )}
          </div>
          <SearchInput
            height="h-[84px] md:h-[58px]"
            width="w-[824px]"
            onBlur={(e) => setSearchQuery(e.target.value)} // 검색어 업데이트
          />
        </div>
        <ProductContainer>
          {isLoading ? (
            <p>로딩 중...</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
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
            <p>검색 결과가 없습니다.</p>
          )}
        </ProductContainer>
      </div>
    </>
  );
}

export default TotalSearchPage;
