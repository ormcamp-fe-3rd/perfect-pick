import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider, { Settings } from 'react-slick';

import slide1 from '@/assets/images/home/banner1.jpg';
import slide2 from '@/assets/images/home/banner2.jpg';
import slide3 from '@/assets/images/home/banner3.jpg';
import slide4 from '@/assets/images/home/banner4.jpg';
import ArrowButton from '@/components/Home/ArrowButton';

interface SlideProps {
  settings?: Settings;
}

export default function MainSlide({ settings }: SlideProps) {
  const defaultSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: true,
    prevArrow: (
      <ArrowButton
        MainSlidePrev
        imgName="../images/home/ico-arrow-left-black.svg"
        altText="이전 메인 슬라이드 보기"
      />
    ),
    nextArrow: (
      <ArrowButton
        MainSlideNext
        imgName="../images/home/ico-arrow-right-black.svg"
        altText="다음 메인 슬라이드 보기"
      />
    ),
  };

  const combinedSettings = { ...defaultSettings, ...settings };

  return (
    <div className="slider-container overflow-hidden rounded-[30px]">
      <Slider {...combinedSettings}>
        <div>
          <img src={slide1} className="h-[640px]" alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} className="h-[640px]" alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} className="h-[640px]" alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} className="h-[640px]" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}
