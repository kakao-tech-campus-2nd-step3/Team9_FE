import styled from '@emotion/styled';
import { useState } from 'react';

import FakeSearchBar from '@/components/common/FakeSearchBar';
import SearchModal from '@/components/common/SearchModal';
import { CATEGORY_LIST, CURATION_LIST } from '@/constants/categories';
import * as G from '@/styles/globalStyles';
import CategoryItem from './components/CategoryItem';
import CurationItem from './components/CurationItem';

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      <FakeSearchBar modalOpen={handleModalOpen} />
      {isModalOpen && <SearchModal modalClose={() => setIsModalOpen(false)} />}
      <G.Grid col={4}>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.title} title={category.title} src={category.src} />
        ))}
      </G.Grid>
      <G.Gap height={12} />
      <CurationWrapper>
        {CURATION_LIST.map((curation) => (
          <CurationItem key={curation.title} title={curation.title} des={curation.des} />
        ))}
      </CurationWrapper>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div`
  width: 100%;
`;

const CurationWrapper = styled.ul`
  height: auto;
  width: 100%;
  margin-bottom: 54px;
`;
