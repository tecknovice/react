import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Navbar } from './components/Navbar';
import { Pagination } from './components/Pagination';
import { RepoList } from './components/RepoList';
import { getMostStarRepo } from './services/RepositoryService';
import { PaginationInfo } from './types/PaginationInfo';
import { Repository } from './types/Repository';

function App() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? '1');
  console.log('page', page);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page,
    per_page: 100,
  });
  const [loading, setLoading] = useState(true);
  const [repoList, setRepoList] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const list = await getMostStarRepo(pagination);
      list.forEach(
        (item, index) => (item.ranking = getRanking(pagination, index)),
      );
      setRepoList(list);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="container py-5 mt-5">
            <div className="row">
              <div className="col">
                <RepoList list={repoList.slice(0, 50)} />
              </div>
              <div className="col">
                <RepoList list={repoList.slice(50)} />
              </div>
            </div>
          </div>
          <Pagination page={pagination.page} />
        </>
      )}
    </>
  );
}

function getRanking({ page, per_page }: PaginationInfo, index: number) {
  return (page - 1) * per_page + index + 1;
}

export default App;
