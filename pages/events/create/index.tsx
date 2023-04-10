import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Footer } from "layout/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CreateEvent } from "sections/createEvent/CreateEvent";

function HomePage() {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | Create Event</title>
      </Head>
      <CreateEvent />
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "event", "modal"])),
    },
  };
}
export default HomePage;
