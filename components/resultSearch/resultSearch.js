import Repository from "./respository";
import Commit from "./commit";
import Issue from "./issue";
import Topic from "./topic";
import User from "./user";
import Code from "./code";

const ResultSearch = (props) => {
  const { options } = props;
  const data = options[0];

  // Bootsrap list with badges
  return (
    <div className="list-group">
      <h4 className="my-4 c-red">{`${data.results} ${data.single} ${
        data.results > 1 ? "results" : "result"
      }`}</h4>
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
    </div>
  );
};

export default ResultSearch;
