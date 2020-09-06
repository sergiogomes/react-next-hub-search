import axios from "axios";

import {
  EVENTS,
  USERS_DATA,
  CODES_DATA,
  COMMITS_DATA,
  ISSUES_DATA,
  REPOSITORIES_DATA,
  TOPICS_DATA,
} from "../server/index";

const BASE_URL = "https://api.github.com";
const IS_DEV = true;

/**
 * function to retrieve data from user
 * @param {string} user
 */
export const getUser = (user = "sergiogomes") => {
  return axios
    .get(`${BASE_URL}/users/${user}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
};

/**
 * function that returns user's repositories
 * @param {string} user
 */
export const getUserRepos = (user) => {
  return axios
    .get(`${BASE_URL}/users/${user}/repos`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
};

/**
 * function that returns one repository
 * @param {string} user
 * @param {string} repo
 */
export const getUserRepository = (user, repo) => {
  return axios
    .get(`${BASE_URL}/repos/${user}/${repo}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
};

/**
 * function that returns recent events
 */
export const getEvents = () => {
  if (IS_DEV) {
    return { ok: true, data: EVENTS };
  } else {
    return axios
      .get(`${BASE_URL}/events`)
      .then((res) => {
        return { ok: true, data: res.data };
      })
      .catch((error) => {
        console.error(error);
        let message;
        if (error.message) {
          message = error.message;
        } else if (error.response) {
          message = error.response.statusText;
          if (error.response.data) {
            message = error.response.data.essage;
          }
        }
        return { ok: false, data: message };
      });
  }
};

/**
 * function that returns codes based on a text
 */
export const getSearchCodes = (text, page = 1) => {
  if (IS_DEV) {
    return CODES_DATA;
  } else {
    return axios
      .get(
        `${BASE_URL}/search/code?q=${text}+in%3Afile+user%3A${text}&order=asc&page=${page}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
      .then((res) => {
        if (res.data.total_count > 1000) res.data.total_count = 1000;
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        return {
          total_count: 0,
          incomplete_results: false,
          items: [],
        };
      });
  }
};

/**
 * function that returns commits based on a text
 */
export const getSearchCommits = (text, page = 1) => {
  if (IS_DEV) {
    return COMMITS_DATA;
  } else {
    return axios
      .get(`${BASE_URL}/search/commits?q=${text}&order=asc&page=${page}`, {
        headers: {
          Accept: "application/vnd.github.cloak-preview+json",
        },
      })
      .then((res) => {
        if (res.data.total_count > 1000) res.data.total_count = 1000;
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        return {
          total_count: 0,
          incomplete_results: false,
          items: [],
        };
      });
  }
};

/**
 * function that returns issues based on a text
 */
export const getSearchIssues = (text, page = 1) => {
  if (IS_DEV) {
    return ISSUES_DATA;
  } else {
    return axios
      .get(`${BASE_URL}/search/issues?q=${text}&order=asc&page=${page}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
      .then((res) => {
        if (res.data.total_count > 1000) res.data.total_count = 1000;
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        return {
          total_count: 0,
          incomplete_results: false,
          items: [],
        };
      });
  }
};

/**
 * function that returns repositories based on a text
 */
export const getSearchRepositories = (text, page = 1) => {
  if (IS_DEV) {
    return REPOSITORIES_DATA;
  } else {
    return axios
      .get(`${BASE_URL}/search/repositories?q=${text}&order=asc&page=${page}`, {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      })
      .then((res) => {
        if (res.data.total_count > 1000) res.data.total_count = 1000;
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        return {
          total_count: 0,
          incomplete_results: false,
          items: [],
        };
      });
  }
};

/**
 * function that returns topics based on a text
 */
export const getSearchTopics = (text, page = 1) => {
  if (IS_DEV) {
    return TOPICS_DATA;
  } else {
    return axios
      .get(`${BASE_URL}/search/topics?q=${text}&order=asc&page=${page}`, {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      })
      .then((res) => {
        if (res.data.total_count > 1000) res.data.total_count = 1000;
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        return {
          total_count: 0,
          incomplete_results: false,
          items: [],
        };
      });
  }
};

/**
 * function that returns users based on a text
 */
export const getSearchUsers = (text, page = 1) => {
  if (IS_DEV) {
    return USERS_DATA;
  } else {
    return axios
      .get(`${BASE_URL}/search/users?q=${text}&order=asc&page=${page}`)
      .then((res) => {
        if (res.data.total_count > 1000) res.data.total_count = 1000;
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        return {
          total_count: 0,
          incomplete_results: false,
          items: [],
        };
      });
  }
};
