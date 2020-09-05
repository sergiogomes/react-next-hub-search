import Head from "next/head";

import Meta from "../components/meta/meta";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Meta />
        <title>NextHub</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
