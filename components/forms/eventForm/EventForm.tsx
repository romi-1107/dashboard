import { TextSm } from "common/texts/textSm/TextSm";
import { TextXs } from "common/texts/textXs/TextXs";
import React, { useState } from "react";
import styles from "./EventForm.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import calenderIcon from "assets/icons/calender.svg";
import Image from "next/image";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import timeIcon from "assets/icons/time.svg";
import infoIcon from "assets/icons/info.svg";
import { SwitchBox } from "common/swtichBox/SwitchBox";
import reloadIcon from "assets/icons/reload.svg";
import { EventProducts } from "components/products/eventProducts/EventProducts";
import { eventProductsData } from "data/productData";
import { useTranslation } from "next-i18next";

export function EventForm({ step }: { step: number }) {
  const {
    eventFormContainer,
    eventForm,
    inputContainer,
    inputWrapper,
    charLeftContainer,
    URLContainer,
    URLInputContainer,
    infoText,
    dateContainer,
    dateTimeBox,
    selectContainer,
    textContainer,
    logoContainer,
    sampleContainer,
    brandColorContainer,
    bannerContainer,
    textArea,
    marginContainer,
    colorContainer,
    bgColor,
    frontColor,
    widgetContainer,
    reloadContainer,
    reloadBox,
  } = styles;
  const { t } = useTranslation("event");

  const [inputForm, setInputForm] = useState({
    title: "",
    second: "",
    third: "",
  });
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [time, setTime] = useState("10:00");

  const onInputChange = (e) => {
    const value = e.target.value;
    setInputForm({
      ...inputForm,
      [e.target.name]: value,
    });
  };

  const { title, second, third } = inputForm;
  const now = moment().hour(12).minute(12);

  return (
    <div className={eventFormContainer}>
      {step === 1 && (
        <>
          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text={t("event_info")} />
              <TextXs text={t("event_info_detail")} />
            </div>
            <div className={inputContainer}>
              <div className={inputWrapper}>
                <label htmlFor="title">Event Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={onInputChange}
                  placeholder="Summer collection live"
                />
              </div>
              <br />
              <div className={charLeftContainer}>
                <p>0/80 Characters Left</p>
              </div>
              <TextSm text="Event URL" />
              <div className={URLContainer}>
                <div className={URLInputContainer}>
                  <div>https://www.jumble.tv</div>
                  <input type="text" placeholder="Summer_live" />
                </div>
                <div className={charLeftContainer}>
                  <p>
                    No space or special characters allowed (“;:-_*) Lower case
                    only
                  </p>
                </div>
                <br />
                <TextSm
                  text="Event URL can’t be changed, once created."
                  color="#48c9ff"
                />
              </div>
            </div>
          </div>
          <div className={eventForm}>
            <div>
              <TextSm text="Notes" />
              <p className={infoText}>
                This will be <span>only visible to you</span> Add a Title and
                Personal Notes to your event.
              </p>
            </div>
            <div className={inputContainer}>
              <textarea
                className={textArea}
                rows={5}
                placeholder="Volutpat turpis non ligula sit hac odio faucibus. Sit id enim, maecenas vitae. Eleifend vitae, bibendum porttitor sapien. Vulputate sit blandit tristique feugiat odio non egestas aliquam. Congue pellentesque nam amet id facilisis bibendum aliquet dapibus lorem."
              />
            </div>
          </div>
          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text={t("date_time")} />
              <TextXs text={t("date_time_detail")} />
            </div>
            <div className={inputContainer}>
              <div className={dateContainer}>
                <div>
                  <TextSm text="Date" />
                  <div className={dateTimeBox}>
                    <Image src={calenderIcon} alt="calender-icon" />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd-mm-yyy"
                    />
                  </div>
                </div>
                <div>
                  <TextSm text="Time" />
                  <div className={dateTimeBox}>
                    <Image src={timeIcon} alt="time-icon" />
                    <TimePicker defaultValue={now} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text={t("host_access")} />
              <TextXs text={t("host_access_detail")} />
            </div>
            <div className={inputContainer}>
              <TextSm text="Link a host" />
              <div className={selectContainer}>
                <select>
                  <option value="" hidden>
                    Link a host
                  </option>
                  <option>AWS</option>
                  <option>Heroku</option>
                  <option>Firebase</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text="Brand Identity" />
              <TextXs text="Upload your brand identity to allow viewers recognize your brand." />
            </div>
            <div className={inputContainer}>
              <div className={inputWrapper}>
                <label htmlFor="title">Logo</label>
                <TextXs text="512 pix X 512 pix (PNG or JPG format)" />
                <div className={logoContainer}>
                  <TextXs text="Drag and Drop a file to Upload" />
                </div>
                <div className={sampleContainer}>
                  <div>
                    <input type="checkbox" />
                  </div>
                  <TextXs text="Use a sample image" />
                </div>
              </div>
              <div className={marginContainer} />
              <TextSm text="Brand Color" />
              <div className={brandColorContainer} />
            </div>
          </div>
          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text="Before event" />
              <TextXs text="Invite users to join the event! Personalize your page and write a short message to let your audience know what they can expect!" />
            </div>
            <div className={inputContainer}>
              <div className={inputWrapper}>
                <label htmlFor="title">Banner</label>
                <TextXs text="1280 pix X 1280 pix (PNG or JPG format)" />
                <div className={bannerContainer}>
                  <TextXs text="Drag and Drop a file to Upload" />
                </div>
                <div className={sampleContainer}>
                  <div>
                    <input type="checkbox" />
                  </div>
                  <TextXs text="Use a sample image" />
                </div>
                <div className={marginContainer} />
                <TextSm text="Invitation message" />
                <textarea
                  className={textArea}
                  rows={5}
                  placeholder="Volutpat turpis non ligula sit hac odio faucibus. Sit id enim, maecenas vitae. Eleifend vitae, bibendum porttitor sapien. Vulputate sit blandit tristique feugiat odio non egestas aliquam. Congue pellentesque nam amet id facilisis bibendum aliquet dapibus lorem."
                />
                <div className={charLeftContainer}>
                  <p>0/250 Characters Left</p>
                </div>
                <div className={marginContainer} />
                <TextSm text="Colors" />
                <div className={colorContainer}>
                  <div>
                    <TextXs text="Background Color" />
                    <div className={bgColor} />
                  </div>
                  <div>
                    <TextXs text="Text Color" />
                    <div className={frontColor} />
                  </div>
                </div>
                <div className={marginContainer} />
                <TextSm text="Widget" />
                <div className={widgetContainer}>
                  <TextXs text="Countdown" />
                  <Image src={infoIcon} alt="info" />
                </div>
                <SwitchBox />
              </div>
            </div>
          </div>

          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text="After Event" />
              <TextXs text="Thank everyone for joining the event and redirect them back to your store!" />
            </div>
            <div className={inputContainer}>
              <div className={inputWrapper}>
                <TextSm text="Thank You Message" />
                <textarea
                  className={textArea}
                  rows={5}
                  placeholder="Volutpat turpis non ligula sit hac odio faucibus. Sit id enim, maecenas vitae. Eleifend vitae, bibendum porttitor sapien. Vulputate sit blandit tristique feugiat odio non egestas aliquam. Congue pellentesque nam amet id facilisis bibendum aliquet dapibus lorem."
                />
              </div>
              <br />

              <div className={charLeftContainer}>
                <p>0/250 Characters Left</p>
              </div>
            </div>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text="Promo Code" />
              <TextXs text="By dafault,customers will be able to apply a promo code at checkout" />
            </div>
            <div className={inputContainer}>
              <div className={inputWrapper}>
                <TextSm text="Enable Promo Code" />
                <SwitchBox />
              </div>
            </div>
          </div>
          <div className={eventForm}>
            <div className={textContainer}>
              <TextSm text="Collection" />
              <TextXs text="Select the collection for your event" />
            </div>
            <div className={inputContainer}>
              <div className={reloadContainer}>
                <TextSm text="Select a collection" />
                <div className={reloadBox}>
                  <Image src={reloadIcon} alt="reload" />
                  <TextXs text="Reload" color="#48c9ff" />
                </div>
              </div>
              <div className={selectContainer}>
                <select>
                  <option value="" hidden>
                    Live Shopping
                  </option>
                  <option>Opiton1</option>
                  <option>Option2 </option>
                  <option>Option3</option>
                </select>
              </div>
              <br />
              <br />
              <div className={marginContainer} />
              <div className={reloadContainer}>
                <TextSm text="Live shopping event" />
                <TextSm text="(3 products)" color="#48c9ff" />
                <div className={reloadBox}>
                  <Image src={reloadIcon} alt="reload" />
                  <TextXs text="Reload" color="#48c9ff" />
                </div>
              </div>
              <div className={marginContainer} />
              <EventProducts productsData={eventProductsData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
