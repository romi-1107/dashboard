import React from "react";
import styles from "./SwitchBox.module.scss";

export function SwitchBox() {
  const {
    switchBoxContainer,
    checkboxCss,
    switchCss,
    switchCircle,
    switchCircleInner,
    switchLeft,
    switchRight,
  } = styles;
  return (
    <div className={switchBoxContainer}>
      <input id="checkbox" type="checkbox" className={checkboxCss} />
      <label htmlFor="checkbox" className={switchCss}>
        <span className={switchCircle}>
          <span className={switchCircleInner}></span>
        </span>
        <span className={switchLeft}>Off</span>
        <span className={switchRight}>On</span>
      </label>
    </div>
  );
}
