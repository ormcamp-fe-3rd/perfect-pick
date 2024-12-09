import Slider, { Settings } from 'react-slick';

export default function BannerSlide(): JSX.Element {
  const settings: Settings = {
    dots: true,
    lazyLoad: 'ondemand', // TypeScript에서 'lazyLoad'는 문자열로 지정해야 합니다.
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/images/slide4.jpg" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}
