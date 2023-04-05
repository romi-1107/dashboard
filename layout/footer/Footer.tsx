import React from "react";
import styles from "./Footer.module.scss";
import commonStyles from "styles/Common.module.scss";
import { Bars } from "common/bars/Bars";

const { darkPinkBg, lightPinkBg } = commonStyles;

const barData = [
  { id: 1, barBg: lightPinkBg },
  { id: 2, barBg: darkPinkBg },
];

export function Footer() {
  const { copyright, footer } = styles;

  return (
    <footer className={footer}>
      <Bars barData={barData} />
      <div className={copyright}>
        <p>Jumble {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
