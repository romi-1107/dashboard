import React, { useState } from "react";
import styles from "./CreateEvent.module.scss";
import { DashboardLayout } from "layout/dashboardLayout/DashboardLayout";
import Image from "next/image";
import leftArrowIcon from "assets/icons/left-arrow.svg";
import { TextSm } from "common/texts/textSm/TextSm";
import rightArrowFillIcon from "assets/icons/right-arrow-fill.svg";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import { MenuTab } from "common/menuTab/MenuTab";
import { TextXl } from "common/texts/textXl/TextXl";
import Link from "next/link";
import rightArrowBlueIcon from "assets/icons/right-arrow-blue.svg";
import rightArrowIcon from "assets/icons/left-arrow.svg";
import { EventForm } from "components/forms/eventForm/EventForm";
import { PreviewForm } from "components/forms/previewForm/PreviewForm";

const setupData = [
  { id: 1, menu: "Setup" },
  { id: 2, menu: "Design" },
  { id: 3, menu: "Products" },
];
const previewData = [
  { id: 1, menu: "Before" },
  { id: 2, menu: "Live" },
  { id: 3, menu: "After" },
];

export function CreateEvent() {
  const {
    mainContainer,
    headingContainer,
    setupCard,
    setupContainer,
    previewContainer,
    nextPrevContainer,
    createBtnContainer,
  } = styles;

  const [setupTabMenuId, setSetupTabMenuId] = useState<number>(1);
  const [previewTabMenuId, setPreviewTabMenuId] = useState<number>(1);

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

  return (
    <section>
      <DashboardLayout navText="events">
        <div className={mainContainer}>
          <div className={headingContainer}>
            <Link href="/events">
              <Image src={leftArrowIcon} alt="arrow" />
              <TextSm text="Go back to events" />
            </Link>
            <div>
              <Image src={rightArrowFillIcon} alt="arrow" />
              <TextSm text="How to create an event" />
              <div className={createBtnContainer}>
                <SolidBtn
                  text="+Create Event"
                  link="/events/create"
                  width="18rem"
                  height="5rem"
                  bg="#999999"
                />
              </div>
            </div>
          </div>
          <div className={setupContainer}>
            <div className={setupCard}>
              <MenuTab
                menuTabData={setupData}
                handleTabMenu={setupTabMenuHandler}
                tabMenuId={setupTabMenuId}
              />
              <TextXl text="Set up your event in 3 easy steps" />
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
              <TextXl text="Preview" />
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
    </section>
  );
}
