const SideSearch = (props) => {
  const { options } = props;

  // debugger;
  // window.localStorage.setItem("codesData", JSON.stringify(options[1].items));
  // window.localStorage.setItem("issues", JSON.stringify(options[3].items));
  // window.localStorage.setItem("issuesData", JSON.stringify(options[3].items));
  // window.localStorage.setItem("labelsData", JSON.stringify(options[9].items));
  // window.localStorage.setItem("repositoriesData", JSON.stringify(options[0].items));

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
          {item.option}
          <span className="badge badge-secondary badge-pill">
            {item.results}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SideSearch;
