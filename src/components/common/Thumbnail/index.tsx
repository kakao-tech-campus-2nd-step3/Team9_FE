import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

import FavoriteDefault from '@/assets/icons/favorite-default.svg?react';
import { useNavigate } from 'react-router-dom';

interface ThumbnailProps {
  ratio?: 'square' | 'default';
  src?: string;
  alt?: string;
  heart?: boolean;
  handleHeartClick?: () => void;
  productLiked?: boolean;
  isPostStatus?: string;
  isDeleteStatus?: string;
  id: number;
  type: 'artist' | 'product';
}

const Thumbnail = ({
  ratio = 'default',
  src,
  alt = 'thumbnail image',
  heart,
  handleHeartClick,
  productLiked,
  isPostStatus,
  isDeleteStatus,
  id,
  type,
}: ThumbnailProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper
      ratio={ratio}
      onClick={() =>
        type === 'product' ? navigate(`/products/${id}`) : navigate(`/artists/${id}`)
      }
    >
      {src && <StyledImage src={src} alt={alt} />}
      {heart && (
        <FavoriteWrapper
          onClick={(e) => {
            e.stopPropagation();
            handleHeartClick?.();
          }}
          disabled={isPostStatus === 'pending' || isDeleteStatus === 'pending'}
        >
          <StyledFavoriteContainer className={productLiked ? 'active' : ''}>
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
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FavoriteWrapper = styled.button`
  position: absolute;
  top: 80%;
  right: 5%;
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
