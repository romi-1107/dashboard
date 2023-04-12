// Types

export interface ProductType {
  id?: number;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  img: string;
}

export interface LiveEventProductsType extends ProductType {
  views: string;
  productId: number;
}
