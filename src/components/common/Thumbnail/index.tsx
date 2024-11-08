import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import FavoriteDefault from '@/assets/icons/favorite-default.svg?react';

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
  const [isLike, setIsLike] = useState(false);

  return (
    <Wrapper ratio={ratio}>
      {src && <StyledImage src={src} alt={alt} />}
      {heart && (
        <FavoriteWrapper onClick={() => setIsLike(!isLike)}>
          <StyledFavoriteContainer className={isLike ? 'active' : ''}>
            <FavoriteDefault />
          </StyledFavoriteContainer>
        </FavoriteWrapper>
      )}
    </Wrapper>
  );
};

export default Thumbnail;

const Wrapper = styled.div<{ ratio: 'square' | 'default' }>`
  width: 100%;
  position: relative;
  aspect-ratio: ${({ ratio }) => (ratio === 'square' ? '1/1' : '4/5')};
  background-color: var(--color-gray-lt);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FavoriteWrapper = styled.div`
  position: absolute;
  top: 110px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const StyledFavoriteContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: var(--color-white);
      transition: fill 0.3s;
    }
  }

  &.active {
    svg path {
      fill: var(--color-red);
    }
  }
`;
