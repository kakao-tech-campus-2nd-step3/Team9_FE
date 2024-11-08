import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface CategoryItemProps {
  des: string;
  src: string;
}

const CategoryItem = ({ des, src }: CategoryItemProps) => {
  des = des.replace('/', '/\n');

  return (
    <Wrapper>
      <RoundImage src={src} />
      <DesWrapper>{des}</DesWrapper>
    </Wrapper>
  );
};

export default CategoryItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;

const RoundImage = styled(Image)`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
`;

const DesWrapper = styled.p`
  font-size: var(--font-size-sm);
  display: inline;
  white-space: pre-wrap;
  text-align: center;
`;
