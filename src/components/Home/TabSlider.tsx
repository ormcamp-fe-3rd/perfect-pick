import Slider from 'react-slick';

import slide1 from '@/assets/images/home/banner1.jpg';
import slide2 from '@/assets/images/home/banner2.jpg';
import slide3 from '@/assets/images/home/banner3.jpg';
import slide4 from '@/assets/images/home/banner4.jpg';
import ArrowButton from '@/components/Home/ArrowButton';

export default function TabSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
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

  return (
    <div className="slider-container mt-[50px]">
      <Slider {...settings}>
        <div className="flex px-2 md:px-0">
          <div className="h-[450px] overflow-hidden rounded-[10px] lg:h-[400px]">
            <img src={slide1} className="h-full w-full" />
          </div>
          <div className="px-[10px] pt-[25px] [&_*]:leading-none">
            <p className="text-sm font-semibold text-gray lg:text-sm">삼성</p>
            <strong className="mb-[10px] mt-[6px] block text-lg font-semibold lg:text-lg">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red lg:text-2xl">
              896,000원
            </strong>
            <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
              946,000
            </span>
          </div>
        </div>
        <div className="flex px-2 md:px-0">
          <div className="h-[450px] overflow-hidden rounded-[10px] lg:h-[400px]">
            <img src={slide2} className="h-full w-full" />
          </div>
          <div className="px-[10px] pt-[25px] [&_*]:leading-none">
            <p className="text-sm font-semibold text-gray lg:text-sm">삼성</p>
            <strong className="mb-[10px] mt-[6px] block text-lg font-semibold lg:text-lg">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red lg:text-2xl">
              896,000원
            </strong>
            <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
              946,000
            </span>
          </div>
        </div>
        <div className="flex px-2 md:px-0">
          <div className="h-[450px] overflow-hidden rounded-[10px] lg:h-[400px]">
            <img src={slide3} className="h-full w-full" />
          </div>
          <div className="px-[10px] pt-[25px] [&_*]:leading-none">
            <p className="text-sm font-semibold text-gray lg:text-sm">삼성</p>
            <strong className="mb-[10px] mt-[6px] block text-lg font-semibold lg:text-lg">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red lg:text-2xl">
              896,000원
            </strong>
            <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
              946,000
            </span>
          </div>
        </div>
        <div className="flex px-2 md:px-0">
          <div className="h-[450px] overflow-hidden rounded-[10px] lg:h-[400px]">
            <img src={slide4} className="h-full w-full" />
          </div>
          <div className="px-[10px] pt-[25px] [&_*]:leading-none">
            <p className="text-sm font-semibold text-gray lg:text-sm">삼성</p>
            <strong className="mb-[10px] mt-[6px] block text-lg font-semibold lg:text-lg">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red lg:text-2xl">
              896,000원
            </strong>
            <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
              946,000
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
}
