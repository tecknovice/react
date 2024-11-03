import { Link } from 'react-router-dom';
type PaginationType = {
  page: number;
};
export function Pagination({ page }: PaginationType) {
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={`page-link ${page <= 1 ? 'disabled' : ''}`}
            href={`?page=${page - 1}`}>
            Previous
          </a>
        </li>

        <li className="page-item">
          <a
            className={`page-link ${page >= 10 ? 'disabled' : ''}`}
            href={`?page=${page + 1}`}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
