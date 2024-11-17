import styled from '@emotion/styled';

import SearchBar from '@/components/layouts/SearchBar';
import { Z_INDEX } from '@/styles/constants';
import Ad from './Ad';
import PopularSearch from './PopularSearch';
import RecentSearch from './RecentSearch';

interface SearchModalProps {
  modalClose: () => void;
}

const SearchModal = ({ modalClose }: SearchModalProps) => {
  const searchSectionList: React.ReactNode[] = [<RecentSearch />, <PopularSearch />, <Ad />];

  return (
    <ModalWrapper>
      <SearchBar goBack={modalClose} />
      <SectionsWrapper>
        {searchSectionList.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </SectionsWrapper>
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

const SectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    border-bottom: 1px solid var(--color-gray-lt);
  }

  & > *:last-child {
    border-bottom: none;
  }
`;
