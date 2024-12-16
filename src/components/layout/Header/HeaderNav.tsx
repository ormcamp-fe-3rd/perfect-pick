import { Link } from 'react-router-dom';

interface NavProps {
  isMenuOpen: boolean;
}

export default function HeaderNav({ isMenuOpen }: NavProps) {
  return (
    <nav className={`${isMenuOpen ? 'lg:hidden' : ''}`}>
      <ul className="flex gap-[60px] lg:absolute lg:top-[176px] lg:w-[calc(100%-30px)] lg:gap-7 md:flex-wrap md:gap-[10px]">
        <li className="lg:h-[50px] lg:w-full lg:rounded-full lg:bg-green">
          <Link
            to={''}
            className="block hover:text-red lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:text-center lg:text-2xl lg:font-semibold lg:hover:text-black"
          >
            TOP10
          </Link>
        </li>
        <li className="lg:h-[50px] lg:w-full lg:rounded-full lg:bg-salmon">
          <Link
            to={''}
            className="block hover:text-red lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:text-center lg:text-2xl lg:font-semibold lg:hover:text-black"
          >
            Mobile
          </Link>
        </li>
        <li className="lg:h-[50px] lg:w-full lg:rounded-full lg:bg-yellow">
          <Link
            to={''}
            className="block hover:text-red lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:text-center lg:text-2xl lg:font-semibold lg:hover:text-black"
          >
            Tablet
          </Link>
        </li>
        <li className="lg:h-[50px] lg:w-full lg:rounded-full lg:bg-pink">
          <Link
            to={''}
            className="block hover:text-red lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:text-center lg:text-2xl lg:font-semibold lg:hover:text-black"
          >
            Notebook
          </Link>
        </li>
        <li className="lg:h-[50px] lg:w-full lg:rounded-full lg:bg-skyblue">
          <Link
            to={''}
            className="block hover:text-red lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:text-center lg:text-2xl lg:font-semibold lg:hover:text-black"
          >
            Wearable
          </Link>
        </li>
      </ul>
    </nav>
  );
}
