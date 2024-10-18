import { useSearchParams, useNavigate } from 'react-router-dom';
import SearchBar from '@/components/layouts/SearchBar';
import CategoryTabBar from './components/CategoryTabBar';
import SwiperFrame from './components/SwiperFrame';
import searchWork from '@/apis/data/searchWork';
import searchArtist from '@/apis/data/searchArtist';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
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
