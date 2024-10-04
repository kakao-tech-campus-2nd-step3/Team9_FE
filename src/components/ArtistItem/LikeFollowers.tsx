import styled from '@emotion/styled';
import FavoriteDefault from '@/assets/icons/favorite-default.svg';
import { Image } from '@chakra-ui/react';

interface LikeFollowersProps {
  like: string;
  follower: string;
}

const LikeFollowers = ({ like, follower }: LikeFollowersProps) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Image src={FavoriteDefault} />
        <div>{like}</div>
      </LeftWrapper>
      <Divider />
      <RightWrapper>
        <p style={{ color: 'var(--color-gray-03)' }}>팔로워</p>
        <p>{follower}</p>
      </RightWrapper>
    </Wrapper>
  );
};

export default LikeFollowers;

const Wrapper = styled.div`
  font-size: var(--font-size-xxs);
  display: flex;
  flex-direction: row;
  width: 5.6rem;
  height: 2.6rem;
  justify-content: space-between;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 2.6rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.6rem;
`;

const Divider = styled.div`
  width: 0.1rem;
  height: 1.6rem;
  background-color: var(--color-gray-03);
  margin: 0 0.8rem;
`;
