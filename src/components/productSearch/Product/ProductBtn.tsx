import { Button } from '@headlessui/react';

interface ButtonLayoutProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  text?: string;
  fontSize?: string;
  textColor?: string;
  rounded?: string;
  onClick?: () => void;
}

function ButtonLayout({
  backgroundColor,
  width,
  height,
  text,
  rounded = 'rounded-[30px]',
  textColor = 'text-black',
  onClick,
}: ButtonLayoutProps) {
  return (
    <Button
      className={`${rounded} ${textColor} ${backgroundColor} ${width} ${height} items-center justify-center text-center text-2xl font-semibold`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
export default ButtonLayout;
