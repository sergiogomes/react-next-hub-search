const Error = (props) => {
  const { message } = props;

  return (
    <div className="container">
      <div className="alert alert-danger" role="alert">
        <h5 className="alert-heading">Error!</h5>
        <p>{`${message ? message : "Unexpected error."}`}</p>
        <hr />
        <p className="mb-0">GitHub API rate limit exceeded.</p>
      </div>
    </div>
  );
};

export default Error;
