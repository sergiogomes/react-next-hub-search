const monthMap = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
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
    const month = monthMap[date.getMonth()];
    return <span>{`${day} ${month}`}</span>;
  } catch (error) {
    return (
      <small className="alert alert-danger mt-2" role="alert">
        {`Unexpected error in DateMonth: ${error}`}
      </small>
    );
  }
}
