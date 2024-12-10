import CartTable from '@/components/cart/CartTable';
import CheckBox from '@/components/cart/CheckBox';

function CartPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col">
      <div className="mt-16 w-full text-center text-3xl font-extrabold">
        장바구니
      </div>
      <div className="mb-6 mt-5 flex w-full gap-4">
        <CheckBox
          size="size-6"
          checkedColor="bg-yellow"
          labelStyle="text-2xl leading-0"
        >
          모두 선택
        </CheckBox>
        <button className="h-[35px] w-[126px] rounded-[50px] bg-[#D9D9D9] text-2xl">
          선택 삭제
        </button>
      </div>
      <CartTable />
      <div>안내문구</div>
      <div>버튼</div>
    </div>
  );
}

export default CartPage;
