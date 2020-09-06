import Repository from "./respository";
import Commit from "./commit";
import Issue from "./issue";
import Topic from "./topic";
import User from "./user";
import Code from "./code";

const ResultSearch = (props) => {
  const { options, text, page } = props;
  const data = options[0];
  const last = Math.floor(data.results / 30) + 1;
  const pag = parseInt(page);
  const res_page = pag * 30;

  // Bootsrap list with badges
  return (
    <div className="list-group">
      {data.results > 0 && (
        <h4 className="my-4">
          {`${data.results} ${data.single} ${
            data.results > 1 ? "results" : "result"
          }`}
        </h4>
      )}
      {data.results > 30 && (
        <div>{`Displaying from ${pag === 1 ? 1 : res_page - 30} to ${
          res_page > 1000 ? 1000 : res_page
        } `}</div>
      )}
      {data.results === 1000 && (
        <small className="alert alert-warning mt-2" role="alert">
          Results are limited to 1000.
        </small>
      )}
      <div className="list-group list-group-flush">
        {data.items &&
          data.items.map((item) => {
            if (data.id === 1) return <Repository key={item.id} repo={item} />;
            if (data.id === 2) return <Code key={item.sha} code={item} />;
            if (data.id === 3) return <Commit key={item.sha} commit={item} />;
            if (data.id === 4) return <Issue key={item.id} issue={item} />;
            if (data.id === 8) return <Topic key={item.id} topic={item} />;
            if (data.id === 10) return <User key={item.id} user={item} />;
          })}
      </div>
      {data.results === 0 && (
        <>
          <h4 className="my-4 text-center">
            {`We couldn’t find any ${data.single} in the GitHub Searching API matching '${text}'.`}
          </h4>
          <small className="alert alert-warning mt-2 text-center" role="alert">
            <strong>Discussions</strong>, <strong>Packages</strong>,{" "}
            <strong>Marketplace</strong>, and <strong>Wikis</strong> don't have
            API endpoint yet.
          </small>
        </>
      )}
    </div>
  );
};

export default ResultSearch;
