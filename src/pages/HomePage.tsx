import MainSlide from '@/components/Home/MainSlide';
import TabSlide from '@/components/Home/TabSlide';
import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Product } from '@/types';

const fetchProducts = async () => {
  const productsRef = collection(db, 'products');

  try {
    const querySnapshot = await getDocs(productsRef);
    const products: Record<string, any> = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
    return products;
  } catch (error) {
    console.error('Error fetching filtered products:', error);
    return [];
  }
};

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts as Product[]);
      setLoading(false);
    };
    fetchAndSetProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const saleProducts = products.filter((product) => product.isSale === true);
  const newProducts = products.filter((product) => product.isNew === true);

  return (
    <>
      <div className="inner">
        <div className="mt-[90px] lg:mt-[57px] md:mt-10">
          <MainSlide />
        </div>
        <div>
          <TabSlide
            subTitle="놓치면 안될 특가 상품"
            mainTitle="Hot Sale"
            products={saleProducts}
          />
        </div>
        <div>
          <TabSlide
            subTitle="방금 나온 신제품"
            mainTitle="New Arrival"
            products={newProducts}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
