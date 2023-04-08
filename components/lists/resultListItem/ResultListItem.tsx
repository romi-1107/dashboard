import React from "react";
import styles from "./ResultListItem.module.scss";
import rightBlueIcon from "assets/icons/right-blue-icon.svg";
import Image from "next/image";
import { TextSm } from "common/texts/textSm/TextSm";
import { TextXs } from "common/texts/textXs/TextXs";

type resultListItem = {
  option: string;
  value: string;
};

export function ResultListItem({ option, value }: resultListItem) {
  const { resultListItem, optionContainer } = styles;

  return (
    <div className={resultListItem}>
      <div className={optionContainer}>
        <Image src={rightBlueIcon} alt="cross-icon" />
        <TextSm text={option} color="#48C9FF" />
      </div>
      <TextXs text={value} color="#48C9FF" />
    </div>
  );
}
