import SearchBar from '@/components/layouts/SearchBar';
import styled from '@emotion/styled';
import RecentSearch from './RecentSearch';

interface SearchModalProps {
  modalClose: () => void;
}

const SearchModal = ({ modalClose }: SearchModalProps) => {
  return (
    <ModalWrapper>
      <SearchBar modalClose={modalClose} />
      <SearchWrapper>
        <RecentSearch />
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
  padding: 0 16px;
  z-index: 1000;
`;

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;
