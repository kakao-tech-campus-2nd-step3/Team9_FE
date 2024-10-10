import Category from './components/CategoryItem';
import Grid from '@/components/layout/Grid';
import styled from '@emotion/styled';
import SearchBar from '@/components/SearchBar';
import Gap from '@/components/layout/Gap';
import { Text } from '@chakra-ui/react';
import categories from '@/apis/data/categories';

const Categories = () => {
  return (
    <Wrapper>
      <SearchBar includeFavorite={true} />
      <Grid col={4}>
        {categories.map((category) => (
          <Category key={category.id} src={category.src} des={category.des} />
        ))}
      </Grid>
      <Gap height={18} />
      <SectionWrapper>
        <Title>매거진</Title>
        <Des>숨겨진 무한의 가치를 발견하고 싶다면</Des>
      </SectionWrapper>
      <Gap height={2} />
      <SectionWrapper>
        <Title>아티스트 그라운드</Title>
        <Des>내 취향대로 작가 골라보기</Des>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div``;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px 32px 16px;
  gap: 10px;
`;

const Title = styled(Text)`
  font-size: var(--font-size-md);
  font-weight: bold;
`;

const Des = styled(Text)`
  font-size: var(--font-size-sm);
`;
