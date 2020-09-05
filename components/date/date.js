/**
 * Returns a 3 leter month based on month code
 * @param {number} month
 * @returns string
 */
const getMonthDesc = (month) => {
  if (month === 0) return "Jan";
  else if (month === 1) return "Feb";
  else if (month === 2) return "Mar";
  else if (month === 3) return "Apr";
  else if (month === 4) return "May";
  else if (month === 5) return "Jun";
  else if (month === 6) return "Jul";
  else if (month === 7) return "Aug";
  else if (month === 8) return "Sep";
  else if (month === 9) return "Oct";
  else if (month === 10) return "Nov";
  else if (month === 11) return "Dec";
  else return "";
};

/**
 * Transform ISO date to day and month
 * @param {string} ISOdate ISO date string
 * @example "2020-09-04T22:12:17Z" -> 5 Sep
 * @returns string
 */
export default function DateMonth({ ISOdate }) {
  try {
    const date = new Date(ISOdate);
    const day = date.getUTCDate();
    const month = getMonthDesc(date.getMonth());
    return <span>{`${day} ${month}`}</span>;
  } catch (error) {
    console.error(error);
    return "";
  }
}
