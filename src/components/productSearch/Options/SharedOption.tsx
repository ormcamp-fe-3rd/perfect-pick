import { useState } from 'react';

import { CategoryData } from '../../../constants/optionsData.ts';

export const SharedOption = (
  type: string,
  typedOptionsData: Record<string, CategoryData>,
) => {
  const categoryData: CategoryData = typedOptionsData[type];
  const categories = categoryData.categories;
  const data = categoryData.data;

  const optionType = ['brand', 'opt_storage', 'size', 'date', 'featue'];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOptionCategory, setselectedOptionCategory] = useState<
    string[]
  >([]);
  const [firstPrice, setFirstPrice] = useState<number>(0);
  const [secondPrice, setSecondPrice] = useState<number>(0);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const handleItemClick = (item: string, type: string) => {
    setSelectedOptions((prevState) => {
      if (prevState.includes(item)) {
        return prevState.filter((i) => i !== item);
      } else {
        return [...prevState, item];
      }
    });

    setselectedOptionCategory((prevState) => {
      if (prevState.includes(type)) {
        return prevState.filter((t) => t !== type);
      } else {
        return [...prevState, type];
      }
    });
  };

  const handlePriceChange = (price: string, type: 'first' | 'second') => {
    const parsedPrice = parseFloat(price);
    if (!isNaN(parsedPrice)) {
      if (type === 'first') {
        setFirstPrice(parsedPrice);
      } else {
        setSecondPrice(parsedPrice);
      }
    }
  };

  const handleTitleChange = (title: string) => {
    setSelectedTitle(title);
  };

  return {
    categories,
    data,
    optionType,
    selectedOptions,
    selectedOptionCategory,
    firstPrice,
    secondPrice,
    selectedTitle,
    handleItemClick,
    handlePriceChange,
    handleTitleChange,
  };
};
