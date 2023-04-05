import React from "react";
import styles from "./MenuTab.module.scss";
import { useState, useEffect } from "react";

type menuTabObjProps = {
  id: number;
  menu: string;
};

type menuTabProps = {
  menuTabData: Array<menuTabObjProps>;
  handleTabMenu: (id: number) => void;
  tabMenuId: number;
};

export function MenuTab({
  menuTabData,
  handleTabMenu,
  tabMenuId,
}: menuTabProps) {
  const { menuTabContainer, divider, menuTabWrapper, singleMenu } = styles;

  const clickMenuTab = (id: number) => {
    handleTabMenu(id);
  };

  return (
    <div className={menuTabContainer}>
      {menuTabData.map(({ id, menu }) => (
        <div key={id} className={menuTabWrapper}>
          <div
            className={singleMenu}
            style={{
              color: id === tabMenuId ? "#48c9ff" : "#777777",
              fontWeight: id === tabMenuId ? "700" : "400",
            }}
            onClick={() => clickMenuTab(id)}
          >
            {menu}
          </div>
          <div
            style={{
              backgroundColor: id === tabMenuId ? "#48c9ff" : "#777777",
            }}
            className={divider}
          />
        </div>
      ))}
    </div>
  );
}
