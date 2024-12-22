export interface UserData {
  username: string | null;
  email: string | null;
  id: string;
}

export interface Product {
  id: number | string;
  title: string;
  brand: string;
  category_id: string;
  isNew?: boolean;
  isSale?: boolean;
  opt_color?: Record<string, number>;
  opt_storage?: Record<string, number>;
  opt_field?: Record<string, number>;
  price_dis_rate?: string;
  price_origin?: number;
  price_sell: number;
  price_delivery?: number;
  src: Record<number | string, string>;
  src_feature: Record<number | string, string>;
}

export interface CartItemData {
  product_title: string;
  product_id: string | number;
  option: Record<string, string>;
  amount: number;
  price: {
    productPrice: number;
    accessoriesPrice?: number;
    deliveryFee?: number;
  };
  user_id: string | undefined;
  thumbnail: string;
}
