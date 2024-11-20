import styled from '@emotion/styled';

import SearchBar from '@/components/layouts/SearchBar';
import useSearchModalStore from '@/store/useSearchModalStore';
import { HEIGHTS, Z_INDEX } from '@/styles/constants';
import Ad from './Ad';
import PopularSearch from './PopularSearch';
import RecentSearch from './RecentSearch';

const SearchModal = () => {
  const { isModalOpen } = useSearchModalStore();
  const searchSectionList: React.ReactNode[] = [<RecentSearch />, <PopularSearch />, <Ad />]; // 각 섹션을 리스트로 관리

  // todo: 검색어 존재 시 자동 완성 모달 뜨게

  return (
    <>
      {isModalOpen && (
        <ModalLayout>
          <SearchBar />
          <SectionsWrapper>
            {searchSectionList.map((section, index) => (
              <div key={index}>{section}</div>
            ))}
          </SectionsWrapper>
        </ModalLayout>
      )}
    </>
  );
};

export default SearchModal;

const ModalLayout = styled.div`
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
  margin-top: ${HEIGHTS.HEADER};
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
