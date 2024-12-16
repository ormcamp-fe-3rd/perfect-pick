import { Button } from '@headlessui/react';

interface ProductProps {
  width?: string;
  height?: string;
  company?: string;
  name?: string;
  image?: string;
  origPrice?: string;
  discPrice?: string;

  rounded?: string;
  onClick?: () => void;
}

function ButtonLayout({
  width,
  height,
  company,
  name,
  origPrice,
  discPrice,
  image = '../images/Products/galaxy-side.png',
  rounded = 'rounded-[10px]',
  onClick,
}: ProductProps) {
  return (
    <div>
      <Button
        className={`${rounded} ${width} ${height} w-full items-center justify-center bg-cover bg-center text-center`}
        onClick={onClick}
        style={{ backgroundImage: `url(${image})` }}
      ></Button>
      <div className="pt-4">
        <div className="justify-start pb-[3.4px] text-sm font-semibold text-gray">
          {company}
        </div>
        <div className="justify-start pb-[8.5px] text-lg font-semibold text-black">
          {name}
        </div>
        <div className="justify-start pb-[3.4px] text-2xl font-extrabold text-red">
          {discPrice}
        </div>
        <div className="justify-start text-base font-semibold text-gray line-through">
          {origPrice}
        </div>
      </div>
    </div>
  );
}
export default ButtonLayout;
