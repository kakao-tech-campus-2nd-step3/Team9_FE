import styled from '@emotion/styled';

import SearchBar from '@/components/layouts/SearchBar';
import HorizontalLine from '@/components/styles/HorizontalLine';
import { Z_INDEX } from '@/styles/constants';
import PopularSearch from './PopularSearch';
import RecentSearch from './RecentSearch';
import Ad from './SearchAd';

interface SearchModalProps {
  modalClose: () => void;
}

const SearchModal = ({ modalClose }: SearchModalProps) => {
  return (
    <ModalWrapper>
      <SearchBar goBack={modalClose} />
      <SearchWrapper>
        <RecentSearch />
        <HorizontalLine />
        <PopularSearch />
        <HorizontalLine />
        <Ad />
      </SearchWrapper>
    </ModalWrapper>
  );
};

export default SearchModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  z-index: ${Z_INDEX.Modal};
`;

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
