import { ProductItem } from "components/productItem/ProductItem";
import React from "react";
import styles from "./Products.module.scss";
import product1 from "assets/products/product-1.svg";
import product2 from "assets/products/product-2.svg";
import product3 from "assets/products/product-3.svg";

const productsData = [
  {
    id: 1,
    img: product1,
    name: "Product Name",
    originalPrice: "20",
    discountedPrice: "15",
  },
  {
    id: 2,
    img: product2,
    name: "Product Name",
    originalPrice: "25",
    discountedPrice: "20",
  },
  {
    id: 3,
    img: product3,
    name: "Product Name",
    originalPrice: "30",
    discountedPrice: "25",
  },
];

export function Products() {
  const { productsContainer } = styles;
  return (
    <div className={productsContainer}>
      {productsData.map(({ id, img, name, originalPrice, discountedPrice }) => (
        <ProductItem
          key={id}
          img={img}
          name={name}
          originalPrice={originalPrice}
          discountedPrice={discountedPrice}
        />
      ))}
    </div>
  );
}
