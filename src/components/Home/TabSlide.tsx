import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import TabSlider from '@/components/Home/TabSlider';

export default function TabSlide() {
  return (
    <>
      <div className="mt-[190px]">
        <strong className="text-xl font-bold">놓치면 안될 특가 상품</strong>
        <h2 className="text-4xl font-extrabold leading-none">Hot Sale</h2>
      </div>

      <TabGroup className="mt-[30px]">
        <TabList className="flex gap-[7px]">
          <Tab className="data-[selected]:border-1 box-border h-[38px] rounded-full bg-salmon px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black">
            Mobile
          </Tab>
          <Tab className="box-border h-[38px] rounded-full bg-yellow px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black">
            Tablet
          </Tab>
          <Tab className="box-border h-[38px] rounded-full bg-pink px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black">
            Notebook
          </Tab>
          <Tab className="box-border h-[38px] rounded-full bg-skyblue px-[15px] text-center text-lg font-semibold data-[selected]:border-[1px] data-[selected]:border-solid data-[selected]:border-black">
            Wearable
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TabSlider />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel>Content 4</TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
