import { BarItem } from "common/barItem/BarItem";
import React, { Fragment } from "react";

export function Bars({ barData }) {
  return (
    <Fragment>
      {barData.map(({ id, barBg }) => (
        <BarItem key={id} barBg={barBg} />
      ))}
    </Fragment>
  );
}
