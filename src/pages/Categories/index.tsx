import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import FakeSearchBar from '@/components/common/FakeSearchBar';
import SearchModal from '@/components/common/SearchModal';
import Gap from '@/components/styles/Gap';
import Grid from '@/components/styles/Grid';
import { categoryList } from '@/constants/categories';
import Category from './components/CategoryItem';

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      <FakeSearchBar modalOpen={handleModalOpen} />
      {isModalOpen && <SearchModal modalClose={() => setIsModalOpen(false)} />}
      <Grid col={4}>
        {categoryList.map((category) => (
          <Category key={category.id} src={category.src} des={category.des} />
        ))}
      </Grid>
      <Gap height={18} />
      <CurationWrapper>
        <CurationItem>
          <Title>매거진</Title>
          <Des>숨겨진 무한의 가치를 발견하고 싶다면</Des>
        </CurationItem>
        <Gap height={2} />
        <CurationItem>
          <Title>아티스트 그라운드</Title>
          <Des>내 취향대로 작가 골라보기</Des>
        </CurationItem>
      </CurationWrapper>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div`
  width: 100%;
`;

const CurationItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px;
  min-height: 54px;
  gap: 8px;
`;

const Title = styled(Text)`
  font-size: var(--font-size-md);
  font-weight: 600;
  line-height: 1.2;
`;

const Des = styled(Text)`
  font-size: var(--font-size-sm);
  line-height: 1.2;
`;

const CurationWrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 54px;
`;
