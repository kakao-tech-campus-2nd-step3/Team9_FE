import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CancelIcon from '@/assets/icons/cancel-filled.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import IconButton from '@/components/common/IconButton';
import { SEARCH_ARRAY_KEY } from '@/constants/search';
import { RouterPath } from '@/routes/path';
import useSearchModalStore from '@/store/useSearchModalStore';
import { HEIGHTS, Z_INDEX } from '@/styles/constants';
import { useEffect } from 'react';

const SEARCH_PLACEHOLDER = '작품/작가 외 검색은 #을 붙여주세요';
const MAX_RECENT_SEARCHES = 10;

type SearchBarProps = {
  includeBack?: boolean;
  includeFavorite?: boolean;
  goBack?: () => void; // SearchResult에서만 전달됨
};
type FormValues = {
  searchWord: string;
};

const SearchBar = ({ includeBack = true, includeFavorite = false, goBack }: SearchBarProps) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchWord = searchParams.get('query') || '';
  const { setIsModalOpen } = useSearchModalStore();

  const { register, handleSubmit, watch, setValue } = useForm<{ searchWord: string }>({
    defaultValues: {
      searchWord: initialSearchWord,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (!location.pathname.includes(RouterPath.results) && searchParams.has('query')) {
      setSearchParams({});
    }
  }, [location.pathname]);

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setValue('searchWord', query);
  }, [searchParams]);

  const searchWord = watch('searchWord');

  const generateRandomKey = () => Math.random().toString(36).substr(2, 9);

  const handleClickBack = () => {
    if (goBack) goBack();
    setIsModalOpen(false);
  };

  const handleRemoveSearchWord = (e: React.MouseEvent) => {
    e.preventDefault();
    setValue('searchWord', '');
    setIsModalOpen(true);
  };

  const onSubmit = (data: FormValues) => {
    const currentSearchWord = data.searchWord.trim();

    if (currentSearchWord) {
      // 검색 기록 업데이트
      const storedData = localStorage.getItem(SEARCH_ARRAY_KEY);
      let searchArray = storedData ? JSON.parse(storedData) : [];
      const existingIndex = searchArray.findIndex(
        (item: { key: string; keyword: string }) => item.keyword === currentSearchWord,
      );

      if (existingIndex !== -1) {
        searchArray.splice(existingIndex, 1);
      }

      const newItem = { keyword: currentSearchWord, key: generateRandomKey() };
      searchArray = [newItem, ...searchArray];
      if (searchArray.length > MAX_RECENT_SEARCHES) {
        searchArray = searchArray.slice(0, MAX_RECENT_SEARCHES);
      }

      localStorage.setItem(SEARCH_ARRAY_KEY, JSON.stringify(searchArray));
      setSearchParams({ query: currentSearchWord });
      navigate(`/${RouterPath.results}?query=${currentSearchWord}`);
    }
  };

  return (
    <SearchBarWrapper>
      {includeBack && <IconButton icon="arrow-back" onClick={handleClickBack} />}
      <InputBox onSubmit={handleSubmit(onSubmit)}>
        <StyledSearchIcon />
        <Input
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          {...register('searchWord')}
          onClick={() => setIsModalOpen(true)}
        />
        {searchWord?.trim().length > 0 && <CancelIconButton onClick={handleRemoveSearchWord} />}
      </InputBox>
      {includeFavorite && <IconButton icon="favorite-default" />}
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.Header};
  top: 0;
  width: 100%;
  height: ${HEIGHTS.HEADER};
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: var(--color-white);
`;

const InputBox = styled.form`
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  flex: 1 0 0;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-gray-md);
  cursor: text;
`;

const Input = styled.input`
  width: 100%;
  align-self: stretch;
  margin: 0 30px 0 34px;
  outline: none;
  border: none;
  font-size: var(--font-size-sm);

  &::placeholder {
    color: var(--color-gray-dk);
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 8px;
  cursor: pointer;
`;

const CancelIconButton = styled(CancelIcon)`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 8px;
  cursor: pointer;
  color: var(--color-gray-dk);
`;
