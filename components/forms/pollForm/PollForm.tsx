import React from "react";
import styles from "./PollForm.module.scss";
import Image from "next/image";
import rightBlueIcon from "assets/icons/right-blue-icon.svg";

export function PollForm() {
  const { pollForm, optionContainer } = styles;

  return (
    <form className={pollForm}>
      <input type="text" placeholder="Type poll question here" />
      <div className={optionContainer}>
        <Image src={rightBlueIcon} alt="right-arrow" />
        <input type="text" placeholder="Option One" />
      </div>
      <div className={optionContainer}>
        <Image src={rightBlueIcon} alt="right-arrow" />
        <input type="text" placeholder="Option Two" />
      </div>
      <div className={optionContainer}>
        <Image src={rightBlueIcon} alt="right-arrow" />
        <input type="text" placeholder="Option Three" />
      </div>
      <div className={optionContainer}>
        <Image src={rightBlueIcon} alt="right-arrow" />
        <input type="text" placeholder="Option Four" />
      </div>
      <div className={optionContainer}>
        <Image src={rightBlueIcon} alt="right-arrow" />
        <input type="text" placeholder="Option Five" />
      </div>
    </form>
  );
}
