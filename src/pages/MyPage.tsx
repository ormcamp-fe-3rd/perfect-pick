import WelcomeMessage from '@/components/myPage/WelcomeMessage';
import UserInfo from '@/components/myPage/UserInfo';
import OrderHistory from '@/components/myPage/OrderHistory';

function MyPage() {
  return (
    <main className="m-auto w-full max-w-[1400px] px-10">
      <h1 className="mb-[67px] mt-16 text-center text-3xl font-semibold">
        마이페이지
      </h1>
      <div className="flex justify-between gap-20 lg:flex-col">
        <article className="flex-grow">
          <WelcomeMessage />
        </article>
        <section className="flex-grow">
          <h2 className="text-2xl font-bold">회원 정보</h2>
          <UserInfo />
        </section>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-bold">주문 상세 내역</h2>
        <OrderHistory />
      </section>
    </main>
  );
}

export default MyPage;
