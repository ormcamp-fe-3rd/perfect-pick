interface ArrowButtonProps {
  onClick?: () => void;
  MainSlidePrev?: boolean;
  MainSlideNext?: boolean;
  TabSlidePrev?: boolean;
  TabSlideNext?: boolean;
  imgName?: string;
  altText?: string;
}

export default function ArrowButton({
  onClick,
  MainSlidePrev,
  MainSlideNext,
  TabSlidePrev,
  TabSlideNext,
  imgName,
  altText,
}: ArrowButtonProps) {
  const buttonClass = [
    'flex h-16 w-16 rounded-full text-[0px] items-center justify-center',
    MainSlidePrev
      ? 'bg-white/40 hover:bg-white absolute left-6 top-1/2 z-10 -translate-y-1/2 shadow-md transition-all'
      : '',
    MainSlideNext
      ? 'bg-white/40 hover:bg-white absolute right-6 top-1/2 z-10 -translate-y-1/2 shadow-md transition-all'
      : '',
    TabSlidePrev ? 'bg-black absolute top-[-114px] right-[74px]' : '',
    TabSlideNext ? 'bg-black absolute top-[-114px] right-0' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      <img src={imgName} alt={altText} />
    </button>
  );
}
