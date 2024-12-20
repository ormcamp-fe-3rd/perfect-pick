export interface Product {
  id?: number | string;
  title?: string;
  brand?: string;
  category_id?: string;
  isNew?: boolean;
  isSale?: boolean;
  opt_color?: Record<string, number>;
  opt_storage?: Record<string, number>;
  price_dis_rate?: string;
  price_origin?: number;
  price_sell?: number;
  src?: Record<number | string, string>;
  src_feature?: Record<number | string, string>;
}
