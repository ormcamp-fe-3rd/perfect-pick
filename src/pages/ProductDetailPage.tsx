import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import ProductDescription from '@/components/productDetail/ProductDescription';
import ProductImages from '@/components/productDetail/ProductImages';
import ProductOptions from '@/components/productDetail/ProductOptions';

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

    fetchProductData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (productData) {
    return (
      <div className="mx-10">
        <div className="mx-auto mt-9 max-w-[1400px] lg:mt-6">
          <div className="flex w-full flex-row gap-10 lg:flex-col">
            <div className="flex-grow">
              <ProductImages product={productData} />
            </div>
            <div className="p-4">
              <ProductOptions product={productData} />
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
