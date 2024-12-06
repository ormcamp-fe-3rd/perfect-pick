import { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderNav from './HeaderNav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`inner relative z-10 flex h-[121px] flex-wrap items-center justify-between before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-full before:-translate-x-1/2 before:bg-black md:h-[83px] lg:before:w-[calc(100%-30px)] ${isMenuOpen ? '' : 'menu-bg'}`}
    >
      <Link
        to={'/'}
        className="font-BagelFatOne lg:leading-2 text-[2.5rem] text-[#1F2C3E] sm:text-2xl md:text-[1.875rem] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <h1>PERFECT PICK</h1>
      </Link>

      <button
        className="absolute left-[15px] top-1/2 hidden -translate-y-1/2 lg:block"
        onClick={toggleMenu}
      >
        <img src="../images/header/ico-menu.svg" alt="모바일 메뉴" />
      </button>

      <HeaderNav isMenuOpen={isMenuOpen} />

      <ul className="flex lg:absolute lg:right-[15px]">
        <li className={`mr-[25px] sm:mr-[10px] ${isMenuOpen ? '' : 'hidden'}`}>
          <Link to={''}>
            <img src="../images/header/ico-search.svg" alt="통합검색" />
          </Link>
        </li>
        <li className={`mr-[25px] lg:mr-0 ${isMenuOpen ? '' : 'hidden'}`}>
          <Link to={'/cart'}>
            <img src="../images/header/ico-cart.svg" alt="장바구니" />
          </Link>
        </li>
        <li className={`mr-[25px] ${isMenuOpen ? 'lg:hidden' : 'lg:block'}`}>
          <Link to={'/mypage'}>
            <img src="../images/header/ico-mypage.svg" alt="마이페이지" />
          </Link>
        </li>
        <li className={`${isMenuOpen ? 'lg:hidden' : 'lg:block'}`}>
          <Link to={'/login'}>
            <img src="../images/header/ico-login.svg" alt="로그인" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
