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

export function Polls() {
  const {
    pollsContainer,
    createPollsContainer,
    pastPollsContainer,
    createBtnWrapper,
  } = styles;

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
      height="4rem"
      text="+Create Poll"
      bg="black"
      onClickSolidBtn={handleBtnClick}
    />
  );

  return (
    <div className={pollsContainer}>
      <TextLg text={createPoll ? "Create Poll" : "Upcoming Polls"} />
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
              <TextSm
                text="You didn’t created any poll for this event, yet."
                fontWeight="500"
              />
            </>
          )}
          {createBtn}
        </div>
      )}
      <div className={pastPollsContainer}>
        <TextLg text="Past Polls" />
        <PastPolls
          pollsData={pastPollsData}
          clickPollResult={pollResultHandler}
        />
      </div>
    </div>
  );
}
