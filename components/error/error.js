const Error = (props) => {
  const { message } = props;

  return (
    <div className="container">
      <div className="alert alert-danger" role="alert">
        <h5 className="alert-heading">Error!</h5>
        <p>{`${message ? message : "Request failed with status code 403"}`}</p>
        <hr />
        <p className="mb-0">
          API rate limit exceeded for 186.206.255.127. (But here's the good
          news: Authenticated requests get a higher rate limit. Check out the
          documentation for more details.)
        </p>
      </div>
    </div>
  );
};

export default Error;
