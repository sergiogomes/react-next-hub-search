import React from "react";

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
        <span className="navbar-brand mb-0 h1">NextHub</span>
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
                onSearch(event.target.value);
                this.setState({
                  text: "",
                });
              }
            }}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="role">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
