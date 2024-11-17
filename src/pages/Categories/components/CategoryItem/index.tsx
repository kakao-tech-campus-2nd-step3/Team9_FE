import styled from '@emotion/styled';

interface CategoryItemProps {
  src: string;
  des: string;
}

const CategoryItem = ({ src, des }: CategoryItemProps) => {
  return (
    <Wrapper>
      <CategoryThumbnail src={src} alt="Category thumbnail" />
      <DesWrapper>{des}</DesWrapper>
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

const CategoryThumbnail = styled.img`
  aspect-ratio: 1/1;
  width: 64px;
  border-radius: 100%;
  object-fit: cover;
  background-color: var(--color-gray-lt);
`;

const DesWrapper = styled.p`
  font-size: var(--font-size-sm);
  display: inline;
  white-space: pre-wrap;
  text-align: center;
`;
