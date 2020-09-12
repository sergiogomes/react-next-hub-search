import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

import { changeFilter } from "../redux/actions/filterActions";
import { changeResults } from "../redux/actions/resultsActions";
import { changePage } from "../redux/actions/pageActions";

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

const optionsMap = {
  Repositories: true,
  Code: true,
  Commits: true,
  Issues: true,
  Discussions: true,
  Packages: true,
  Marketplace: true,
  Topics: true,
  Wikis: true,
  Users: true,
};

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps({ query }) {
    const { q, page, type } = query;
    const text = q;
    return { text, page, type };
  }

  async componentDidMount() {
    if (this.props.page !== this.props.currentPage) {
      this.props.onChangePage(this.props.page);
    }
    this.getData();
  }

  async getData(
    type = this.props.type,
    text = this.props.text,
    page = this.props.page
  ) {
    if (type === "Repositories" || type === "All") {
      const repositoriesData = await getSearchRepositories(text, page);
      this.props.onChangeResults("Repositories", repositoriesData, page);
    }

    if (type === "Code" || type === "All") {
      const codesData = await getSearchCodes(text, page);
      this.props.onChangeResults("Code", codesData, page);
    }

    if (type === "Commits" || type === "All") {
      const commitsData = await getSearchCommits(text, page);
      this.props.onChangeResults("Commits", commitsData, page);
    }

    if (type === "Issues" || type === "All") {
      const issuesData = await getSearchIssues(text, page);
      this.props.onChangeResults("Issues", issuesData, page);
    }

    if (type === "Topics" || type === "All") {
      const topicsData = await getSearchTopics(text, page);
      this.props.onChangeResults("Topics", topicsData, page);
    }

    if (type === "Users" || type === "All") {
      const usersData = await getSearchUsers(text, page);
      this.props.onChangeResults("Users", usersData, page);
    }

    if (type === "All" || optionsMap[type]) {
      const filter = type === "All" ? "Repositories" : type;
      this.props.onChangeFilter(filter);
    }
  }

  handleSideSearchOption = (option, text, page) => {
    if (option.title === this.props.filter) return;

    const data = this.props.optionsArray.slice();
    const dataFound = data.find((data) => data.title === option.title);

    page = parseInt(page);
    if (page !== dataFound.page || dataFound.results == 0) {
      this.getData(option.title, text, dataFound.page);
    }

    Router.push(
      `/search?q=${text}&page=${dataFound.page}&type=${option.title}`,
      undefined,
      { shallow: true }
    );
    this.props.onChangeFilter(option.title);
    this.props.onChangePage(dataFound.page);
  };

  handleChangePage = (text, page, type) => {
    const data = this.props.optionsArray.slice();
    const dataFound = data.find((data) => data.title === type);

    page = parseInt(page);
    if (page !== dataFound.page || dataFound.results == 0) {
      this.getData(type, text, page);
    }

    Router.push(`/search?q=${text}&page=${page}&type=${type}`, undefined, {
      shallow: true,
    });
    this.props.onChangePage(page);
  };

  filterResults = (options) => {
    return options.filter((option) => {
      return option.title && option.title === this.props.filter;
    });
  };

  render() {
    const { optionsArray, text, currentPage, searchedText } = this.props;

    // User searched a different text
    if (searchedText && searchedText !== text) {
      this.getData("All", searchedText, 1);
    }

    return (
      <div className="row">
        {/* Bootstrap grid system */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <SideSearch
            changeSideSearchOption={this.handleSideSearchOption}
            activeOption={this.props.filter}
            options={optionsArray || []}
            text={text}
            page={currentPage}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <ResultSearch
            text={text}
            page={currentPage}
            options={this.filterResults(optionsArray) || ph_obj}
          />
          {this.filterResults(optionsArray)[0] &&
            this.filterResults(optionsArray)[0].results > 30 && (
              <Pagination
                text={text}
                page={currentPage}
                options={this.filterResults(optionsArray)[0] || ph_obj}
                changePage={this.handleChangePage}
              />
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter.title,
  optionsArray: state.results.data,
  currentPage: state.pagination.currentPage,
  searchedText: state.search.text,
});

const mapDispatchToProps = {
  onChangeFilter: changeFilter,
  onChangeResults: changeResults,
  onChangePage: changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
