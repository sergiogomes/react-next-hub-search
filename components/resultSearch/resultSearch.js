import Repository from "./respository";
import Commit from "./commit";

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
            if (data.id === 3) return <Commit key={item.sha} commit={item} />;
          })}
      </div>
    </div>
  );
};

export default ResultSearch;
