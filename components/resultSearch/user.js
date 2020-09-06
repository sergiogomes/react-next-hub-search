import Link from "next/link";

// The user's search API has very little information...

const User = (props) => {
  const { user } = props;
  return (
    <div className="list-group-item">
      <Link href="/users/[id]" as={`/users/${user.login}`}>
        <a>
          <img
            src={user.avatar_url}
            className="mr-3 rounded-circle sm-img"
            alt={user.login}
          />
        </a>
      </Link>
      <span>
        <Link href="/users/[id]" as={`/users/${user.login}`}>
          <a className="font-weight-bold">{user.login}</a>
        </Link>
      </span>
    </div>
  );
};

export default User;
