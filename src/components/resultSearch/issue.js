import Link from "next/link";

import DateMonth from "../date/date";

const manageRepoUrl = (url) => {
  const pattern = "https://api.github.com/repos/";
  let repo_name = url;
  if (url.indexOf(pattern) > -1) {
    repo_name = url.replace(pattern, "");
  }
  return repo_name;
};

const Issue = (props) => {
  const { issue } = props;
  return (
    <div className="list-group-item">
      <small className="text-muted">
        <span>
          <Link href="/[user]/[repo]" as={manageRepoUrl(issue.repository_url)}>
            <a className="font-weight-bold">
              {` ${manageRepoUrl(issue.repository_url)}`}
            </a>
          </Link>
        </span>
        <span>{` #${issue.number}`}</span>
      </small>
      <div>
        <Link href={issue.html_url}>
          <a target="_blank" rel="noopener noreferrer" className="text-break">
            {issue.title}
          </a>
        </Link>
      </div>
      <small className="mt-0 mb-1 text-muted">
        <span>
          <Link href="/[user]" as={`/${issue.user.login}`}>
            <a className="font-weight-bold">{issue.user.login}</a>
          </Link>
          {` opened on `}
          <DateMonth ISOdate={issue.created_at} />
        </span>
        <span className="ml-4">
          {` ${issue.comments} ${issue.comments > 1 ? "comments" : "comment"}`}
        </span>
        <span className="ml-4">{` status: ${issue.state}`}</span>
      </small>
    </div>
  );
};

export default Issue;
