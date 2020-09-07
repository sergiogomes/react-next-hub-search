import Link from "next/link";

import DateMonth from "../../../components/date/date";
import Commit from "../../../components/resultSearch/commit";

import { getUserRepository } from "../../../actions/index";

const Repositoy = (props) => {
  const { repo } = props;
  const list = [
    {
      count: repo.subscribers_count,
      name: "subscribers",
    },
    {
      count: repo.stargazers_count,
      name: "stargazers",
    },
    {
      count: repo.watchers_count,
      name: "watchers",
    },
    {
      count: repo.open_issues_count,
      name: "issues",
    },
    {
      count: repo.network_count,
      name: "network",
    },
    {
      count: repo.forks_count,
      name: "forks",
    },
  ];

  if (repo.owner) {
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-5">
          <ul className="list-group responsive-list">
            {list.map((item) => (
              <li
                key={item.name}
                className={
                  "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                }
              >
                <span
                  className={`badge badge-pill mr-1 ${
                    item.count ? "badge-dark" : "badge-secondary"
                  }`}
                >
                  {`${item.count >= 1000 ? "1K" : item.count}`}
                </span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <div className="jumbotron">
            <h4>
              <Link href="/[user]" as={`/${repo.owner.login}`}>
                <a>{repo.owner.login}</a>
              </Link>{" "}
              / {repo.name}
            </h4>
            <div className="p-4">{repo.description}</div>
            {repo.homepage && (
              <div>
                <Link href={repo.homepage}>
                  <a
                    className="font-weight-bold text-break"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.homepage}
                  </a>
                </Link>
              </div>
            )}

            <div>
              <small className="mt-0 mb-1 text-muted">
                {`Created on `}
                <DateMonth ISOdate={repo.created_at} />
              </small>
            </div>
            <div>
              <small className="mt-0 mb-1 text-muted">
                {`Last updated on `}
                <DateMonth ISOdate={repo.updated_at} />
              </small>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="py-3">
            <h4>
              <strong>{`${commits ? commits.length : ""}`}</strong> commits
            </h4>
          </div>
          <div className="list-group list-group-flush">
            {commits &&
              commits.map((commit) => (
                <Commit key={commit.sha} commit={commit} />
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          <h5 className="alert-heading">Error!</h5>
          <p>Request failed with status code 403</p>
          <hr />
          <p className="mb-0">
            API rate limit exceeded for 186.206.255.127. (But here's the good
            news: Authenticated requests get a higher rate limit. Check out the
            documentation for more details.)
          </p>
        </div>
      </div>
    );
  }
};

Repositoy.getInitialProps = async ({ query }) => {
  const repo = await getUserRepository(query.user, query.repo);
  return { repo };
};

export default Repositoy;
