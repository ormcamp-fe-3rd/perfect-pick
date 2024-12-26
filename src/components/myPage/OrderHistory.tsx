import { getAuth } from 'firebase/auth';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 전체 주문 내역
interface Order {
  userId: string;
  orderDate: string;
  totalPrice: number;
  items: OrderItem[];
}

// 주문 내역의 각 상품 정보
interface OrderItem {
  amount: number;
  name: string;
  options: Record<string, number>;
  src: string;
  price: number;
}

export default function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const db = getFirestore();
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        window.history.replaceState(null, '', '/login');
        navigate('/login', { replace: true });
        return;
      }

      const userId = currentUser.uid;
      const ordersRef = collection(db, 'orders');
      const q = query(ordersRef, where('user_id', '==', userId));

      try {
        const querySnapshot = await getDocs(q);
        const orders: Order[] = [];

        for (const docSnapshot of querySnapshot.docs) {
          const orderData = docSnapshot.data();
          const itemsRef = collection(db, `orders/${docSnapshot.id}/items`);
          const itemsSnapshot = await getDocs(itemsRef);

          const items: OrderItem[] = itemsSnapshot.docs.map((itemDoc) => {
            const itemData = itemDoc.data();
            return {
              amount: itemData.amount,
              name: itemData.name,
              options: itemData.options,
              src: itemData.src,
              price: itemData.price,
            };
          });

          orders.push({
            userId: docSnapshot.id,
            orderDate: orderData.order_date,
            totalPrice: orderData.total_price,
            items,
          });
        }

        setOrderHistory(orders);
      } catch (error) {
        console.error('값을 읽지 못하였습니다. DB 정보를 확인해주세요.', error);
      }
    };

    fetchOrders();
  }, []);

  if (orderHistory.length === 0) {
    return <div>No orders found.</div>;
  }

  return (
    <>
      {orderHistory.map((order) =>
        order.items.map((item, index) => (
          <div
            key={`${order.userId}-${index}`}
            className="mt-[15px] flex items-center justify-between gap-5 border-t p-5 text-xl font-semibold md:flex-col md:items-start"
          >
            <div className="flex gap-5">
              <img
                className="size-[110px] rounded-[10px]"
                src={item.src}
                alt={`${item.name}'s image`}
              />
              <div className="grid grid-cols-1 items-center">
                <div className="col-span-1 font-extrabold">{item.name}</div>
                <div className="col-span-1">
                  옵션: {Object.values(item.options).join('/')}
                </div>
                <div className="col-span-1 text-start">{item.amount}개</div>
              </div>
            </div>
            <div className="text-nowrap md:w-full md:text-right">
              {item.price.toLocaleString()}원
            </div>
          </div>
        )),
      )}
      <div className="flex w-full items-center justify-end gap-12 text-nowrap border-t px-12 py-4 text-xl font-extrabold">
        <span>총 주문금액 </span>
        <span className="text-red">
          {orderHistory
            .reduce(
              (total, order) =>
                total + order.items.reduce((sum, item) => sum + item.price, 0),
              0,
            )
            .toLocaleString()}
          원
        </span>
      </div>
    </>
  );
}
