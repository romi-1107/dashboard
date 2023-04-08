import React from "react";
import { ResultListItem } from "../resultListItem/ResultListItem";
import styles from "./ResultList.module.scss";

type resultListTypes = {
  pollResult;
};

export function ResultList({ pollResult }: resultListTypes) {
  const { resultListContainer } = styles;

  return (
    <div className={resultListContainer}>
      {pollResult.map(({ id, title, value }) => (
        <ResultListItem key={id} option={title} value={value} />
      ))}
    </div>
  );
}
