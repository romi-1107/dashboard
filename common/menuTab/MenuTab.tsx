import React from "react";
import styles from "./MenuTab.module.scss";
import { useTranslation } from "next-i18next";
import { MenuTabProps } from "types/menuTabProps";

export function MenuTab({
  menuTabData,
  handleTabMenu,
  tabMenuId,
}: MenuTabProps) {
  const { menuTabContainer, divider, menuTabWrapper, singleMenu } = styles;

  const clickMenuTab = (id: number) => {
    handleTabMenu(id);
  };

  const { t } = useTranslation("common");

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
            {t(menu)}
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
