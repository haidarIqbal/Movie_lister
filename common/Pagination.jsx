import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = ({ pages, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(pages / pageSize);
  if (pagesCount === 1) return null;
  const allPages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {allPages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
