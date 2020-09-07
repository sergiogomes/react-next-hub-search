import Link from "next/link";

import DateMonth from "../date/date";

const Commit = (props) => {
  const { commit } = props;
  return (
    <div className="list-group-item">
      {commit.repository && (
        <small className="text-muted">
          <Link href="/[user]/[repo]" as={commit.repository.full_name}>
            <a className="font-weight-bold">
              {` ${commit.repository.full_name}`}
            </a>
          </Link>
        </small>
      )}
      <div className="text-break">{commit.commit.message}</div>
      <small className="mt-0 mb-1 text-muted">
        {commit.author && (
          <Link href="/[user]" as={`/${commit.author.login}`}>
            <a className="font-weight-bold">{commit.author.login}</a>
          </Link>
        )}
        {` commited on `}
        <DateMonth ISOdate={commit.commit.committer.date} />
      </small>
      <br />
    </div>
  );
};

export default Commit;
