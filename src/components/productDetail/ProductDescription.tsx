import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export default function ProductDescription({ product }: { product: any }) {
  const productDetailImages = Object.entries(product.src_feature).map(
    ([key, value]) => ({
      src: value as string,
      alt: `image_${key}`,
    }),
  );

  const returnExchaneInfo = [
    { name: '판매자 지정택배사', value: 'CJ대한통운' },
    { name: '반품배송비', value: '편도 3,000원' },
    { name: '교환배송비', value: '6,000원' },
    {
      name: '보내실 곳',
      value: '서울특별시 금천구 가나동 디지털로 오름타워 111호',
    },
    {
      name: '반품/교환 사유에 따른 요청 가능 기간',
      value: [
        '구매자 단순 변심은 상품 수령 후 7일 이내 (구매자 반품배송비 부담)',
        '표시/광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내 (판매자 반품 배송비 부담)',
      ],
    },
    {
      name: '반품/교환 불가능 사유',
      value: [
        '반품요청기간이 지난 경우',
        '구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우(단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)',
        '구매자의 책임있는 사유로 포장이 훼손되어 상품 가치가 현저히 상실된 경우(예: 식품, 화장품, 향수류, 음반 등)',
        '구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우(라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)',
        '시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우',
        '고객의 요청사항에 맞춰 제작에 들어가는 맞춤제작상품의 경우(판매자에게 회복불가능한 손해가 예상되고, 그러한 예정으로 청약철회권 행사가 불가하다는 사실을 서면 동의 받은 경우)',
        '복제가 가능한 상품 등의 포장을 훼손한 경우(CD/DVD/GAME/도서의 경우 포장 개봉 시)',
      ],
    },
  ];

  return (
    <>
      <TabGroup className="mb-8 min-h-[800px]">
        <TabList className="mb-9 flex h-11 w-full gap-24 border-b text-2xl font-extrabold text-gray md:justify-center md:gap-10">
          <Tab className="data-[selected]:text-black">제품 설명</Tab>
          <Tab className="data-[selected]:text-black">반품/교환 정보</Tab>
        </TabList>
        <TabPanels id="productDescription">
          <TabPanel className="flex w-full flex-col items-center px-10">
            {Object.entries(productDetailImages).map(([key, value]) => (
              <img
                key={key}
                className="w-full max-w-[1080px]"
                src={value.src}
                alt={value.alt}
              />
            ))}
          </TabPanel>
          <TabPanel id="returnExchange" className="w-full">
            <div className="my-10 flex flex-col gap-5">
              <div className="text-center text-3xl">
                퍼펙트픽 반품/교환 안내
              </div>
              <div className="text-center text-2xl">
                반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비,
                반품지 주소 등을 협의하신 후 반품상품을 발송해주시기 바랍니다.
              </div>
            </div>
            <tbody className="flex w-full flex-col px-10 text-left">
              {returnExchaneInfo.map((info, index) => (
                <tr key={index} className="flex w-full border border-gray">
                  <th className="flex w-3/12 items-center bg-[#D9D9D9] py-4 pl-2">
                    {info.name}
                  </th>
                  <td className="flex w-9/12 items-center py-4 pl-2">
                    <div className="flex flex-col">
                      {Array.isArray(info.value)
                        ? info.value.map((value, i) => <li key={i}>{value}</li>)
                        : info.value}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
