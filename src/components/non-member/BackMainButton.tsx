import { Link } from 'react-router-dom';

export default function BackMainButton() {
  return (
    <>
      <Link
        to={'/'}
        className="mt-[60px] flex h-20 items-center justify-center rounded-full bg-pureblack text-2xl font-semibold text-white"
      >
        메인으로 돌아가기
      </Link>
    </>
  );
}
