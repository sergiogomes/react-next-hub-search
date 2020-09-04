import Head from "next/head";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Meta from "../components/meta/meta";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Meta />
        <title>NextHub</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
