import React, { useState, useEffect, Fragment } from "react";
import styles from "./Sidebar.module.scss";
import menuIcon from "assets/icons/menu.svg";
import logo from "assets/logos/logo.svg";
import Image from "next/image";
import crossBlackIcon from "assets/icons/cross-black.svg";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import Link from "next/link";
import { useRouter } from "next/router";
import shoppingIcon from "assets/icons/shop.svg";
import { useTranslation } from "next-i18next";
import { menuData } from "data/menuData";

export function Sidebar() {
  const {
    sidebarContainer,
    sidebarHeader,
    sidebarMenu,
    mobileDrawer,
    drawerOpen,
    menuBtn,
    sidebarMenuWrapper,
    menuImg,
    menuBtnContainer,
    mobileMenuContainer,
    bottomContainer,
  } = styles;

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [menuId, setMenuId] = useState<number>(0);
  const [path, setPath] = useState<string>("");
  const router = useRouter();
  const { asPath } = router;

  const { t } = useTranslation("common");

  useEffect(() => {
    getMenuId();
  }, [asPath]);

  const getMenuId = () => {
    if (asPath) {
      setPath(asPath);

      const path = asPath.split("/")[1];
      if (path.length > 0) {
        menuData.forEach(({ id, link }) => {
          if (link.includes(path)) {
            setMenuId(id);
          }
        });
      } else {
        setMenuId(1);
      }
    }
  };

  const handleMenu = () => {
    const menuId = document.getElementById("mobile-menu");
    if (menuId) {
      menuId.classList.toggle(drawerOpen);
      setOpenMenu(!openMenu);
    }
  };

  const sidebarMenuRender = () => {
    return menuData.map(({ id, link, title, icon }) => (
      <Fragment key={id}>
        <Link
          href={link}
          className={menuBtn}
          style={{ backgroundColor: menuId === id ? "#DAF4FF" : "#F6F6F6" }}
        >
          <Image src={icon} alt="icon" />
          <span>{t(title)}</span>
        </Link>
      </Fragment>
    ));
  };

  const bottomMenu = (
    <div className={bottomContainer}>
      <Link href="/">
        <div>
          <Image src={shoppingIcon} alt="shopping-icon" />
        </div>
        <span>Loerm</span>
      </Link>
      <Link href="/">
        <div>LI</div>
        <div>
          <span>Lorem Ipsum</span>
          <span>Store Owner</span>
        </div>
      </Link>
    </div>
  );

  const renderBtn = (width: string, height: string) => (
    <SolidBtn
      text="create_event"
      link="/events/create"
      width={width}
      height={height}
      bg={path.includes("/events/create") ? "#999999" : "black"}
    />
  );

  return (
    <div className={sidebarContainer}>
      <div className={sidebarHeader}>
        <Image src={logo} alt="logo" />
        <div className={menuBtnContainer}>
          <>
            {renderBtn("15rem", "4rem")}
            <Image
              src={openMenu ? crossBlackIcon : menuIcon}
              alt="menu-icon"
              onClick={handleMenu}
              className={menuImg}
            />
          </>
        </div>
      </div>
      <div className={sidebarMenu}>
        <div className={sidebarMenuWrapper}>
          <>
            {renderBtn("28rem", "5rem")}
            {sidebarMenuRender()}
          </>
        </div>
        {bottomMenu}
      </div>

      <div className={mobileDrawer} id="mobile-menu">
        <div className={mobileMenuContainer}>{sidebarMenuRender()}</div>
        <div>{bottomMenu}</div>
      </div>
    </div>
  );
}
