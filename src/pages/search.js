import React from "react";
import Router from "next/router";

import SideSearch from "../components/sideSearch/sideSearch";
import ResultSearch from "../components/resultSearch/resultSearch";
import Pagination from "../components/pagination/pagination";

import {
  getSearchUsers,
  getSearchCodes,
  getSearchCommits,
  getSearchIssues,
  getSearchTopics,
  getSearchRepositories,
} from "../../actions";

const ph_obj = {
  id: 0,
  results: 0,
  items: [],
  title: "",
  single: "",
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ["Repositories"],
    };
  }

  static async getInitialProps({ query }) {
    const optionsArray = [];
    const text = query.q;
    const page = query.page;

    const repositoriesData = await getSearchRepositories(text, page);
    const codesData = await getSearchCodes(text, page);
    const commitsData = await getSearchCommits(text, page);
    const issuesData = await getSearchIssues(text, page);
    const topicsData = await getSearchTopics(text, page);
    const usersData = await getSearchUsers(text, page);

    optionsArray.push({
      id: 1,
      results: repositoriesData.total_count,
      items: repositoriesData.items,
      title: "Repositories",
      single: "repository",
    });
    optionsArray.push({
      id: 2,
      results: codesData.total_count,
      items: codesData.items,
      title: "Code",
      single: "code",
    });
    optionsArray.push({
      id: 3,
      results: commitsData.total_count,
      items: commitsData.items,
      title: "Commits",
      single: "commit",
    });
    optionsArray.push({
      id: 4,
      results: issuesData.total_count,
      items: issuesData.items,
      title: "Issues",
      single: "issue",
    });
    optionsArray.push({
      id: 5,
      results: 0,
      items: [],
      title: "Discussions",
      single: "discussion",
    });
    optionsArray.push({
      id: 6,
      results: 0,
      items: [],
      title: "Packages",
      single: "package",
    });
    optionsArray.push({
      id: 7,
      results: 0,
      items: [],
      title: "Marketplace",
      single: "marketplace",
    });
    optionsArray.push({
      id: 8,
      results: topicsData.total_count,
      items: topicsData.items,
      title: "Topics",
      single: "topic",
    });
    optionsArray.push({
      id: 9,
      results: 0,
      items: [],
      title: "Wikis",
      single: "Wiki",
    });
    optionsArray.push({
      id: 10,
      results: usersData.total_count,
      items: usersData.items,
      title: "Users",
      single: "user",
    });

    return {
      optionsArray,
      text,
      page,
    };
  }

  handleSideSearchOption = (option, text) => {
    this.setState({ filter: [option.title] });
    Router.push(`/search?q=${text}&page=${1}&type=${option.title}`);
  };

  filterResults = (options) => {
    return options.filter((option) => {
      return option.title && option.title === this.state.filter[0];
    });
  };

  handleChangePage = (text, page, type) => {
    Router.push(`/search?q=${text}&page=${page}&type=${type}`);
  };

  render() {
    const { optionsArray, text, page } = this.props;

    return (
      <div className="row">
        {/* Bootstrap grid system */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <SideSearch
            changeSideSearchOption={this.handleSideSearchOption}
            activeOption={this.state.filter[0]}
            options={optionsArray || []}
            text={text}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <ResultSearch
            text={text}
            page={page}
            options={this.filterResults(optionsArray) || ph_obj}
          />
          {this.filterResults(optionsArray)[0].results > 30 && (
            <Pagination
              text={text}
              page={page}
              options={this.filterResults(optionsArray)[0] || ph_obj}
              changePage={this.handleChangePage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
