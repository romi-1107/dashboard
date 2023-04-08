import React from "react";
import styles from "./LiveProductItem.module.scss";
import Image from "next/image";
import { TextSm } from "common/texts/textSm/TextSm";
import eyeIcon from "assets/icons/eye.svg";
import { liveEventProductsType } from "types/productTypes";

interface productItemTypes extends liveEventProductsType {
  onLiveProductItemClick: () => void;
}

export function LiveProductItem({
  id,
  img,
  name,
  views,
  productId,
  originalPrice,
  discountedPrice,
  onLiveProductItemClick,
}: productItemTypes) {
  const { liveProductItemContainer, price, watchContainer } = styles;

  return (
    <div
      className={liveProductItemContainer}
      onClick={onLiveProductItemClick}
      style={{ backgroundColor: productId === id ? "#DAF4FF" : "#f6f6f6" }}
    >
      <div className={watchContainer}>
        {productId === id && (
          <>
            <Image src={eyeIcon} alt="watch-icon" />
            <TextSm text={views} />
          </>
        )}
      </div>
      <Image src={img} alt="product-1" />
      <TextSm text={name} />
      <p className={price}>$ {originalPrice}</p>
      <TextSm text={`$ ${discountedPrice}`} />
    </div>
  );
}
