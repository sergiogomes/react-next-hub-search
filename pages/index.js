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
          {error && (
            <div className="container">
              <div className="alert alert-danger" role="alert">
                <h5 className="alert-heading">Error!</h5>
                <p>{error}</p>
                <hr />
                <p className="mb-0">
                  API rate limit exceeded for 186.206.255.127. (But here's the
                  good news: Authenticated requests get a higher rate limit.
                  Check out the documentation for more details.)
                </p>
              </div>
            </div>
          )}
        </main>

        <EventsList events={events || []} />
      </div>
    );
  }
}

export default Home;
