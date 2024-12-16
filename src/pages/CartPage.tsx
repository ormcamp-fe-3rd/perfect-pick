import { Link } from 'react-router-dom';
import CartTable from '@/components/cart/CartTable';
import { CART_PAGE } from '@/constants/option';

function CartPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col lg:px-5">
      <h2 className="mt-16 w-full text-center text-3xl font-extrabold">
        장바구니
      </h2>
      <CartTable />
      <div className="mx-5 my-20 rounded-[10px] bg-[#D9D9D9] px-4 py-5 text-2xl">
        <ul className="list-disc pl-10">
          <li>
            장바구니에 최대 {CART_PAGE.MAX_CART_ITEMS}개의 상품을 담을 수
            있습니다.
          </li>
          <li>
            장바구니 상품은 최대 {CART_PAGE.MAX_STORAGE_DAYS}일간 저장됩니다.
          </li>
          <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
          <li>
            출발 정보는 판매자가 설정한 정보에 의해 제공되며, 물류위탁 상품인
            경우 물류사의 사정에 따라 실제와 다를 수 있습니다.
          </li>
          <li>
            일부 상품의 경우 카드 할부기간이 카드사 제공 기간보다 적게 제공될 수
            있습니다.
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-16 md:gap-5">
        <Link to="#" onClick={() => window.history.back()}>
          <button className="h-20 w-[226px] rounded-[50px] bg-gray text-2xl text-[white] md:w-[160px]">
            쇼핑 계속하기
          </button>
        </Link>
        <Link to="/payment">
          <button className="h-20 w-[226px] rounded-[50px] bg-red text-2xl text-[white] md:w-[160px]">
            구매하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
