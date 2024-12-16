import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import TabSlider from '@/components/Home/TabSlider';

interface TabSlideProps {
  subTitle: string;
  MainTitle: string;
}

export default function TabSlide({ subTitle, MainTitle }: TabSlideProps) {
  return (
    <>
      <div className="mt-[190px] lg:mt-[60px]">
        <strong className="text-xl font-bold lg:text-sm">{subTitle}</strong>
        <h2 className="text-4xl font-extrabold leading-none lg:text-[40px]">
          {MainTitle}
        </h2>
      </div>

      <TabGroup className="mt-[30px]">
        <TabList className="flex gap-[7px] md:gap-0">
          <Tab className="data-[selected]:border-1 box-border h-[38px] rounded-full bg-salmon px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black md:w-1/4 md:px-1 md:text-[15px]">
            Mobile
          </Tab>
          <Tab className="box-border h-[38px] rounded-full bg-yellow px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black md:w-1/4 md:px-1 md:text-[15px]">
            Tablet
          </Tab>
          <Tab className="box-border h-[38px] rounded-full bg-pink px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black md:w-1/4 md:px-1 md:text-[15px]">
            Notebook
          </Tab>
          <Tab className="box-border h-[38px] rounded-full bg-skyblue px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black md:w-1/4 md:px-1 md:text-[15px]">
            Wearable
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TabSlider />
          </TabPanel>
          <TabPanel>
            <p>2</p>
            <TabSlider />
          </TabPanel>
          <TabPanel>
            <p>3</p>
            <TabSlider />
          </TabPanel>
          <TabPanel>
            <p>4</p>
            <TabSlider />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
