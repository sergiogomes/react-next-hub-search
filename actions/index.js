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
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

/**
 * function that returns recent events
 */
export const getEvents = () => {
  return axios
    .get(`${BASE_URL}/events`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
