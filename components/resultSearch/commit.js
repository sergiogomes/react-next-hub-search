import Link from "next/link";

import DateMonth from "../date/date";

const Commit = (props) => {
  const { commit } = props;
  return (
    <div className="list-group-item">
      <small className="text-muted">
        <Link
          href="/repos/[user]/[repo]"
          as={`/repos/${commit.repository.full_name}`}
        >
          <a className="font-weight-bold">
            {` ${commit.repository.full_name}`}
          </a>
        </Link>
      </small>
      <div className="text-wrap">{commit.commit.message}</div>
      <small className="mt-0 mb-1 text-muted">
        <Link href="/users/[id]" as={`/users/${commit.author.login}`}>
          <a className="font-weight-bold">{commit.author.login}</a>
        </Link>
        {` commited on `}
        <DateMonth ISOdate={commit.commit.committer.date} />
      </small>
      <br />
      {/* <span>{JSON.stringify(commit, null, 2)}</span> */}
    </div>
  );
};

export default Commit;