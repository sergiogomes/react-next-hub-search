import styles from "./pagination.module.css";

const Pagination = (props) => {
  const { options, text, page } = props;
  const data = options;
  const last = Math.floor(data.results / 30) + 1;
  const pag = parseInt(page);

  // Bootsrap pagination
  return (
    <nav aria-label="Page navigation example" className={styles.navigation}>
      <ul className="pagination justify-content-center">
        {pag > 2 && (
          <li className="page-item">
            <a
              className="page-link stretched-link"
              href="#"
              aria-label="First"
              onClick={() => props.changePage(text, 1, data.title)}
            >
              <span aria-hidden="true">&laquo; First</span>
            </a>
          </li>
        )}
        {pag - 2 >= 1 && (
          <li className="page-item">
            <a
              className="page-link stretched-link"
              href="#"
              onClick={() => props.changePage(text, pag - 2, data.title)}
            >
              {pag - 2}
            </a>
          </li>
        )}
        {pag - 1 >= 1 && (
          <li className="page-item">
            <a
              className="page-link stretched-link"
              href="#"
              onClick={() => props.changePage(text, pag - 1, data.title)}
            >
              {pag - 1}
            </a>
          </li>
        )}
        <li className="page-item active">
          <a
            className="page-link stretched-link"
            href="#"
            onClick={() => props.changePage(text, pag, data.title)}
          >
            {pag}
          </a>
        </li>
        {pag + 1 <= last && (
          <li className="page-item">
            <a
              className="page-link stretched-link"
              href="#"
              onClick={() => props.changePage(text, pag + 1, data.title)}
            >
              {pag + 1}
            </a>
          </li>
        )}
        {pag + 2 <= last && (
          <li className="page-item">
            <a
              className="page-link stretched-link"
              href="#"
              onClick={() => props.changePage(text, pag + 2, data.title)}
            >
              {pag + 2}
            </a>
          </li>
        )}
        {pag < last - 1 && (
          <li className="page-item">
            <a
              className="page-link stretched-link"
              href="#"
              aria-label="Last"
              onClick={() => props.changePage(text, last, data.title)}
            >
              <span aria-hidden="true">Last &raquo;</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
