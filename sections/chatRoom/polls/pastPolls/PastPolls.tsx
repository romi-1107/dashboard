import { TextXs } from "common/texts/textXs/TextXs";
import React from "react";
import { pollTypes } from "types/pollTypes";
import styles from "./PastPolls.module.scss";
import { useTranslation } from "next-i18next";

type pastPollTypes = {
  clickPollResult: (id: number) => void;
  pollsData: Array<pollTypes>;
};

export function PastPolls({ pollsData, clickPollResult }: pastPollTypes) {
  const { pastPollsContainer, pollQuestion, resultContainer } = styles;
  const { t } = useTranslation("chat-room");
  return (
    <div>
      {pollsData.map(({ id, title }) => (
        <div className={pastPollsContainer} key={id}>
          <div className={pollQuestion}>
            <TextXs text={title} fontWeight="500" />
          </div>
          <div className={resultContainer} onClick={() => clickPollResult(id)}>
            <TextXs text={t("see_result")} />
          </div>
        </div>
      ))}
    </div>
  );
}
