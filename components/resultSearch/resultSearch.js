import Link from "next/link";

import DateMonth from "../date/date";

const ResultSearch = (props) => {
  const { options } = props;
  const data = options[0];
  // Bootsrap list with badges
  return (
    <div className="list-group">
      <h4 className="my-4 c-red">{`${data.results} ${data.single} ${
        data.results > 1 ? "results" : "result"
      }`}</h4>
      <div>
        {data.items &&
          data.items.map((item) => (
            <div key={item.id}>
              <div>
                <Link
                  href="/repos/[user]/[repo]"
                  as={`/repos/${item.full_name}`}
                >
                  <a className="font-weight-bold stretched-link">
                    {` ${item.full_name}`}
                  </a>
                </Link>
              </div>
              <div>{item.description}</div>
              <div className="list-group-horizontal-sm">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="badge badge-pill badge-primary mr-1 mt-1"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <small>
                <span className="text-muted">
                  {` updated on  `}
                  <DateMonth ISOdate={item.updated_at} />
                </span>
              </small>
              <br />
              {/* <span>{JSON.stringify(item, null, 2)}</span> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResultSearch;
