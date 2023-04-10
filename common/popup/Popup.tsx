import React from "react";
import styles from "./Popup.module.scss";
import whiteCrossIcon from "assets/icons/white-cross.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

type popupTypes = {
  message: string;
  onClose: () => void;
};

export function Popup({ message, onClose }: popupTypes) {
  const { popupContainer } = styles;
  const { t } = useTranslation("modal");

  return (
    <div className={popupContainer}>
      <p> {t(message)} </p>
      <Image src={whiteCrossIcon} alt="close-icon" onClick={onClose} />
    </div>
  );
}
