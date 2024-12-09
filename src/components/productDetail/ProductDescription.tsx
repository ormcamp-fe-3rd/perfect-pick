import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export default function ProductDescription() {
  const productDetailsList = [
    { name: '제조회사', value: '삼성전자' },
    { name: '등록년월', value: '2024년 01월' },
    { name: '휴대폰타입', value: '스마트폰(바형)' },
    { name: '통신망', value: '5G' },
  ];

  return (
    <>
      <TabGroup className="mb-8">
        <TabList className="mb-9 flex h-11 w-full gap-24 border-b text-2xl font-extrabold text-gray">
          <Tab className="data-[selected]:text-black">제품 설명</Tab>
          <Tab className="data-[selected]:text-black">제품 스펙</Tab>
          <Tab className="data-[selected]:text-black">상품 문의</Tab>
        </TabList>
        <TabPanels id="productDescription">
          <TabPanel className="flex w-full justify-center px-40">
            <img
              className="w-full"
              src="https://i.imgur.com/Jvh1OQmb.jpg"
              alt="image1"
            />
          </TabPanel>
          <TabPanel id="productSpecs">
            <table className="flex w-full justify-center px-40">
              <tbody className="grid w-full grid-cols-2">
                {productDetailsList.map((detail, index) => (
                  <tr
                    key={index}
                    className="flex h-9 w-full border border-gray"
                  >
                    <th className="flex w-1/3 items-center bg-[lightgray] pl-2">
                      {detail.name}
                    </th>
                    <td className="flex w-2/3 items-center border-gray pl-2">
                      {detail.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
          <TabPanel id="">상품 문의</TabPanel>
        </TabPanels>
      </TabGroup>
      <div className="flex w-full justify-center px-40"></div>
    </>
  );
}
