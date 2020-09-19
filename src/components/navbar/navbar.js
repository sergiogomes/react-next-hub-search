import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

import { changeSearch } from "../../redux/actions/searchActions";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  state = {
    text: "",
  };

  componentDidMount() {
    this.setState({
      text: this.props.text,
    });
    this.searchInput.focus();
  }

  handleOnChange(text) {
    // App.js function
    this.props.onSearch(text);
    // Redux dispatch
    this.props.onChangeSearch(text);
  }

  render() {
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
                this.handleOnChange(event.target.value);
              }
            }}
            ref={(input) => {
              this.searchInput = input;
            }}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="role"
            onClick={(event) => {
              event.preventDefault();
              this.handleOnChange(this.state.text);
            }}
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.search.text,
});

const mapDispatchToProps = {
  onChangeSearch: changeSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
