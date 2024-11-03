import { Repository } from '../types/Repository';

type RepoItemType = {
  repo: Repository;
};

export function RepoItem({ repo }: RepoItemType) {
  return (
    <li className="list-group-item">
      <div className="card border-0">
        <div className="row g-0">
          <div className="col-1">
            <img
              src={repo.owner.avatar_url}
              className="img-thumbnail rounded-start"
              alt={repo.name}
            />
          </div>
          <div className="col-9 ps-2" style={{ height: '4.5rem' }}>
            <p className="card-title">
              <span className="badge text-bg-primary">{repo.ranking}</span>{' '}
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.full_name}
              </a>
            </p>
            <p
              className="card-text"
              style={{ height: '3rem', overflow: 'hidden' }}>
              {repo.description}
            </p>
          </div>
          <div className="col-2">{repo.stargazers_count}</div>
        </div>
      </div>
    </li>
  );
}
