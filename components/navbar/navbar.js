import React from "react";
import Link from "next/link";

class NavBar extends React.Component {
  state = {
    text: "",
  };

  render() {
    const { onSearch } = this.props;
    const { text } = this.state;

    return (
      // Bootstrap default navbar, dark theme with search
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          <Link href="/">
            <a>NextHub</a>
          </Link>
        </span>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(event) => {
              this.setState({
                text: event.target.value,
              });
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                onSearch(event.target.value);
                this.setState({
                  text: "",
                });
              }
            }}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="role"
            onClick={(event) => {
              event.preventDefault();
              onSearch(event.target.value);
              this.setState({
                text: "",
              });
            }}
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
