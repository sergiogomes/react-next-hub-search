import Link from "next/link";

/**
 * returns file extension
 * @param {string} file
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
        <Link href="/[user]" as={`/${code.repository.owner.login}`}>
          <a>
            <img
              src={code.repository.owner.avatar_url}
              className="mr-3 rounded-circle sm-img"
              alt={code.repository.owner.login}
            />
          </a>
        </Link>
        <span>
          <Link href="/[user]/[repo]" as={code.repository.full_name}>
            <a className="font-weight-bold">{` ${code.repository.full_name}`}</a>
          </Link>
        </span>
      </small>
      <div className="ml-5">
        <Link href={code.html_url}>
          <a
            className="font-weight-bold text-break"
            target="_blank"
            rel="noopener noreferrer"
          >
            {code.path}
          </a>
        </Link>
      </div>
      <div className="ml-5">
        <small className="text-muted">{getLanguageDesc(code.name)}</small>
      </div>
    </div>
  );
};

export default Code;
