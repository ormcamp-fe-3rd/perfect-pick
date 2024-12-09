import Slider from 'react-slick';

import slide1 from '@/assets/images/home/banner1.jpg';
import slide2 from '@/assets/images/home/banner2.jpg';
import slide3 from '@/assets/images/home/banner3.jpg';
import slide4 from '@/assets/images/home/banner4.jpg';
import ArrowButton from '@/components/Home/ArrowButton';

function LazyLoad() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    prevArrow: (
      <ArrowButton
        MainSlidePrev
        imgName="../images/home/ico-arrow-left-black.svg"
        altText="이전 슬라이드 보기"
      />
    ),
    nextArrow: (
      <ArrowButton
        MainSlideNext
        imgName="../images/home/ico-arrow-right-black.svg"
        altText="다음 슬라이드 보기"
      />
    ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="h-[450px] w-[335px] overflow-hidden rounded-[10px]">
            <img src={slide1} className="h-full w-full" />
          </div>

          <div className="[&_*]:leading-none">
            <p className="text-sm font-semibold text-gray">삼성</p>
            <strong className="block text-lg font-semibold">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red">
              896,000원
            </strong>
            <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
              946,000
            </span>
          </div>
        </div>
        <div>
          <div className="h-[450px] w-[335px] overflow-hidden rounded-[10px]">
            <img src={slide2} className="h-full w-full" />
          </div>

          <div className="[&_*]:leading-none">
            <p className="text-sm font-semibold text-gray">삼성</p>
            <strong className="block text-lg font-semibold">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red">
              896,000원
            </strong>
            <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
              946,000
            </span>
          </div>
        </div>
        <div>
          <div className="h-[450px] w-[335px] overflow-hidden rounded-[10px]">
            <img src={slide3} className="h-full w-full" />
          </div>

          <div className="[&_*]:leading-none">
            <p className="text-sm font-semibold text-gray">삼성</p>
            <strong className="block text-lg font-semibold">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red">
              896,000원
            </strong>
            <span className="relative font-semibold text-gray after:absolute after:left-0 after:top-1/2 after:h-[2px] after:w-full after:-translate-y-1/2 after:bg-gray">
              946,000
            </span>
          </div>
        </div>
        <div>
          <div className="h-[450px] w-[335px] overflow-hidden rounded-[10px]">
            <img src={slide4} className="h-full w-full" />
          </div>

          <div className="[&_*]:leading-none">
            <p className="text-sm font-semibold text-gray">삼성</p>
            <strong className="block text-lg font-semibold">
              갤럭시 S24 FE 자급제
            </strong>
            <strong className="block text-2xl font-extrabold text-red">
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

export default LazyLoad;
