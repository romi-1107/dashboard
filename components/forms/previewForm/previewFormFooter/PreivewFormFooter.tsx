import Link from "next/link";
import React from "react";
import styles from "./PreviewFormFooter.module.scss";

export function PreviewFormFooter() {
  const { previewFormFooterContainer } = styles;
  return (
    <div className={previewFormFooterContainer}>
      <Link href="/terms-conditions">Terms & Conditions</Link> <span>/</span>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </div>
  );
}
