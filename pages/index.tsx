import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Footer } from "layout/footer/Footer";
import { Home } from "sections/home/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
        <title>JUMBLE | The Livestream Shopping</title>
      </Head>
      <Home />
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
export default HomePage;
