import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="inner flex h-[121px] items-center justify-between border-b">
      <Link to={'/'}>
        <h1 className="font-BagelFatOne text-[2.5rem] text-[#1F2C3E]">
          PERFECT PICK
        </h1>
      </Link>

      <nav className="lg:hidden">
        <ul className="flex">
          <li className="mr-[60px]">
            <Link to={''} className="hover:text-red">
              TOP10
            </Link>
          </li>
          <li className="mr-[60px]">
            <Link to={''} className="hover:text-red">
              Mobile
            </Link>
          </li>
          <li className="mr-[60px]">
            <Link to={''} className="hover:text-red">
              Tablet
            </Link>
          </li>
          <li className="mr-[60px]">
            <Link to={''} className="hover:text-red">
              Notebook
            </Link>
          </li>
          <li>
            <Link to={''} className="hover:text-red">
              Wearable
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="flex">
        <li className="mr-[25px]">
          <Link to={''}>
            <img src="../images/header/ico-search.svg" alt="통합검색" />
          </Link>
        </li>
        <li className="mr-[25px]">
          <Link to={'/cart'}>
            <img src="../images/header/ico-cart.svg" alt="장바구니" />
          </Link>
        </li>
        <li className="mr-[25px]">
          <Link to={'/mypage'}>
            <img src="../images/header/ico-mypage.svg" alt="마이페이지" />
          </Link>
        </li>
        <li>
          <Link to={'/login'}>
            <img src="../images/header/ico-login.svg" alt="로그인" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
