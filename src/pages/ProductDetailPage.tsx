import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db, getUserInfo } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import ProductDescription from '@/components/productDetail/ProductDescription';
import ProductImages from '@/components/productDetail/ProductImages';
import ProductOptions from '@/components/productDetail/ProductOptions';
import { UserData } from '@/types';

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (!id) {
          console.error('Invalid product ID');
          setLoading(false);
          return;
        }

        const productRef = doc(db, 'products', id);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const data = productSnapshot.data();
          setProductData(data);
        } else {
          console.error('No such product!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserInfo = async () => {
      try {
        const userInfo = (await getUserInfo()) as UserData;
        setUser(userInfo);
      } catch (error) {
        console.log('사용자 정보를 가져오는 실패했습니다.', error);
      }
    };

    fetchProductData();
    fetchUserInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (productData) {
    return (
      <div className="mx-10">
        <div className="mx-auto mt-9 max-w-[1400px] lg:mt-6">
          <div className="flex gap-10 lg:flex-col">
            <div className="flex-grow">
              <ProductImages product={productData} />
            </div>
            <div className="p-4">
              <ProductOptions product={productData} userId={user?.id} />
            </div>
          </div>
          <div className="mb-[30px] mt-[120px] w-full lg:mt-14">
            <ProductDescription product={productData} />
          </div>
        </div>
      </div>
    );
  }

  return <div>No such product!</div>;
}

export default ProductDetailPage;
