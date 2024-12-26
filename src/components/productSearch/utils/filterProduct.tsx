import { DocumentData } from '@firebase/firestore';

export const filterProducts = (
  products: DocumentData[],
  firstPrice: number | null,
  secondPrice: number | null,
  selectedTitle: string | undefined,
  selectedOptionCategory: string[],
  selectedItems: string[],
  categoryId: string,
) => {
  return products.filter((product) => {
    // 필드를 명시적으로 추출하여 사용
    const {
      category_id,
      price_sell,
      title,
      brand,
      opt_storage,
      size,
      release,
      feature,
      watch,
      earphone,
    } = product;

    // 모바일 카테고리만 필터링
    if (category_id !== categoryId) return false;

    // 가격 필터링
    if (
      (firstPrice && price_sell < firstPrice) ||
      (secondPrice && price_sell > secondPrice)
    ) {
      return false;
    }

    // 제목 필터링
    if (selectedTitle && !title.includes(selectedTitle)) {
      return false;
    }

    // 카테고리 필터링
    if (
      !selectedOptionCategory.every((category, index) => {
        const selectedItem = selectedItems[index];

        if (category === 'brand') {
          return brand === selectedItem;
        }
        if (category === 'opt_storage') {
          return opt_storage && opt_storage[selectedItem] !== undefined;
        }
        if (category === 'size') {
          return size === selectedItem;
        }
        if (category === 'release') {
          return release === selectedItem;
        }
        if (category === 'feature') {
          return feature && feature[selectedItem] !== undefined;
        }
        if (category === 'watch') {
          return watch && watch[selectedItem] !== undefined;
        }
        if (category === 'earphone') {
          return earphone && earphone[selectedItem] !== undefined;
        }

        return true; // 기본적으로 다른 카테고리는 true를 반환
      })
    ) {
      return false;
    }

    return true;
  });
};
