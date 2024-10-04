import styled from '@emotion/styled';
import FavoriteDefault from '@/assets/icons/favorite-default.svg';
import { Image } from '@chakra-ui/react';

interface Thumbnail {
  ratio?: 'square' | 'default';
}

export const Thumbnail = ({ ratio = 'default' }: Thumbnail) => {
  return (
    <Wrapper ratio={ratio}>
      <HeartImage src={FavoriteDefault} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ ratio: 'square' | 'default' }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ ratio }) => (ratio === 'square' ? '1/1' : '4/5')};
  background-color: var(--color-gray-01);
  border-radius: 0.2rem;
`;

const HeartImage = styled(Image)`
  position: absolute;
  left: 88%;
  top: 84%;
  width: 1.6rem;
`;
