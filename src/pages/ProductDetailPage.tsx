import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();

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
      const userInfo = (await getUserInfo()) as UserData;
      setUser(userInfo);
    };

    fetchProductData();
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (!loading && !productData) {
      navigate('/');
    }
  }, [loading, productData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (productData) {
    return (
      <div className="mx-10 min-w-[395px]">
        <div className="mx-auto mt-9 max-w-[1400px] lg:mt-6">
          <div className="flex gap-10 lg:flex-col">
            <div className="flex-grow-[2]">
              <ProductImages product={productData} />
            </div>
            <div className="flex-1 p-4">
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
}

export default ProductDetailPage;
