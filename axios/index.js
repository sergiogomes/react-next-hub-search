import axios from "axios";

const BASE_URL = "https://api.github.com";
const emptyObj = {
  total_count: 0,
  incomplete_results: true,
  items: [],
};

/**
 * Returns a headers object and accepts a specific header
 * option if needed.
 * @param {string} specific
 */
const getHeaders = (specific = "") => {
  const header = specific ? specific : "application/vnd.github.v3+json";
  return {
    headers: {
      Accept: header,
    },
  };
};

/**
 * GitHub's API is limited to a thousand results, but
 * total_counts no. If we try to access through
 * pagintation we will get an error.
 * @param {object} data
 */
const limitResult = (data) => {
  if (data.total_count > 1000) data.total_count = 1000;
  return data;
};

/**
 * function to retrieve data from user.
 * @param {string} user
 */
export const getUser = (user = "sergiogomes") => {
  return axios
    .get(`${BASE_URL}/users/${user}`, getHeaders())
    .then((res) => res.data)
    .catch((error) => error);
};

/**
 * function that returns user's repositories.
 * @param {string} user
 */
export const getUserRepos = (user) => {
  return axios
    .get(`${BASE_URL}/users/${user}/repos`, getHeaders())
    .then((res) => res.data)
    .catch((error) => error);
};

/**
 * function that returns one repository.
 * @param {string} user
 * @param {string} repo
 */
export const getUserRepository = (user, repo) => {
  return axios
    .get(`${BASE_URL}/repos/${user}/${repo}`, getHeaders())
    .then((res) => res.data)
    .catch((error) => error);
};

/**
 * function that returns repository commits.
 * @param {string} user
 * @param {string} repo
 * @param {string} page
 */
export const getUserRepositoryCommits = (user, repo, page = 1) => {
  return axios
    .get(`${BASE_URL}/repos/${user}/${repo}/commits?page=${page}`, getHeaders())
    .then((res) => res.data)
    .catch((error) => error);
};

/**
 * function that returns recent events.
 */
export const getEvents = () => {
  return axios
    .get(`${BASE_URL}/events`, getHeaders())
    .then((res) => {
      return { ok: true, data: res.data };
    })
    .catch((error) => {
      return { ok: false, data: error.response.statusText };
    });
};

/**
 * function that returns codes based on a text.
 */
export const getSearchCodes = (text, page = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/search/code?q=${text}+in%3Afile+user%3Agithub&order=asc&page=${page}`,
        getHeaders()
      )
      .then((res) => resolve(limitResult(res.data)))
      .catch(() => reject(emptyObj));
  });
};

/**
 * function that returns commits based on a text.
 */
export const getSearchCommits = (text, page = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/search/commits?q=${text}&order=asc&page=${page}`,
        getHeaders("application/vnd.github.cloak-preview+json")
      )
      .then((res) => resolve(limitResult(res.data)))
      .catch(() => reject(emptyObj));
  });
};

/**
 * function that returns issues based on a text.
 */
export const getSearchIssues = (text, page = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/search/issues?q=${text}&order=asc&page=${page}`,
        getHeaders()
      )
      .then((res) => resolve(limitResult(res.data)))
      .catch(() => reject(emptyObj));
  });
};

/**
 * function that returns repositories based on a text.
 */
export const getSearchRepositories = (text, page = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/search/repositories?q=${text}&order=asc&page=${page}`,
        getHeaders("application/vnd.github.mercy-preview+json")
      )
      .then((res) => resolve(limitResult(res.data)))
      .catch(() => reject(emptyObj));
  });
};

/**
 * function that returns topics based on a text.
 */
export const getSearchTopics = (text, page = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/search/topics?q=${text}&order=asc&page=${page}`,
        getHeaders("application/vnd.github.mercy-preview+json")
      )
      .then((res) => resolve(limitResult(res.data)))
      .catch(() => reject(emptyObj));
  });
};

/**
 * function that returns users based on a text.
 */
export const getSearchUsers = (text, page = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/search/users?q=${text}&order=asc&page=${page}`,
        getHeaders()
      )
      .then((res) => resolve(limitResult(res.data)))
      .catch(() => reject(emptyObj));
  });
};
