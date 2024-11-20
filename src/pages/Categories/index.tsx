import styled from '@emotion/styled';

import FakeSearchBar from '@/components/common/FakeSearchBar';
import SearchModal from '@/components/common/SearchModal';
import { CATEGORY_LIST, CURATION_LIST } from '@/constants/categories';
import * as G from '@/styles/globalStyles';
import CategoryItem from './components/CategoryItem';
import CurationItem from './components/CurationItem';

const Categories = () => {
  return (
    <Wrapper>
      <FakeSearchBar />
      <SearchModal />
      <CategoryGrid>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.title} title={category.title} src={category.src} />
        ))}
      </CategoryGrid>
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

const CategoryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 16px 16px 32px 16px;
  gap: 24px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const CurationWrapper = styled.ul`
  height: auto;
  width: 100%;
  margin-bottom: 54px;
`;
