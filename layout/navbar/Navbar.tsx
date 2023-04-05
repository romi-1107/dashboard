import React from "react";
import styles from "./Navbar.module.scss";
import notificationIcon from "assets/icons/notification.svg";
import Image from "next/image";
import { TextMd } from "common/texts/textMd/TextMd";

export function Navbar({ navText }: { navText: string }) {
  const { navContainer, notificationContainer } = styles;

  return (
    <nav className={navContainer}>
      <TextMd text={navText} />
      <div className={notificationContainer}>
        <Image src={notificationIcon} alt="notificatin-icon" />
        <p>What's new?</p>
      </div>
    </nav>
  );
}
