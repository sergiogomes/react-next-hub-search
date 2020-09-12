import { HYDRATE } from "next-redux-wrapper";

import { FILL_RESULTS } from "../actions/resultsActions";

const initialState = {
  data: [
    {
      id: 1,
      results: 0,
      items: [],
      title: "Repositories",
      single: "repository",
      page: 1,
    },
    {
      id: 2,
      results: 0,
      items: [],
      title: "Code",
      single: "code",
      page: 1,
    },
    {
      id: 3,
      results: 0,
      items: [],
      title: "Commits",
      single: "commit",
      page: 1,
    },
    {
      id: 4,
      results: 0,
      items: [],
      title: "Issues",
      single: "issue",
      page: 1,
    },
    {
      id: 5,
      results: 0,
      items: [],
      title: "Discussions",
      single: "discussion",
      page: 1,
    },
    {
      id: 6,
      results: 0,
      items: [],
      title: "Packages",
      single: "package",
      page: 1,
    },
    {
      id: 7,
      results: 0,
      items: [],
      title: "Marketplace",
      single: "marketplace",
      page: 1,
    },
    {
      id: 8,
      results: 0,
      items: [],
      title: "Topics",
      single: "topic",
      page: 1,
    },
    {
      id: 9,
      results: 0,
      items: [],
      title: "Wikis",
      single: "Wiki",
      page: 1,
    },
    {
      id: 10,
      results: 0,
      items: [],
      title: "Users",
      single: "user",
      page: 1,
    },
  ],
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case FILL_RESULTS:
      const data = state.data.slice();
      const dataIndex = data.findIndex((data) => data.title === action.title);
      if (dataIndex !== -1) {
        data[dataIndex].results = action.data.total_count;
        data[dataIndex].items = action.data.items;
        data[dataIndex].page = parseInt(action.page);
        return { ...state, data };
      } else {
        return { ...state };
      }
    default:
      return { ...state };
  }
};

export default resultsReducer;
