const Repositoy = (props) => {
  const { repo } = props;

  return (
    <div className="container">
      <div className="row jumbotron">
        <br />
        <span>{JSON.stringify(repo, null, 2)}</span>
      </div>
    </div>
  );
};

Repositoy.getInitialProps = async ({ query }) => {
  const repo = await getUserRepos(query.id);
  return { repo };
};

export default Repositoy;
