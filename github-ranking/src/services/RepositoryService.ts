import { PaginationInfo } from '../types/PaginationInfo';
import { Repository } from '../types/Repository';
import { callApi } from './api';

type RepositoriesList = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
};

const url = 'https://api.github.com/search/repositories';

export async function getMostStarRepo({ page, per_page }: PaginationInfo) {
  const params = new URLSearchParams({
    q: 'stars:>0',
    sort: 'stars',
    order: 'desc',
    per_page: per_page.toString(), // Number of results per page
    page: page.toString(), // Specify the page number
  });
  const repoList = await callApi<RepositoriesList>(
    `${url}?${params.toString()}`,
  );
  return repoList.items;
}
