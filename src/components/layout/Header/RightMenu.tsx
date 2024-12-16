import { Link } from 'react-router-dom';

interface RightMenuListProps {
  isMenuOpen: boolean;
}

export default function RightMenu({ isMenuOpen }: RightMenuListProps) {
  const List = [
    { to: '', src: '../images/header/ico-search.svg', alt: '통합검색' },
    { to: '/cart', src: '../images/header/ico-cart.svg', alt: '통합검색' },
    { to: '/mypage', src: '../images/header/ico-mypage.svg', alt: '통합검색' },
    { to: '/login', src: '../images/header/ico-login.svg', alt: '통합검색' },
  ];

  return (
    <ul className="flex lg:absolute lg:right-[15px]">
      {List.map((List, index) => (
        <li
          key={index}
          className={`${index < 2 ? (isMenuOpen ? '' : 'hidden') : isMenuOpen ? 'lg:hidden' : 'lg:block'} mr-[25px]`}
        >
          <Link to={List.to}>
            <img src={List.src} alt={List.alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
