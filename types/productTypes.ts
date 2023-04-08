// Types

export interface productType {
  id?: number;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  img: string;
}

export interface liveEventProductsType extends productType {
  views: string;
  productId: number;
}
