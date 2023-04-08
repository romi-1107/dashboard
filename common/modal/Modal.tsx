import React from "react";
import styles from "./Modal.module.scss";

export function Modal({ children }: { children: JSX.Element }) {
  const { modalContainer, modal, modalContent } = styles;
  return (
    <div className={modalContainer}>
      <div className={modal}>
        <div className={modalContent}>{children}</div>
      </div>
    </div>
  );
}
