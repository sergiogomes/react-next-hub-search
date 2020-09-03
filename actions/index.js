import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUser = (user = "sergiogomes") => {
  return axios
    .get(`${BASE_URL}/users/${user}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
