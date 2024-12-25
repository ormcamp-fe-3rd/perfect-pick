import optionsData from './optionsData.json';

export const mobileCategories = optionsData.mobile.categories;
export const mobileData = optionsData.mobile.data;

export const tabletCategories = optionsData.tablet.categories;
export const tabletData = optionsData.tablet.data;

export const wearableCategories = optionsData.wearable.categories;
export const wearableData = optionsData.wearable.data;

export const notebookCategories = optionsData.notebook.categories;
export const notebookData = optionsData.notebook.data;

export interface CategoryData {
  categories: string[];
  data: string[][];
}

export interface OptionsData {
  mobile: CategoryData;
  tablet: CategoryData;
  wearable: CategoryData;
  notebook: CategoryData;
}

export const defaultOptionType = [
  'brand',
  'opt_storage',
  'size',
  'release',
  'feature',
];
export const wearableoptionType = [
  'brand',
  'opt_storage',
  'release',
  'watch',
  'earphone',
];
