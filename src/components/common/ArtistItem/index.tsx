import styled from '@emotion/styled';

import FollowButton from '@/components/common/FollowButton';
import Thumbnail from '@/components/common/Thumbnail';
import LikesAndFollowers from '../LikesAndFollowers';

interface ArtistItemProps {
  author: string;
  like: string;
  follower: string;
  size?: 'large' | 'default';
  src?: string;
  alt?: string;
}

const ArtistItem = ({ author, like, follower, size = 'default', src, alt }: ArtistItemProps) => {
  return (
    <Wrapper size={size}>
      <Thumbnail ratio="square" src={src} alt={alt} />
      <MidWrapper>
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>{author}</p>
        <FollowButton color="white" children="팔로우" />
      </MidWrapper>
      <LikesAndFollowers like={like} follower={follower} />
    </Wrapper>
  );
};

export default ArtistItem;

const Wrapper = styled.div<{ size: 'large' | 'default' }>`
  width: ${({ size }) => (size === 'large' ? '15.8rem' : '14rem')};
  height: ${({ size }) => (size === 'large' ? '22.5em' : '20.7em')};
  background-color: var(--color-white);
`;

const MidWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1.7rem;
  margin: 0.8rem 0;
`;
