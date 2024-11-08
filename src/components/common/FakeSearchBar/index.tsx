import styled from '@emotion/styled';

import SearchIcon from '@/assets/icons/search.svg?react';
import IconButton from '@/components/common/IconButton';
import { HEADER_HEIGHT } from '@/components/layouts/Header';

const SEARCH_PLACEHOLDER = '작품/작가 외 검색은 #을 붙여주세요';

interface FakeSearchBarProps {
  modalOpen: () => void;
}

const FakeSearchBar = ({ modalOpen }: FakeSearchBarProps) => {
  return (
    <SearchBarWrapper>
      <InputBox onClick={modalOpen}>
        <StyledSearchIcon />
        <Input type="text" placeholder={SEARCH_PLACEHOLDER} />
      </InputBox>
      <IconButton icon="favorite-default" />
    </SearchBarWrapper>
  );
};

export default FakeSearchBar;

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
  cursor: pointer;
`;

const InputBox = styled.div`
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  flex: 1 0 0;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-gray-md);
  font-size: var(--font-size-sm);
`;

const Input = styled.input`
  width: 100%;
  align-self: stretch;
  margin: 0 30px 0 34px;
  outline: none;
  border: none;

  &::placeholder {
    color: var(--color-gray-dk);
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 8px;
`;
