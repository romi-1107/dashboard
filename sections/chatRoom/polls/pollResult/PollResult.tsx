import React from "react";
import styles from "./PollResult.module.scss";
import { TextMd } from "common/texts/textMd/TextMd";
import crossBlueIcon from "assets/icons/cross.svg";
import Image from "next/image";
import { TextSm } from "common/texts/textSm/TextSm";
import { ResultList } from "components/lists/resultList/ResultList";
import { pollOptionTypes } from "types/pollTypes";

type pollResultTypes = {
  onCloseResult: () => void;
  pollResult: Array<pollOptionTypes>;
};

export function PollResult({ onCloseResult, pollResult }: pollResultTypes) {
  const { pollResultContainer, headingContainer, pollQuestionContainer } =
    styles;

  return (
    <div className={pollResultContainer}>
      <div className={headingContainer}>
        <TextMd text="Poll Results" color="#48C9FF" />
        <Image src={crossBlueIcon} alt="cross-icon" onClick={onCloseResult} />
      </div>
      <div className={pollQuestionContainer}>
        <TextSm text="Poll Question goes here" />
      </div>
      <ResultList pollResult={pollResult} />
    </div>
  );
}
