import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * function to retrieve data from user
 * @param {string} user
 */
export const getUser = (user = "sergiogomes") => {
  return axios
    .get(`${BASE_URL}/users/${user}`)
    .then((res) => {
      // console.log(res.data);
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
};

/**
 * function that returns recent events
 */
export const getSearchUsers = (text, page = 1) => {
  return axios
    .get(`${BASE_URL}/search/users?q=${text}&order=asc&page=${page}`)
    .then((res) => {
      console.log(res.data);
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
};
