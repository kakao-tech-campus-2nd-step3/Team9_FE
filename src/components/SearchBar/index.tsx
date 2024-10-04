import styled from '@emotion/styled';
import { HEADER_HEIGHT } from '../Header';
import { useState } from 'react';
import CancelIcon from '@/assets/icons/cancel-filled-gray.svg?react';
import FavoriteIcon from '@/assets/icons/favorite-default.svg?react';
import ArrowBackIcon from '@/assets/icons/arrow-back.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';

const SEARCH_PLACEHOLDER = '작품/작가 외 검색은 #을 붙여주세요';

interface SearchBarProps {
  includeFavorite?: boolean;
}

const SearchBar = ({ includeFavorite = false }: SearchBarProps) => {
  const [searchWord, setSearchWord] = useState<string>('');

  return (
    <SearchBarWrapper>
      <ArrowBackIcon />
      <InputBox>
        <StyledSearchIcon />
        <Input
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
            //   console.log(e.target.value); // test
          }}
        />
        {searchWord.trim().length > 0 && (
          <StyledCancelIcon
            onClick={(e) => {
              e.preventDefault();
              setSearchWord('');
            }}
          />
        )}
      </InputBox>
      {includeFavorite && <FavoriteIcon />}
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
  border-radius: 2px;
  border: 1px solid var(--color-gray-02);
  font-size: var(--font-size-sm);
`;

const Input = styled.input`
  width: 100%;
  align-self: stretch;
  margin: 0 30px 0 34px;
  outline: none;

  &::placeholder {
    color: var(--color-gray-03);
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 8px;
`;

const StyledCancelIcon = styled(CancelIcon)`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 8px;
`;
