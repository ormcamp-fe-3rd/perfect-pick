import { Button } from '@headlessui/react';
import { DocumentData } from 'firebase/firestore';
import { Link } from 'react-router-dom';

interface ProductProps {
  width?: string;
  height?: string;
  key?: number;
  resource?: DocumentData;
  rounded?: string;
  onClick?: () => void;
}

function ButtonLayout({
  width,
  height,
  resource,
  key,
  rounded = 'rounded-[10px]',
  onClick,
}: ProductProps) {
  console.log('resource', resource);
  return (
    <Link to={`/product/${resource?.id}`} key={key}>
      <div>
        <Button
          className={`${rounded} ${width} ${height} w-full items-center justify-center bg-cover bg-center text-center`}
          onClick={onClick}
          style={{ backgroundImage: `url(${resource?.src[1]})` }}
        ></Button>
        <div className="pt-4">
          <div className="justify-start pb-[3.4px] text-sm font-semibold text-gray">
            {resource?.brand}
          </div>
          <div className="justify-start pb-[8.5px] text-lg font-semibold text-black">
            {resource?.title}
          </div>
          <div className="justify-start pb-[3.4px] text-2xl font-extrabold text-red">
            {resource?.price_sell.toLocaleString()}
          </div>
          <div className="justify-start text-base font-semibold text-gray line-through">
            {resource?.price_origin.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ButtonLayout;
