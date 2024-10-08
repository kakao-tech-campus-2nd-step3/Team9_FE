import styled from '@emotion/styled';
import { Image } from '@chakra-ui/react';
import FavoriteDefault from '@/assets/icons/favorite-default.svg';

interface ThumbnailProps {
  ratio?: 'square' | 'default';
  src?: string;
  alt?: string;
  heart?: boolean;
}

const Thumbnail = ({
  ratio = 'default',
  src,
  alt = 'thumbnail image',
  heart = false,
}: ThumbnailProps) => {
  return (
    <Wrapper ratio={ratio}>
      {src && <StyledImage src={src} alt={alt} />}
      {heart && <HeartImage src={FavoriteDefault} />}
    </Wrapper>
  );
};

export default Thumbnail;

const Wrapper = styled.div<{ ratio: 'square' | 'default' }>`
  width: 100%;
  position: relative;
  aspect-ratio: ${({ ratio }) => (ratio === 'square' ? '1/1' : '4/5')};
  background-color: var(--color-gray-01);
  border-radius: 0.2rem;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeartImage = styled(Image)`
  position: absolute;
  left: 88%;
  top: 84%;
  width: 1.6rem;
`;
