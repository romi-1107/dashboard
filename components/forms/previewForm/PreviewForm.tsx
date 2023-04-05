import React from "react";
import styles from "./PreviewForm.module.scss";
import galleryImage from "assets/icons/gallery-image.svg";
import Image from "next/image";
import { TextSm } from "common/texts/textSm/TextSm";
import { TextMd } from "common/texts/textMd/TextMd";
import rightArrow from "assets/icons/right-arrow.svg";
import { PreviewFormFooter } from "./previewFormFooter/PreivewFormFooter";
import product1 from "assets/products/product-1.svg";
import { TextXs } from "common/texts/textXs/TextXs";

type previewFormTypes = {
  step: number;
  clickNext: () => void;
};

export function PreviewForm({ step, clickNext }: previewFormTypes) {
  const {
    previewFormContainer,
    previewForm,
    galleryContainer,
    timeContainer,
    arrowBox,
    messageInputContainer,
    previewFormWrapper,
  } = styles;
  return (
    <div className={previewFormWrapper}>
      <div className={previewFormContainer}>
        {step === 1 && (
          <div className={previewForm}>
            <div />
            <div className={galleryContainer}>
              <Image src={galleryImage} alt="gallery" />
              <TextSm text="Upload Your Banner" color="#555555" />
              <div className={timeContainer}>
                <TextMd text="Thursday, 20 May 2021" />
                <TextMd text="07:00 PM" />
              </div>
              <div className={arrowBox} onClick={clickNext}>
                <Image src={rightArrow} alt="arrow" />
              </div>
            </div>
            <PreviewFormFooter />
          </div>
        )}
        {step === 2 && (
          <div className={previewForm}>
            <div />
            <div className={galleryContainer}>
              <Image src={product1} alt="gallery" />
              <div className={timeContainer}>
                <TextMd text="Welcome to the Live" />
                <TextXs text="Connecting to the chat room ..." />
              </div>
            </div>
            <div className={messageInputContainer}>
              <input type="text" placeholder="Type a message" />
              <div className={arrowBox}>
                <Image src={rightArrow} alt="arrow" />
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className={previewForm}>
            <div />
            <div className={galleryContainer}>
              <Image src={galleryImage} alt="gallery" />
              <div className={timeContainer}>
                <TextMd text="Thank you for joining us tonight! As a gift, use coupon code MIDNIGHT20 to get 20% off on your next order, valid until midnight!" />
              </div>
              <div className={arrowBox} onClick={clickNext}>
                <Image src={rightArrow} alt="arrow" />
              </div>
            </div>
            <PreviewFormFooter />
          </div>
        )}
      </div>
    </div>
  );
}
