import styled from '@emotion/styled';

interface CategoryItemProps {
  title: string;
  src: string;
}

const CategoryItem = ({ title, src }: CategoryItemProps) => {
  return (
    <Wrapper>
      <CategoryThumbnail>{src && <img src={src} alt="Category thumbnail" />}</CategoryThumbnail>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default CategoryItem;

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CategoryThumbnail = styled.div`
  width: 64px;
  aspect-ratio: 1 / 1;
  border-radius: 50px;
  overflow: hidden;
  background-color: var(--color-gray-lt);

  img {
    object-fit: cover;
    width: 64px;
  }
`;

const Title = styled.p`
  font-size: var(--font-size-sm);
  display: inline;
  white-space: pre-wrap;
  text-align: center;
`;
