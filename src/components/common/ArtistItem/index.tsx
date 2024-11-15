import styled from '@emotion/styled';

import useDeleteFollow from '@/apis/users/useDeleteFollow';
import usePostFollow from '@/apis/users/usePostFollow';
import FollowButton from '@/components/common/FollowButton';
import Thumbnail from '@/components/common/Thumbnail';
import { useState } from 'react';
import LikesAndFollowers from '../LikesAndFollowers';

type ArtistItemProps = {
  artistId: number;
  author: string;
  like: number;
  follower: number;
  src?: string;
  alt?: string;
  isFollow: boolean;
};

const ArtistItem = ({ artistId, author, like, follower, src, alt, isFollow }: ArtistItemProps) => {
  const [isFollowed, setIsFollowed] = useState(isFollow);

  const { mutate: postFollow, status: isPostStatus } = usePostFollow();
  const { mutate: deleteFollow, status: isDeleteStatus } = useDeleteFollow();

  const handleFollowClick = () => {
    if (isFollowed) {
      deleteFollow(artistId, {
        onSuccess: () => {
          setIsFollowed(false);
        },
        onError: (error) => {
          console.error('Failed to delete follow:', error);
          alert('팔로우 취소에 실패했습니다.');
        },
      });
    } else {
      postFollow(artistId, {
        onSuccess: () => {
          setIsFollowed(true);
        },
        onError: (error) => {
          console.error('Failed to post follow:', error);
          alert('팔로우에 실패했습니다.');
        },
      });
    }
  };

  return (
    <Wrapper>
      <Thumbnail ratio="square" src={src} alt={alt} id={artistId} type="artist" />
      <MidWrapper>
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>{author}</p>
        <FollowButton
          isFollowed={isFollowed}
          onClick={handleFollowClick}
          disabled={isPostStatus === 'pending' || isDeleteStatus === 'pending'}
        >
          {isFollowed ? '팔로잉' : '팔로우'}
        </FollowButton>
      </MidWrapper>
      <LikesAndFollowers like={like} follower={follower} />
    </Wrapper>
  );
};

export default ArtistItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 170px;
  background-color: var(--color-white);
`;

const MidWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 17px;
  margin: 0.8rem 0;
`;
