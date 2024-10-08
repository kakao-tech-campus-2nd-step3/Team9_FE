import styled from '@emotion/styled';
import { useState } from 'react';

import CancelIcon from '@/assets/icons/cancel-filled-gray.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import IconButton from '@/components/IconButton';
import { HEADER_HEIGHT } from '../Header';

const SEARCH_PLACEHOLDER = '작품/작가 외 검색은 #을 붙여주세요';

interface SearchBarProps {
  includeFavorite?: boolean;
}

const SearchBar = ({ includeFavorite = false }: SearchBarProps) => {
  const [searchWord, setSearchWord] = useState<string>('');

  const handleRemoveSearchWord = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchWord('');
  };

  return (
    <SearchBarWrapper>
      <IconButton icon="arrow-back" />
      <InputBox>
        <StyledSearchIcon />
        <Input
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        {searchWord.trim().length > 0 && <CancelIconButton onClick={handleRemoveSearchWord} />}
      </InputBox>
      {includeFavorite && <IconButton icon="favorite-default" />}
    </SearchBarWrapper>
  );
};

export default SearchBar;

// styles
const SEARCHBAR_HEIGHT = HEADER_HEIGHT;

const SearchBarWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${SEARCHBAR_HEIGHT};
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const InputBox = styled.div`
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  flex: 1 0 0;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-gray-medium);
  font-size: var(--font-size-sm);
`;

const Input = styled.input`
  width: 100%;
  align-self: stretch;
  margin: 0 30px 0 34px;
  outline: none;

  &::placeholder {
    color: var(--color-gray-deep);
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 8px;
`;

const CancelIconButton = styled(CancelIcon)`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 8px;
  cursor: pointer;
`;
