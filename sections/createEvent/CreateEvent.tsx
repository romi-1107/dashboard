import React, { useState } from "react";
import styles from "./CreateEvent.module.scss";
import { DashboardLayout } from "layout/dashboardLayout/DashboardLayout";
import rightArrowFillIcon from "assets/icons/right-arrow-fill.svg";
import rightArrowBlueIcon from "assets/icons/right-arrow-blue.svg";
import { EventForm } from "components/forms/eventForm/EventForm";
import { PreviewForm } from "components/forms/previewForm/PreviewForm";
import { EventModalContent } from "components/contents/eventModalContet/EventModalContent";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import rightArrowIcon from "assets/icons/left-arrow.svg";
import { TextSm } from "common/texts/textSm/TextSm";
import { TextXl } from "common/texts/textXl/TextXl";
import { MenuTab } from "common/menuTab/MenuTab";
import { Popup } from "common/popup/Popup";
import { useTranslation } from "next-i18next";
import { Modal } from "common/modal/Modal";
import Image from "next/image";
import { setupData, previewData } from "data/eventsData";
import { HeaderLayout } from "layout/headerLayout/HeaderLayout";

export function CreateEvent() {
  const {
    mainContainer,
    setupCard,
    setupContainer,
    previewContainer,
    nextPrevContainer,
    createBtnContainer,
  } = styles;

  const { t } = useTranslation("event");

  const [setupTabMenuId, setSetupTabMenuId] = useState<number>(1);
  const [previewTabMenuId, setPreviewTabMenuId] = useState<number>(1);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const setupTabMenuHandler = (id: number) => {
    setSetupTabMenuId(id);
  };
  const previewTabMenuHandler = (id: number) => {
    setPreviewTabMenuId(id);
  };

  const clickNextPreview = () => {
    setPreviewTabMenuId(previewTabMenuId + 1);
  };

  const prevStepHandler = () => {
    setSetupTabMenuId(setupTabMenuId - 1);
  };
  const nextStepHandler = () => {
    setSetupTabMenuId(setupTabMenuId + 1);
  };
  const onClosePopup = () => {
    setOpenPopup(false);
  };
  const handlePopupClick = () => {
    setOpenPopup(true);
  };

  return (
    <section>
      <DashboardLayout navText={t("events")}>
        <div className={mainContainer}>
          <HeaderLayout>
            <>
              <Image src={rightArrowFillIcon} alt="arrow" />
              <TextSm text={t("event_guide")} />
              <div className={createBtnContainer} onClick={handlePopupClick}>
                <SolidBtn
                  text={t("create_event")}
                  link="/events/create"
                  width="18rem"
                  height="5rem"
                  bg="#999999"
                />
              </div>
            </>
          </HeaderLayout>

          <div className={setupContainer}>
            <div className={setupCard}>
              <MenuTab
                menuTabData={setupData}
                handleTabMenu={setupTabMenuHandler}
                tabMenuId={setupTabMenuId}
              />
              <TextXl text={t("setup_steps")} />
              <EventForm step={setupTabMenuId} />
              <div className={nextPrevContainer}>
                {setupTabMenuId === 3 || setupTabMenuId === 2 ? (
                  <div onClick={prevStepHandler}>
                    <Image src={rightArrowIcon} alt="icon" />
                    <TextSm text="Previous" />
                  </div>
                ) : (
                  <div />
                )}
                {setupTabMenuId !== 3 && (
                  <div onClick={nextStepHandler}>
                    <TextSm text="Next" color="#48c9ff" />
                    <Image src={rightArrowBlueIcon} alt="icon" />
                  </div>
                )}
              </div>
            </div>
            <div className={previewContainer}>
              <TextXl text={t("preview")} />
              <MenuTab
                menuTabData={previewData}
                handleTabMenu={previewTabMenuHandler}
                tabMenuId={previewTabMenuId}
              />
              <PreviewForm
                step={previewTabMenuId}
                clickNext={clickNextPreview}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
      {openPopup && (
        <>
          <Popup message="created_successfully" onClose={onClosePopup} />
          <Modal>
            <EventModalContent />
          </Modal>
        </>
      )}
    </section>
  );
}
