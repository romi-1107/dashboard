import React from "react";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import { TextSm } from "common/texts/textSm/TextSm";

type productItemTypes = {
  img: string;
  name: string;
  originalPrice: string;
  discountedPrice: string;
};

export function ProductItem({
  img,
  name,
  originalPrice,
  discountedPrice,
}: productItemTypes) {
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
