import OrderHistory from '@/components/myPage/OrderHistory';
import UserInfo from '@/components/myPage/UserInfo';
import WelcomeMessage from '@/components/myPage/WelcomeMessage';
import LogoutButton from '@/components/myPage/LogoutButton';

function MyPage() {
  return (
    <div className="m-auto w-full min-w-[395px] max-w-[1400px] px-10">
      <h1 className="mb-[67px] mt-16 text-center text-3xl font-semibold">
        마이페이지
      </h1>
      <div className="flex justify-between gap-20 lg:flex-col">
        <div className="flex-grow">
          <WelcomeMessage />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">회원 정보</h2>
          <UserInfo />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold">주문 상세 내역</h2>
        <OrderHistory />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}

export default MyPage;
