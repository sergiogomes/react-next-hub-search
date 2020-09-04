import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
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

  getMonthDesc(month) {
    if (month === 0) return "Jan";
    else if (month === 1) return "Feb";
    else if (month === 2) return "Mar";
    else if (month === 3) return "Apr";
    else if (month === 4) return "May";
    else if (month === 5) return "Jun";
    else if (month === 6) return "Jul";
    else if (month === 7) return "Aug";
    else if (month === 8) return "Sep";
    else if (month === 9) return "Oct";
    else if (month === 10) return "Nov";
    else if (month === 11) return "Dec";
    else return "";
  }

  renderDate(created_at) {
    try {
      const date = new Date(created_at);
      const day = date.getDay();
      const month = this.getMonthDesc(date.getMonth());
      return `${day} ${month}`;
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  renderDescription(event) {
    try {
      if (event.type === "PushEvent") {
        return (
          <>
            <span>
              {` pushed to `}
              <Link
                href="/repos/[user]/[repo]"
                as={`/repos/${event.repo.name}`}
              >
                <a className="font-weight-bold stretched-link">
                  {event.repo.name}
                </a>
              </Link>
            </span>
            <span className="text-muted">
              {` on  ${this.renderDate(event.created_at)}`}
            </span>
            <p>{event.payload.description}</p>
          </>
        );
      } else if (event.type === "PullRequestEvent") {
        return (
          <>
            <span>
              {` ${event.payload.action} ${event.payload.number} ${
                event.payload.number === 1 ? "pull request" : "pull requests"
              }`}
            </span>
            <span className="text-muted">
              {` on  ${this.renderDate(event.created_at)}`}
            </span>
          </>
        );
      } else if (event.type === "CreateEvent") {
        return (
          <>
            <span>
              {` created repository `}
              <Link
                href="/repos/[user]/[repo]"
                as={`/repos/${event.repo.name}`}
              >
                <a className="font-weight-bold stretched-link">
                  {event.repo.name}
                </a>
              </Link>
            </span>
            <span className="text-muted">
              {` on  ${this.renderDate(event.created_at)}`}
            </span>
            <p>{event.payload.description}</p>
          </>
        );
      } else if (event.type === "WatchEvent") {
        return (
          <>
            <span>
              {` ${event.payload.action} `}
              <Link
                href="/repos/[user]/[repo]"
                as={`/repos/${event.repo.name}`}
              >
                <a className="font-weight-bold stretched-link">
                  {event.repo.name}
                </a>
              </Link>
            </span>
            <span className="text-muted">
              {` on  ${this.renderDate(event.created_at)}`}
            </span>
          </>
        );
      } else if (event.type === "IssueCommentEvent") {
        <>
          <span>
            {` ${event.payload.action} issue `}
            <Link href="/repos/[user]/[repo]" as={`/repos/${event.repo.name}`}>
              <a className="font-weight-bold stretched-link">
                {event.repo.name}
              </a>
            </Link>
          </span>
          <span className="text-muted">
            {` on  ${this.renderDate(event.created_at)}`}
          </span>
          <p>{event.payload.description}</p>
        </>;
      } else if (event.type === "PullRequestReviewCommentEvent") {
        return <span>{event.type}</span>;
      } else if (event.type === "PublicEvent") {
        return (
          <>
            <span>
              <Link
                href="/repos/[user]/[repo]"
                as={`/repos/${event.repo.name}`}
              >
                <a className="font-weight-bold stretched-link">
                  {event.repo.name}
                </a>
              </Link>
            </span>
            <span className="text-muted">
              {` on  ${this.renderDate(event.created_at)}`}
            </span>
          </>
        );
      } else if (event.type === "DeleteEvent") {
        return (
          <>
            <span>
              {` deleted `}
              <Link
                href="/repos/[user]/[repo]"
                as={`/repos/${event.repo.name}`}
              >
                <a className="font-weight-bold stretched-link">
                  {event.repo.name}
                </a>
              </Link>
            </span>
            <span className="text-muted">
              {` on  ${this.renderDate(event.created_at)}`}
            </span>
          </>
        );
      } else if (event.type === "ForkEvent") {
        return (
          <>
            <span>
              {` forked from `}
              <Link
                href="/repos/[user]/[repo]"
                as={`/repos/${event.repo.name}`}
              >
                <a className="font-weight-bold stretched-link">
                  {event.repo.name}
                </a>
              </Link>
            </span>
            <span className="text-muted">
              {` on  ${this.renderDate(event.created_at)}`}
            </span>
          </>
        );
      } else if (event.type === "PullRequestReviewEvent") {
        return <span>{event.type}</span>;
      } else if (event.type === "IssuesEvent") {
        return <span>{event.type}</span>;
      } else {
        console.error(`${event.type} not mapped`);
        return <span>{event.type}</span>;
      }
    } catch (error) {
      console.error(error);
      return <></>;
    }
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
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <div className="container">
          <ul className="list-unstyled">
            {events.map((event) => (
              <li key={event.id} className="media my-4">
                <img
                  src={event.actor.avatar_url}
                  className="mr-3 rounded-circle"
                  alt={event.actor.login}
                />
                <div className="media-body">
                  <span className="mt-0 mb-1">
                    <Link href="/users/[id]" as={`/users/${event.actor.id}`}>
                      <a className="font-weight-bold stretched-link">
                        {event.actor.display_login}
                      </a>
                    </Link>
                  </span>
                  {this.renderDescription(event)}
                </div>
                {/* {JSON.stringify(event, null, 2)} */}
              </li>
            ))}
          </ul>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    );
  }
}

export default Home;
