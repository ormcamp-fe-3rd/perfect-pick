import { Link } from 'react-router-dom';

interface RightMenuListProps {
  isMenuOpen: boolean;
}

export default function RightMenu({ isMenuOpen }: RightMenuListProps) {
  const List = [
    { to: '', src: '../images/header/ico-search.svg', alt: '통합검색' },
    { to: '/cart', src: '../images/header/ico-cart.svg', alt: '장바구니' },
    {
      to: '/mypage',
      src: '../images/header/ico-mypage.svg',
      alt: '마이페이지',
    },
    { to: '/login', src: '../images/header/ico-login.svg', alt: '로그인' },
  ];

  function getListItemClassName(index: number, isMenuOpen: boolean) {
    if (index < 2) {
      return isMenuOpen ? 'show-on-mobile' : 'hide-on-mobile';
    } else {
      return isMenuOpen ? 'hide-on-desktop' : 'show-on-desktop';
    }
  }

  return (
    <ul className="flex lg:absolute lg:right-[15px]">
      {List.map((List, index) => (
        <li
          key={index}
          className={`${getListItemClassName(index, isMenuOpen)} mr-[25px]`}
        >
          <Link to={List.to}>
            <img src={List.src} alt={List.alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
