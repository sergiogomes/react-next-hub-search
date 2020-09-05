const ResultSearch = (props) => {
  const { options } = props;
  const data = options[0];
  // Bootsrap list with badges
  return (
    <div className="list-group">
      <h4 className="my-4 c-red">{`${data.results} ${data.single} ${
        data.results > 1 ? "results" : "result"
      }`}</h4>
      <div className="row">
        Display results
        {data.items &&
          data.items.map((item) => <div>{JSON.stringify(item, null, 2)}</div>)}
      </div>
    </div>
  );
};

export default ResultSearch;
