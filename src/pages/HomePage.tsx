import MainSlide from '@/components/Home/MainSlide';
import TabSlide from '@/components/Home/TabSlide';

function HomePage() {
  return (
    <>
      <div className="inner">
        <div className="mt-[90px]">
          <MainSlide />
        </div>
        <div>
          <TabSlide />
        </div>
      </div>
    </>
  );
}

export default HomePage;
