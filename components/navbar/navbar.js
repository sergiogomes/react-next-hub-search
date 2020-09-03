const NavBar = () => {
  return (
    // Bootstrap default navbar, dark theme with search
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">NextHub</span>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
