import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <>
      SearchResults
      <h1>{query}</h1>
    </>
  );
};

export default SearchResults;
