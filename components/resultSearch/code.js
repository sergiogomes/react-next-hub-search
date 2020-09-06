import Link from "next/link";

/**
 * Returns a 3 leter month based on month code
 * @param {number} month
 * @returns string
 */
const getLanguageDesc = (file) => {
  let color = "";
  let ext = file.split(".")[1].toUpperCase();

  if (ext === "JS") {
    ext = "JavaScript";
    color = "badge-warning";
  }
  if (ext === "MD") ext = "Markdown";

  return (
    <>
      <span
        className={`badge badge-pill circle mr-1 ${
          color ? color : "badge-secondary"
        }`}
      >{` `}</span>
      <span>{ext}</span>
    </>
  );
};

const Code = (props) => {
  const { code } = props;
  return (
    <div className="list-group-item">
      <small className="text-muted">
        <Link href="/users/[id]" as={`/users/${code.repository.owner.login}`}>
          <a>
            <img
              src={code.repository.owner.avatar_url}
              className="mr-3 rounded-circle sm-img"
              alt={code.repository.owner.login}
            />
          </a>
        </Link>
        <span>
          <Link
            href="/repos/[user]/[repo]"
            as={`/repos/${code.repository.full_name}`}
          >
            <a className="font-weight-bold">{` ${code.repository.full_name}`}</a>
          </Link>
        </span>
      </small>
      <div className="text-wrap ml-5">
        <Link href={code.html_url}>
          <a className="font-weight-bold">{code.path}</a>
        </Link>
      </div>
      <div className="text-wrap ml-5">
        <small className="text-muted">{getLanguageDesc(code.name)}</small>
      </div>
      {/* <br />
      <span>{JSON.stringify(code, null, 2)}</span> */}
    </div>
  );
};

export default Code;
