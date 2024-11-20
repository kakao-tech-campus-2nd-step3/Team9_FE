import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CancelIcon from '@/assets/icons/cancel-filled.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import IconButton from '@/components/common/IconButton';
import { SEARCH_ARRAY_KEY } from '@/constants/search';
import { RouterPath } from '@/routes/path';
import useSearchModalStore from '@/store/useSearchModalStore';
import { HEIGHTS, Z_INDEX } from '@/styles/constants';

const SEARCH_PLACEHOLDER = '작품/작가 외 검색은 #을 붙여주세요';
const MAX_RECENT_SEARCHES = 10;

interface SearchBarProps {
  includeBack?: boolean;
  includeFavorite?: boolean;
  goBack?: () => void; // SearchResult에서만 전달됨
}

const SearchBar = ({ includeBack = true, includeFavorite = false, goBack }: SearchBarProps) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchWord = searchParams.get('query') || '';
  const { isModalOpen, setIsModalOpen } = useSearchModalStore();

  const { register, handleSubmit, watch, setValue, formState } = useForm<{ searchWord: string }>({
    defaultValues: {
      searchWord: initialSearchWord,
    },
    mode: 'onSubmit',
  });

  // test
  useEffect(() => {
    console.log('isModalOpen: ', isModalOpen);
  }, [isModalOpen]);

  const generateRandomKey = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleClickBack = () => {
    if (goBack) goBack(); // SearchResult에서만 전달됨 // pathname 추출해서 해도 된다 생각했는데 안 됨
    setIsModalOpen(false);
  };

  const handleRemoveSearchWord = (e: React.MouseEvent) => {
    console.log('called');
    e.preventDefault();
    setValue('searchWord', '');
    setIsModalOpen(true);
  };

  const activeEnter = (data: { searchWord: string }) => {
    const { searchWord } = data;

    // 검색 기록 업데이트
    const storedData = localStorage.getItem(SEARCH_ARRAY_KEY);
    let searchArray = storedData ? JSON.parse(storedData) : [];
    const existingIndex = searchArray.findIndex(
      (item: { key: string; keyword: string }) => item.keyword === searchWord,
    );

    if (existingIndex !== -1) {
      searchArray.splice(existingIndex, 1);
    }

    const newItem = { keyword: searchWord, key: generateRandomKey() };
    searchArray = [newItem, ...searchArray];
    if (searchArray.length > MAX_RECENT_SEARCHES) {
      searchArray = searchArray.slice(0, MAX_RECENT_SEARCHES);
    }

    localStorage.setItem(SEARCH_ARRAY_KEY, JSON.stringify(searchArray));

    // 검색 실행
    setSearchParams({ query: searchWord });
    navigate(`/${RouterPath.results}?query=${searchWord}`);
  };

  const nowSearchWord = watch('searchWord');

  return (
    <SearchBarWrapper>
      {includeBack && <IconButton icon="arrow-back" onClick={handleClickBack} />}
      <InputBox onSubmit={handleSubmit(activeEnter)}>
        <StyledSearchIcon />
        <Input
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          {...register('searchWord', {
            validate: (value) => value.trim() !== '' || '공백만 입력할 수 없습니다.',
          })}
          onClick={() => setIsModalOpen(true)}
        />
        {nowSearchWord.trim().length > 0 && <CancelIconButton onClick={handleRemoveSearchWord} />}
      </InputBox>
      {formState.errors.searchWord && (
        <ErrorMessage>{formState.errors.searchWord.message}</ErrorMessage>
      )}
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

const ErrorMessage = styled.div`
  color: red;
  font-size: var(--font-size-sm);
  margin-top: 4px;
`;
