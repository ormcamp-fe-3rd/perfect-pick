import { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderNav from './HeaderNav';
import MenuButton from './MenuButton';
import RightMenu from './RightMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`inner relative z-10 flex h-[121px] flex-wrap items-center justify-between before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-full before:-translate-x-1/2 before:bg-black lg:before:w-[calc(100%-30px)] md:h-[83px] ${isMenuOpen ? '' : 'menu-bg'}`}
    >
      <Link
        to={'/'}
        className="lg:leading-2 font-BagelFatOne text-[2.5rem] text-[#1F2C3E] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 md:text-[1.875rem] sm:text-2xl"
      >
        <h1>PERFECT PICK</h1>
      </Link>

      <MenuButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />

      <HeaderNav isMenuOpen={isMenuOpen} />

      <RightMenu isMenuOpen={isMenuOpen} />
    </header>
  );
}
