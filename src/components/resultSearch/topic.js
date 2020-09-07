import DateMonth from "../date/date";

const Topic = (props) => {
  const { topic } = props;
  return (
    <div className="list-group-item">
      <div>{`# ${topic.name}`}</div>
      <div className="text-break">{topic.short_description}</div>
      <small className="mt-0 mb-1 text-muted">{topic.created_by}</small>
      <small className="mt-0 mb-1 text-muted">
        {` created on `}
        <DateMonth ISOdate={topic.created_at} />
      </small>
    </div>
  );
};

export default Topic;
