import { Product } from '@/types';

export const calculateSelectedPrice = (
  product: Product,
  selectedOptions: Record<string, string>,
  optionalPrices: Record<string, Record<string, number>>,
) => {
  const total = Object.keys(selectedOptions).reduce((acc, key) => {
    if (selectedOptions[key]) {
      acc += optionalPrices[key][selectedOptions[key]];
    }
    return acc;
  }, product.price_sell);

  return total;
};
