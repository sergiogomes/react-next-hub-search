import React from "react";
import Head from "next/head";
import Router from "next/router";
import { wrapper } from "../redux/store";

import Meta from "../components/meta/meta";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "../styles/globals.css";

class MyApp extends React.Component {
  static getInitialProps = async ({ Component, ctx }) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        pathname: ctx.pathname,
      },
    };
  };

  handleOnSearch = (text) => {
    Router.push(`/search?q=${text}&page=1&type=All`);
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <Meta />
          <title>NextHub</title>
        </Head>
        <NavBar onSearch={this.handleOnSearch} />
        <div className="responsive-spacer" />
        <div className="container-fluid py-5 mt-3">
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
