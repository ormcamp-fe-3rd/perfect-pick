interface MenuButtonProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

export default function MenuButton({ onClick, isMenuOpen }: MenuButtonProps) {
  return (
    <button
      className="absolute left-[15px] top-1/2 hidden -translate-y-1/2 lg:block"
      onClick={onClick}
    >
      <img
        src={`../images/header/ico-menu${isMenuOpen ? '' : '-close'}.svg`}
        alt={isMenuOpen ? '메뉴 열기' : '메뉴 닫기'}
      />
    </button>
  );
}
