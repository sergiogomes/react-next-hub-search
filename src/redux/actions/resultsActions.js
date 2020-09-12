export const FILL_RESULTS = "FILL_RESULTS";

export const changeResults = (title, data, page) => ({
  type: FILL_RESULTS,
  title,
  data,
  page,
});
