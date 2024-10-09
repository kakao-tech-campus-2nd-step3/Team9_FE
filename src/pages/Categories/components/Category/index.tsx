import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface CategoryProps {
  des: string;
  src: string;
}

const Category = ({ des, src }: CategoryProps) => {
  des = des.replace('/', '/\n');

  return (
    <Wrapper>
      <RoundImage src={src} />
      <DesWrapper>{des}</DesWrapper>
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  width: 6.4rem;
  height: 10.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
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
`;
