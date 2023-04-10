import { TextLg } from "common/texts/textLg/TextLg";
import React, { useState, useEffect } from "react";
import styles from "./Polls.module.scss";
import Image from "next/image";
import pollsFrame from "assets/icons/poll.svg";
import { TextSm } from "common/texts/textSm/TextSm";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import { PastPolls } from "./pastPolls/PastPolls";
import { PollForm } from "components/forms/pollForm/PollForm";
import { PollResult } from "./pollResult/PollResult";
import { pastPollsData } from "data/pollData";
import { pollTypes, pollOptionTypes } from "types/pollTypes";
import { useTranslation } from "next-i18next";

export function Polls() {
  const {
    pollsContainer,
    createPollsContainer,
    pastPollsContainer,
    createBtnWrapper,
  } = styles;
  const { t } = useTranslation("chat-room");

  const [createPoll, setCreatePoll] = useState<boolean>(false);
  const [pollId, setPollId] = useState<number>(0);
  const [pollResult, setPollResult] = useState<pollOptionTypes[]>([]);

  useEffect(() => {
    filterPollData();
  }, [pollId]);

  const handleBtnClick = () => {
    setCreatePoll(true);
    setPollResult([]);
  };

  const pollResultHandler = (id: number) => {
    setPollId(id);
  };

  const filterPollData = () => {
    pastPollsData?.forEach((poll: pollTypes) => {
      if (poll.id === pollId) {
        setPollResult(poll.options);
      }
    });
  };

  const closeResultHandler = () => {
    setPollResult([]);
  };

  const createBtn = (
    <SolidBtn
      width="16rem"
      height="5rem"
      text="create_poll"
      bg="black"
      onClickSolidBtn={handleBtnClick}
    />
  );

  return (
    <div className={pollsContainer}>
      <TextLg text={createPoll ? t("create_poll") : t("upcoming_polls")} />
      {pollResult.length ? (
        <>
          <PollResult
            onCloseResult={closeResultHandler}
            pollResult={pollResult}
          />
          <div className={createBtnWrapper}>{createBtn}</div>
        </>
      ) : (
        <div className={createPollsContainer}>
          {createPoll ? (
            <PollForm />
          ) : (
            <>
              <Image src={pollsFrame} alt="polls" />
              <TextSm text={t("no_poll")} fontWeight="500" />
            </>
          )}
          {createBtn}
        </div>
      )}
      <div className={pastPollsContainer}>
        <TextLg text={t("past_polls")} />
        <PastPolls
          pollsData={pastPollsData}
          clickPollResult={pollResultHandler}
        />
      </div>
    </div>
  );
}
