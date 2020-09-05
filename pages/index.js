import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import EventsList from "../components/events/eventsList";

import { getUser, getEvents, getSearchUsers } from "../actions";

class Home extends React.Component {
  state = {
    users: [],
  };

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

  handleOnSearch = (text) => {
    debugger;
    console.log("text", text);
    getSearchUsers(text).then((res) => {
      const users = res;
      this.setState(() => {
        return { users };
      });
    });
  };

  render() {
    const { events, error } = this.props;
    const { users } = this.state;
    console.log(error);

    return (
      <div className={styles.container}>
        <Head>
          <title>NextHub</title>
        </Head>
        <NavBar onSearch={this.handleOnSearch} />

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

        {users.length === 0 && <EventsList events={events || []} />}
        <Footer />
      </div>
    );
  }
}

export default Home;
