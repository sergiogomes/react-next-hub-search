import React from "react";

import SideSearch from "../components/sideSearch/sideSearch";

import {
  getSearchUsers,
  getSearchCodes,
  getSearchCommits,
  getSearchIssues,
  getSearchTopics,
  getSearchRepositories,
} from "../actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  static async getInitialProps({ query }) {
    const optionsArray = [];

    const repositoriesData = await getSearchRepositories(query.q);
    const codesData = await getSearchCodes(query.q);
    const commitsData = await getSearchCommits(query.q);
    const issuesData = await getSearchIssues(query.q);
    const topicsData = await getSearchTopics(query.q);
    const usersData = await getSearchUsers(query.q);

    optionsArray.push({
      id: 1,
      results: repositoriesData.total_count,
      items: repositoriesData.items,
      option: "Repositories",
    });
    optionsArray.push({
      id: 2,
      results: codesData.total_count,
      items: codesData.items,
      option: "Code",
    });
    optionsArray.push({
      id: 3,
      results: commitsData.total_count,
      items: commitsData.items,
      option: "Commits",
    });
    optionsArray.push({
      id: 4,
      results: issuesData.total_count,
      items: issuesData.items,
      option: "Issues",
    });
    optionsArray.push({ id: 5, results: 0, items: [], option: "Discussions" });
    optionsArray.push({ id: 6, results: 0, items: [], option: "Packages" });
    optionsArray.push({ id: 7, results: 0, items: [], option: "Marketplace" });
    optionsArray.push({
      id: 8,
      results: topicsData.total_count,
      items: topicsData.items,
      option: "Topics",
    });
    optionsArray.push({ id: 9, results: 0, items: [], option: "Wikis" });
    optionsArray.push({
      id: 10,
      results: usersData.total_count,
      items: usersData.items,
      option: "Users",
    });

    // this.setState({ options: optionsArray });
    return {
      optionsArray,
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
    const { optionsArray } = this.props;

    // const { options } = this.state;
    return (
      <div className="row">
        {/* Bootstrap grid system */}
        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
          <SideSearch
            changeSideSearchOption={this.handleSideSearchOption}
            // activeCategory={this.state.filter[0]}
            options={optionsArray || []}
          />
        </div>
        <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9">
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
