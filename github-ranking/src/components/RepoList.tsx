import { Repository } from '../types/Repository';
import { RepoItem } from './RepoItem';

type RepoListType = {
  list: Repository[];
};
export function RepoList({ list }: RepoListType) {
  return (
    <ul className="list-group">
      {list.map((repo, index) => (
        <RepoItem repo={repo}  key={repo.id} />
      ))}
    </ul>
  );
}
