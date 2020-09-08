import React from "react";
import Link from "next/link";

import DateMonth from "../date/date";

const eventMap = {
  PushEvent: () => "pushed to",
  PullRequestEvent: (payload) =>
    ` ${payload.number} ${
      payload.number === 1 ? " pull request " : " pull requests "
    }`,
  CreateEvent: () => "created",
  WatchEvent: () => "to watch",
  PullRequestReviewCommentEvent: () => "a review on",
  PullRequestReviewEvent: () => "a review on",
  IssueCommentEvent: () => "issue",
  IssuesEvent: () => "issue",
  DeleteEvent: () => "deleted",
  ForkEvent: () => "forked from",
  MemberEvent: () => "member on",
  PublicEvent: () => "turned public",
  ReleaseEvent: () => "a release on",
  CommitCommentEvent: () => "commited on",
};

class Event extends React.Component {
  renderDescription({ type, payload }) {
    const messageFn = eventMap[type];
    const message = messageFn && messageFn(payload);
    return message;
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
            <Link href="/[user]" as={`/${event.actor.login}`}>
              <a className="font-weight-bold text-break">
                {event.actor.display_login}
              </a>
            </Link>
          </span>
          <span>{this.renderAction(event.payload.action)}</span>
          <span>{` ${this.renderDescription(event)}`}</span>
          <span>
            <Link href="/[user]/[repo]" as={event.repo.name}>
              <a className="font-weight-bold">{` ${event.repo.name}`}</a>
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
