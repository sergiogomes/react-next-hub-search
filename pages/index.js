import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import EventsList from "../components/events/eventsList";
import { getUser, getEvents } from "../actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  // Wait for the user on the server side before renders on browser
  static async getInitialProps() {
    const user = await getUser();
    const events = await getEvents();
    return { user, events };
  }

  render() {
    const { user, events } = this.props;

    debugger;

    return (
      <div className={styles.container}>
        <Head>
          <title>NextHub</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">NextHub!</a>
          </h1>
        </main>

        <EventsList events={events} />
      </div>
    );
  }
}

export default Home;
