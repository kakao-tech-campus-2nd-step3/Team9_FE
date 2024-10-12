import styled from '@emotion/styled';
import CategoryTabElement from '@/components/common/CategoryTabBar/CategoryTabElement';

export const TwoCategoryTabs = () => {
  return (
    <Wrapper>
      <CategoryTabElement color="black" children="작품" />
      <CategoryTabElement color="white" children="작가" />
    </Wrapper>
  );
};

export const ThreeCategoryTabs = () => {
  return (
    <Wrapper>
      <CategoryTabElement color="black" children="통합" />
      <CategoryTabElement color="white" children="작품" />
      <CategoryTabElement color="white" children="작가" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-white);
  color: var(--color-black);
  padding: 0 1.6rem;
  width: 36rem;
  height: 4.4rem;
  font-size: var(--font-size-sm);
  border-bottom: 0.1rem solid var(--color-gray-md);
  display: flex;
  justify-content: center;
  align-items: center;
`;
