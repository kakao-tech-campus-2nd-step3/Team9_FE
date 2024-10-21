import { useSearchParams, useNavigate } from 'react-router-dom';
import SearchBar from '@/components/layouts/SearchBar';
import CategoryTabBar from './components/CategoryTabBar';
import SwiperFrame from './components/SwiperFrame';
import searchWork from '@/apis/data/searchWork';
import searchArtist from '@/apis/data/searchArtist';
import { RouterPath } from '@/routes/path';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(RouterPath.categories);
  };

  return (
    <>
      <SearchBar goBack={goBack} />
      <CategoryTabBar /> <h1>query : {query}</h1>
      <SwiperFrame children={searchWork} />
      <SwiperFrame children={searchArtist} />
    </>
  );
};

export default SearchResults;
