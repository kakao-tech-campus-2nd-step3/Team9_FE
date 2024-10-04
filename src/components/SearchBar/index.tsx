import styled from '@emotion/styled';
import { HEADER_HEIGHT } from '../Header';
import { useState } from 'react';

const SEARCH_PLACEHOLDER = '작품/작가 외 검색은 #을 붙여주세요';

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState<string>('');

  return (
    <SearchBarWrapper>
      <span>arrow-back</span>
      <Input
        type="text"
        placeholder={SEARCH_PLACEHOLDER}
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
          //   console.log(e.target.value); // test
        }}
      />
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

const Input = styled.input`
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 2px;
  border: 1px solid var(--color-gray-02);
  font-size: var(--font-size-xs);
  outline: none;

  &::placeholder {
    color: var(--color-gray-03);
  }
`;
