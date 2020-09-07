const SideSearch = (props) => {
  const { options, text } = props;

  // Bootsrap list with badges
  return (
    <>
      <div className="list-group responsive-list">
        {options.map((item) => (
          <a
            key={item.id}
            onClick={() => props.changeSideSearchOption(item, text)}
            href="#"
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center 
            ${props.activeOption === item.title ? "responsive-border" : ""}
            `}
          >
            {item.title}
            <span
              className={`badge badge-pill ml-1 ${
                item.results ? "badge-dark" : "badge-secondary"
              }`}
            >
              {`${item.results >= 1000 ? "1K" : item.results}`}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SideSearch;
