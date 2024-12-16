import MainSlide from '@/components/Home/MainSlide';
import TabSlide from '@/components/Home/TabSlide';

function HomePage() {
  return (
    <>
      <div className="inner">
        <div className="mt-[90px] lg:mt-[57px] md:mt-10">
          <MainSlide />
        </div>
        <div>
          <TabSlide subTitle="놓치면 안될 특가 상품" MainTitle="Hot Sale" />
        </div>
        <div>
          <TabSlide subTitle="방금 나온 신제품" MainTitle="New Arrival" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
