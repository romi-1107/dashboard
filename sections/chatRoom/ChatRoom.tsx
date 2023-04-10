import React, { useState, useEffect } from "react";
import styles from "./ChatRoom.module.scss";
import { DashboardLayout } from "layout/dashboardLayout/DashboardLayout";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import leftArrowIcon from "assets/icons/left-arrow.svg";
import Link from "next/link";
import { TextSm } from "common/texts/textSm/TextSm";
import { OutlineBtn } from "common/buttons/outlineBtn/OutlineBtn";
import editIcon from "assets/icons/edit.svg";
import { EventTag } from "common/tags/eventTag/EventTag";
import { TextLg } from "common/texts/textLg/TextLg";
import copyIcon from "assets/icons/copy.svg";
import viewerIcon from "assets/icons/viewers.svg";
import likeIcon from "assets/icons/likes.svg";
import productViewIcon from "assets/icons/product-view.svg";
import ordersIcon from "assets/icons/orders.svg";
import pic from "assets/pics/pic.svg";
import { MenuTab } from "common/menuTab/MenuTab";
import { Chat } from "./chat/Chat";
import { Polls } from "./polls/Polls";
import { LiveProducts } from "components/products/liveProducts/LiveProduct";
import product1 from "assets/products/product-1.svg";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import whiteEyeIcon from "assets/icons/white-eye.svg";
import { Modal } from "common/modal/Modal";
import { ChatRoomModalContent } from "components/contents/chatRoomModalContent/ChatRoomModalContent";
import { productsData } from "data/productData";

const tabMenuData = [
  { id: 1, menu: "chat" },
  { id: 2, menu: "polls" },
  { id: 3, menu: "products" },
];

const statusData = [
  { id: 1, title: "viewers", icon: viewerIcon, value: "-" },
  { id: 2, title: "likes", icon: likeIcon, value: "-" },
  { id: 3, title: "product_views", icon: productViewIcon, value: "-" },
  { id: 4, title: "orders", icon: ordersIcon, value: "-" },
];

export function ChatRoom() {
  const {
    mainContainer,
    headingContainer,
    headingWrapper,
    eventInfoContainer,
    logoContainer,
    logoBox,
    eventInfo,
    linkContainer,
    statsContainer,
    statusContainer,
    actionContainer,
    imgContainer,
    menuWrapper,
    menuContainer,
    prodcutImgContainer,
    btnGroup,
  } = styles;

  const { t } = useTranslation("chat-room");
  const [tabMenuId, setTabMenuId] = useState<number>(1);
  const [productId, setProductId] = useState<number>(1);
  const [productImg, setProductImg] = useState<string>(product1);
  const [previewEvent, setPreviewEvent] = useState<boolean>(false);

  useEffect(() => {
    filterProducts();
  }, [productId]);

  const filterProducts = () => {
    productsData.forEach(({ id, img }) => {
      if (productId === id) {
        setProductImg(img);
      }
    });
  };

  const tabMenuHandler = (id: number) => {
    setTabMenuId(id);
  };

  const handleLiveProductItemClick = (id: number) => {
    setProductId(id);
  };

  const previewEventHandler = () => {
    setPreviewEvent(true);
  };
  const closeModalHandler = () => {
    setPreviewEvent(false);
  };

  return (
    <section>
      <DashboardLayout navText={t("chat_room")}>
        <div className={mainContainer}>
          <div className={headingWrapper}>
            <div className={headingContainer}>
              <Link href="/events">
                <Image src={leftArrowIcon} alt="arrow" />
                <TextSm text={t("go_back_events")} />
              </Link>
            </div>
            <div className={btnGroup}>
              <SolidBtn
                width="18rem"
                height="5rem"
                text={t("preview_event")}
                icon={whiteEyeIcon}
                bg="#48C9FF"
                onClickSolidBtn={previewEventHandler}
              />
              <OutlineBtn
                width="18rem"
                height="5rem"
                text={t("public_link")}
                icon={editIcon}
              />
            </div>
          </div>

          <div className={eventInfoContainer}>
            <div>
              <EventTag />
              <div className={logoContainer}>
                <div className={logoBox}>
                  <p>Logo</p>
                </div>
                <div className={eventInfo}>
                  <TextSm text="Date" color="#777777" fontWeight="400" />
                  <TextLg text="Friday, May 20, 2021" />
                  <TextSm text="at 5:30 PM" color="#777777" fontWeight="400" />
                </div>
              </div>
            </div>
            <div>
              <div className={eventInfo}>
                <TextSm text={t("event")} color="#777777" fontWeight="400" />
                <TextLg text="Shahin’s Event" />
                <div className={linkContainer}>
                  <Image src={copyIcon} alt="copy-icon" />
                  <Link href="http://www.jumble.tv/summer_live">
                    http://www.jumble.tv/summer_live
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className={eventInfo}>
                <TextSm text="Note" color="#777777" fontWeight="400" />
                <TextSm
                  text="Nisl at vel egestas posuere tristique. Sagittis orci elementum non mus mattis pellentesque. Sed cras euismod ut ut vitae sagittis."
                  color="#777777"
                  fontWeight="400"
                />
              </div>
            </div>
          </div>

          <div className={statsContainer}>
            <div>
              <div className={statusContainer}>
                {statusData.map(({ id, title, icon, value }) => (
                  <div key={id}>
                    <Image src={icon} alt="icon" />
                    <div>{value}</div>
                    <TextSm text={t(title)} fontWeight="500" />
                  </div>
                ))}
                <div>
                  <TextSm text="CAD" fontWeight="500" />
                  <div>-</div>
                  <TextSm text={t("sales")} fontWeight="500" />
                </div>
              </div>
              <div className={imgContainer}>
                {tabMenuId === 3 && (
                  <div className={prodcutImgContainer}>
                    <Image src={productImg} alt="product-img" />
                  </div>
                )}
                <Image src={pic} alt="pic" />
              </div>
            </div>
            <div className={actionContainer}>
              <div className={menuWrapper}>
                <div className={menuContainer}>
                  <MenuTab
                    menuTabData={tabMenuData}
                    handleTabMenu={tabMenuHandler}
                    tabMenuId={tabMenuId}
                  />
                </div>
              </div>

              {tabMenuId === 1 && <Chat />}
              {tabMenuId === 2 && <Polls />}
              {tabMenuId === 3 && (
                <LiveProducts
                  productsData={productsData}
                  productId={productId}
                  handleLiveProductItemClick={handleLiveProductItemClick}
                />
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
      {previewEvent && (
        <Modal>
          <ChatRoomModalContent onCloseModal={closeModalHandler} />
        </Modal>
      )}
    </section>
  );
}
