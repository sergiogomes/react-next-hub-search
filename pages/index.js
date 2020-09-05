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
    const user = await getUser();
    const events = await getEvents();
    return { user, events };
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
    const { events } = this.props;
    const { users } = this.state;

    // debugger;

    return (
      <div className={styles.container}>
        <Head>
          <title>NextHub</title>
        </Head>
        <NavBar onSearch={this.handleOnSearch} />

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to NextHub!</h1>
        </main>

        {users.length === 0 && <EventsList events={events || []} />}
        <Footer />
      </div>
    );
  }
}

export default Home;
