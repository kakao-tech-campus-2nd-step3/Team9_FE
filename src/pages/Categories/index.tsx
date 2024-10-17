import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import categories from '@/apis/data/categories';
import Gap from '@/components/styles/Gap';
import Grid from '@/components/styles/Grid';
import Category from './components/CategoryItem';
import { useState } from 'react';
import FakeSearchBar from '@/components/common/FakeSearchBar';
import SearchModal from '@/components/common/SearchModal';

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
        {categories.map((category) => (
          <Category key={category.id} src={category.src} des={category.des} />
        ))}
      </Grid>
      <Gap height={18} />
      <CurationItem>
        <Title>매거진</Title>
        <Des>숨겨진 무한의 가치를 발견하고 싶다면</Des>
      </CurationItem>
      <Gap height={2} />
      <CurationItem>
        <Title>아티스트 그라운드</Title>
        <Des>내 취향대로 작가 골라보기</Des>
      </CurationItem>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div``;

const CurationItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 8px;
`;

const Title = styled(Text)`
  font-size: var(--font-size-md);
  font-weight: 600;
`;

const Des = styled(Text)`
  font-size: var(--font-size-sm);
`;
