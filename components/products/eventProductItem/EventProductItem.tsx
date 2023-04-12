import React from "react";
import styles from "./EventProductItem.module.scss";
import Image from "next/image";
import { TextSm } from "common/texts/textSm/TextSm";
import { ProductType } from "types/productTypes";

export function EventProductItem({
  img,
  name,
  originalPrice,
  discountedPrice,
}: ProductType) {
  const { productItemContainer, price } = styles;
  return (
    <div className={productItemContainer}>
      <Image src={img} alt="product-1" />
      <TextSm text={name} />
      <p className={price}>$ {originalPrice}</p>
      <TextSm text={`$ ${discountedPrice}`} />
    </div>
  );
}
