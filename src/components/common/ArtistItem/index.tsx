import styled from '@emotion/styled';

import FollowButton from '@/components/common/FollowButton';
import Thumbnail from '@/components/common/Thumbnail';
import LikesAndFollowers from '../LikesAndFollowers';
import { useState } from 'react';

interface ArtistItemProps {
  author: string;
  like: number;
  follower: number;
  size?: 'large' | 'default';
  src?: string;
  alt?: string;
}

const ArtistItem = ({ author, like, follower, size = 'default', src, alt }: ArtistItemProps) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Wrapper size={size}>
      <Thumbnail ratio="square" src={src} alt={alt} />
      <MidWrapper>
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>{author}</p>
        <FollowButton isFollowed={isFollowed} onClick={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? '팔로잉' : '팔로우'}
        </FollowButton>
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
