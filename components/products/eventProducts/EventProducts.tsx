import React from "react";
import styles from "./EventProducts.module.scss";
import { EventProductItem } from "../eventProductItem/EventProductItem";

export function EventProducts({ productsData }) {
  const { productsContainer } = styles;
  return (
    <div className={productsContainer}>
      {productsData.map(({ id, img, name, originalPrice, discountedPrice }) => (
        <EventProductItem
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
