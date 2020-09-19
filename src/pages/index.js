import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import EventsList from "../components/events/eventsList";
import Error from "../components/error/error";

import { getUser, getEvents } from "../../axios";

class Home extends React.Component {
  constructor() {
    super();
  }

  // Wait for the user on the server side before renders on browser
  static async getInitialProps() {
    let events = [];
    let error;
    const user = await getUser();
    const eventData = await getEvents();
    if (eventData.ok) {
      events = eventData.data;
    } else {
      error = eventData.data;
    }
    return { user, events, error };
  }

  render() {
    const { events, error } = this.props;

    return (
      <div className={styles.container}>
        <Head>
          <title>NextHub</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to NextHub!</h1>
          {error && <Error message={error} />}
        </main>

        <EventsList events={events || []} />
      </div>
    );
  }
}

export default Home;
