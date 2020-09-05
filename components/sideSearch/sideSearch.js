const SideSearch = (props) => {
  const { options } = props;

  // Bootsrap list with badges
  return (
    <div className="list-group">
      {options.map((item) => (
        <a
          key={item.id}
          onClick={() => props.changeSideSearchOption(item)}
          href="#"
          className={`list-group-item d-flex justify-content-between align-items-center ${
            props.activeCategory === item.id ? "active" : ""
          }`}
        >
          {item.title}
          <span
            className={`badge badge-pill ${
              item.results ? "badge-dark" : "badge-secondary"
            }`}
          >
            {item.results}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SideSearch;
