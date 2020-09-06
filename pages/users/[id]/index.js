import Link from "next/link";

import DateMonth from "../../../components/date/date";
import { getUser } from "../../../actions/index";

const User = (props) => {
  const { user } = props;

  const subject = "NextHub";
  const message =
    "Hello!%0D%0A%0D%0ASaw%20your%20email%20on%20NextHub,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.";
  const emailLink = `mailto:${user.email}?subject=${subject}&body=${message}`;

  return (
    <div className="container">
      <div className="row jumbotron">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <img
            src={user.avatar_url}
            className="mr-3 rounded-circle w-100"
            alt={user.login}
          />
        </div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <div className="py-3">
            <h4>{user.name}</h4>
            <div className="text-muted">{user.login}</div>
            <div>{user.bio}</div>
          </div>
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
              <Link href={user.repos_url}>
                <a
                  className="text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{user.public_repos}</strong> public repositories
                </a>
              </Link>
            </small>
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
            {/* <br />
      <span>{JSON.stringify(user, null, 2)}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

User.getInitialProps = async ({ query }) => {
  const user = await getUser(query.id);
  return { user };
};

export default User;
