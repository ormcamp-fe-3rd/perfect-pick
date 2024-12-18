import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

// 타입 정의
interface Product {
  brand: string;
  id: string;
  title: string;
  src: Record<string, string>;
  price_origin: number;
  price_dis_rate: string;
  price_sell: number;
  opt_color: Record<string, number>;
  opt_storage: Record<string, number>;
  category_id: string;
}

// Custom Hook
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
}
