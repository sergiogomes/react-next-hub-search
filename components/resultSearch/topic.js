import Link from "next/link";

import DateMonth from "../date/date";

// The user's search API has very little information...

const Topic = (props) => {
  const { topic } = props;
  return (
    <div className="list-group-item">
      <div>{`# ${topic.name}`}</div>
      <div>{topic.short_description}</div>
      <small className="mt-0 mb-1 text-muted">{topic.created_by}</small>
      <small className="mt-0 mb-1 text-muted">
        {` created on `}
        <DateMonth ISOdate={topic.created_at} />
      </small>
      {/* <br />
      <span>{JSON.stringify(topic, null, 2)}</span> */}
    </div>
  );
};

export default Topic;
