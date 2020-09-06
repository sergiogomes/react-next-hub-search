import Link from "next/link";

import DateMonth from "../../components/date/date";
import Repository from "../../components/resultSearch/respository";
import { getUser, getUserRepos } from "../../actions/index";

const User = (props) => {
  const { user, repos } = props;

  const subject = "NextHub";
  const message =
    "Hello!%0D%0A%0D%0ASaw%20your%20email%20on%20NextHub,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.";
  const emailLink = `mailto:${user.email}?subject=${subject}&body=${message}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <div className="row">
            <div className="col-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <img
                src={user.avatar_url}
                className="mr-3 rounded-circle w-100"
                alt={user.login}
              />
            </div>
            <div className="col-9 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="py-3">
                <h4>{user.name}</h4>
                <div className="text-muted">{user.login}</div>
              </div>
            </div>
          </div>
          <div className="py-2">{user.bio}</div>
          <div className="d-grid">
            <small>
              <Link href={user.blog}>
                <a
                  className="text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.blog}
                </a>
              </Link>
            </small>
            <small>
              <Link href={`https://twitter.com/${user.twitter_username}`}>
                <a
                  className="text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.twitter_username}
                </a>
              </Link>
            </small>
            <small>{user.company}</small>
            <small>{user.location}</small>
            {user.email && (
              <address>
                <p className="font-italic">
                  Reach me on:
                  <a
                    className="badge badge-pill badge-dark ml-1"
                    href={emailLink}
                  >
                    {user.email}
                  </a>
                </p>
              </address>
            )}
            <small>
              <Link href={user.followers_url}>
                <a
                  className="text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{user.followers}</strong> followers
                </a>
              </Link>
            </small>
            <small>
              <Link href={user.following_url}>
                <a
                  className="text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{user.following}</strong> following
                </a>
              </Link>
            </small>
            <small>
              <Link href={user.gists_url}>
                <a
                  className="text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{user.public_gists}</strong> gists
                </a>
              </Link>
            </small>
            <small className="mt-0 mb-1 text-muted">
              {`Created on `}
              <DateMonth ISOdate={user.created_at} />
            </small>
          </div>
        </div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <div className="py-3">
            <h4>
              <strong>{user.public_repos}</strong> public repositories
            </h4>
          </div>
          <div className="list-group list-group-flush">
            {repos.map((repo) => (
              <Repository key={repo.id} repo={repo} />
            ))}
          </div>

          {/* <br />
          <span>{JSON.stringify(repos, null, 2)}</span> */}
        </div>
      </div>
    </div>
  );
};

User.getInitialProps = async ({ query }) => {
  const user = await getUser(query.user);
  const repos = await getUserRepos(query.user);
  return { user, repos };
};

export default User;
