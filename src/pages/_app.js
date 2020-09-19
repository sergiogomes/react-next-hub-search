import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { wrapper } from "../redux/store";

import Meta from "../components/meta/meta";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import "../styles/globals.css";
import "nprogress/nprogress.css";

// NProgress binders to show and hide progress bar
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
    Router.push(`/search?q=${text}&page=1&type=All`, undefined, {
      shallow: false,
    });
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
        <div className="container-fluid pt-5 pb-1 mt-3">
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
