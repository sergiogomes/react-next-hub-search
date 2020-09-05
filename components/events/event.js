import React from "react";
import Link from "next/link";

import DateMonth from "../date/date";

class Event extends React.Component {
  renderDescription({ type, payload }) {
    if (type === "PushEvent") {
      return ` pushed to`;
    } else if (type === "PullRequestEvent") {
      return ` ${payload.number} ${
        payload.number === 1 ? " pull request " : " pull requests "
      }`;
    } else if (type === "CreateEvent") {
      return ` created`;
    } else if (type === "WatchEvent") {
      return ` to watch`;
    } else if (
      type === "PullRequestReviewCommentEvent" ||
      type === "PullRequestReviewEvent"
    ) {
      return ` a review on`;
    } else if (type === "IssueCommentEvent" || type === "IssuesEvent") {
      return ` issue`;
    } else if (type === "DeleteEvent") {
      return ` deleted`;
    } else if (type === "ForkEvent") {
      return ` forked from`;
    } else if (type === "MemberEvent") {
      return ` member on`;
    } else if (type === "PublicEvent") {
      return ` turned public`;
    } else if (type === "ReleaseEvent") {
      return ` a release on`;
    } else if (type === "CommitCommentEvent") {
      return ` commited on`;
    } else {
      console.error(`${type} not mapped.`);
      return ` ${type}`;
    }
  }

  renderAction(action) {
    if (action) return ` ${action}`;
  }

  render() {
    const { event } = this.props;

    return (
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
          <span>{this.renderAction(event.payload.action)}</span>
          <span>{this.renderDescription(event)}</span>
          <span>
            <Link href="/repos/[user]/[repo]" as={`/repos/${event.repo.name}`}>
              <a className="font-weight-bold stretched-link">
                {` ${event.repo.name}`}
              </a>
            </Link>
          </span>
          <span className="text-muted">
            {` on  `}
            <DateMonth ISOdate={event.created_at} />
          </span>
          <p>{event.payload.description}</p>
        </div>
      </li>
    );
  }
}

export default Event;
