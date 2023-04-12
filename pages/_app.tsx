import "styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import "styles/TimePicker.css";
import "styles/ReactClock.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
