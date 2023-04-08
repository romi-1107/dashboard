import React from "react";
import styles from "./LiveProduct.module.scss";
import { LiveProductItem } from "../liveProductItem/LiveProductItem";

export function LiveProducts({
  productsData,
  productId,
  handleLiveProductItemClick,
}) {
  const { liveProductsContainer } = styles;

  return (
    <div className={liveProductsContainer}>
      {productsData.map(
        ({ id, img, name, views, originalPrice, discountedPrice }) => (
          <LiveProductItem
            key={id}
            views={views}
            id={id}
            img={img}
            name={name}
            productId={productId}
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            onLiveProductItemClick={() => handleLiveProductItemClick(id)}
          />
        )
      )}
    </div>
  );
}
