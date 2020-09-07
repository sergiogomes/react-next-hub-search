import Link from "next/link";

// The user's search API has very little information...

const User = (props) => {
  const { user } = props;
  return (
    <div className="list-group-item">
      <Link href="/[user]" as={`/${user.login}`}>
        <a>
          <img
            src={user.avatar_url}
            className="mr-3 rounded-circle sm-img"
            alt={user.login}
          />
        </a>
      </Link>
      <span>
        <Link href="/[user]" as={`/${user.login}`}>
          <a className="font-weight-bold text-break">{user.login}</a>
        </Link>
      </span>
    </div>
  );
};

export default User;
