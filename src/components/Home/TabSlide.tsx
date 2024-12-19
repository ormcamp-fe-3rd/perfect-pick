import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useState, useEffect } from 'react';

import TabSlider from '@/components/Home/TabSlider';

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
interface TabSlideProps {
  subTitle: string;
  mainTitle: string;
  products: Product[];
}

export default function TabSlide({
  subTitle,
  mainTitle,
  products,
}: TabSlideProps) {
  const [mobileOnSale, setMobileOnSale] = useState<Product[]>([]);
  const [tabletOnSale, setTabletOnSale] = useState<Product[]>([]);
  const [notebookOnSale, setNotebookOnSale] = useState<Product[]>([]);
  const [wearableOnSale, setWearableOnSale] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryFilteredProducts = async () => {
      const mobileItems = products.filter(
        (product: Product) => product.category_id === 'mobile',
      );
      setMobileOnSale(mobileItems);

      const tabletItems = products.filter(
        (product: Product) => product.category_id === 'tablet',
      );
      setTabletOnSale(tabletItems);

      const notebookItems = products.filter(
        (product: Product) => product.category_id === 'notebook',
      );
      setNotebookOnSale(notebookItems);

      const wearableItems = products.filter(
        (product: Product) => product.category_id === 'wearable',
      );
      setWearableOnSale(wearableItems);

      setLoading(false);
    };

    categoryFilteredProducts();
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-[190px] lg:mt-[60px]">
        <strong className="text-xl font-bold lg:text-sm">{subTitle}</strong>
        <h2 className="text-4xl font-extrabold leading-none lg:text-[40px]">
          {mainTitle}
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
            <TabSlider products={mobileOnSale} />
          </TabPanel>
          <TabPanel>
            <TabSlider products={tabletOnSale} />
          </TabPanel>
          <TabPanel>
            <TabSlider products={notebookOnSale} />
          </TabPanel>
          <TabPanel>
            <TabSlider products={wearableOnSale} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
