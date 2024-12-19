import Slider from 'react-slick';
import ArrowButton from '@/components/Home/ArrowButton';

interface Product {
  id: number | string;
  title: string;
  brand: string;
  category_id: string;
  isNew: boolean;
  isSale: boolean;
  opt_color: Record<string, number>;
  opt_storage: Record<string, number>;
  price_dis_rate: string;
  price_origin: number;
  price_sell: number;
  src: Record<number | string, string>;
  src_feature: Record<number | string, string>;
}
interface TabSliderProps {
  products: Product[];
}

export default function TabSlider({ products }: TabSliderProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: (
      <ArrowButton
        TabSlidePrev
        imgName="../images/home/ico-arrow-left-white.svg"
        altText="이전 슬라이드 보기"
      />
    ),
    nextArrow: (
      <ArrowButton
        TabSlideNext
        imgName="../images/home/ico-arrow-right-white.svg"
        altText="다음 슬라이드 보기"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  // 데이터가 4개 미만이면 복제
  const slides = [
    ...products,
    ...Array.from(
      { length: Math.max(0, 4 - products.length) },
      (_, i) => products[(products.length + i) % products.length],
    ),
  ];

  return (
    <div className="slider-container mt-[50px]">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="flex px-2 md:px-0">
            <div className="h-[450px] overflow-hidden rounded-[10px] lg:h-[400px]">
              <img src={item.src[1]} className="h-full w-full object-cover" />
            </div>
            <div className="px-[10px] pt-[25px] [&_*]:leading-none">
              <p className="text-sm font-semibold text-gray lg:text-sm">
                {item.brand}
              </p>
              <strong className="mb-[10px] mt-[6px] block text-lg font-semibold lg:text-lg">
                {item.title}
              </strong>
              <strong className="block text-2xl font-extrabold text-red lg:text-2xl">
                {item.price_sell.toLocaleString()}원
              </strong>
              <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
                {item.price_origin.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
