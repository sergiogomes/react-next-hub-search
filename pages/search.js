import React from "react";

import SideSearch from "../components/sideSearch/sideSearch";

import { getSearchUsers } from "../actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: 1, option: "Repositories", results: 0 },
        { id: 2, option: "Code", results: 0 },
        { id: 3, option: "Commits", results: 0 },
        { id: 4, option: "Issues", results: 0 },
        { id: 5, option: "Discussions", results: 0 },
        { id: 6, option: "Packages", results: 0 },
        { id: 7, option: "Marketplace", results: 0 },
        { id: 8, option: "Topics", results: 0 },
        { id: 9, option: "Wikis", results: 0 },
        { id: 10, option: "Users", results: 0 },
      ],
    };
  }

  static async getInitialProps({ query }) {
    const usersData = await getSearchUsers(query.q);
    return {
      usersData,
    };
  }

  handleSideSearchOption = (option) => {
    this.setState({ filter: [option.id, option.name] });
  };

  filterResults = (movies) => {
    // if (this.state.filter[0] === 0) return movies;
    // return movies.filter((m) => {
    //   return m.genre_ids && m.genre_ids.includes(this.state.filter[0]);
    // });
  };

  render() {
    const { usersData } = this.props;
    const { options } = this.state;
    return (
      <div className="row">
        <div className="col-lg-3">
          <SideSearch
            changeSideSearchOption={this.handleSideSearchOption}
            // activeCategory={this.state.filter[0]}
            options={options || []}
          />
        </div>
        <div className="col-lg-9">
          <h4 className="my-4 c-red">Results found</h4>
          <div className="row">Display results</div>
        </div>
      </div>
      // <>
      //   <h1>Search</h1>
      //   {JSON.stringify(usersData, null, 2)}
      // </>
    );
  }
}

export default Search;
