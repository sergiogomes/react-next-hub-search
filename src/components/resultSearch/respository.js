import Link from "next/link";

import DateMonth from "../date/date";

const Repository = (props) => {
  const { repo } = props;
  return (
    <div className="list-group-item">
      <div>
        <Link href="/[user]/[repo]" as={repo.full_name}>
          <a className="font-weight-bold">{` ${repo.full_name}`}</a>
        </Link>
      </div>
      <div className="text-break">{repo.description}</div>
      <div className="list-group-horizontal-sm">
        {repo.topics &&
          repo.topics.map((topic) => (
            <span
              key={topic}
              className="badge badge-pill badge-primary mr-1 mt-1"
            >
              {topic}
            </span>
          ))}
      </div>
      <small>{repo.language}</small>
      <small>
        <span className="text-muted">
          {` Updated on `}
          <DateMonth ISOdate={repo.updated_at} />
        </span>
      </small>
    </div>
  );
};

export default Repository;
