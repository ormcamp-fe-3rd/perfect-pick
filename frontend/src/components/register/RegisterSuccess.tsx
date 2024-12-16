import { Link } from 'react-router-dom';

export default function registerSuccess() {
  return (
    <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-40">
      <div className="absolute left-1/2 top-1/2 flex h-[552px] w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[20px] bg-white">
        <strong className="text-3xl font-semibold">
          회원가입이 완료되었습니다🎉
        </strong>
        <Link
          to={'/'}
          className="mt-[55px] flex h-20 w-[284px] items-center justify-center rounded-full bg-black text-2xl font-semibold text-white"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
