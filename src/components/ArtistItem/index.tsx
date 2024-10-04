import styled from '@emotion/styled';
import { Thumbnail } from './Thumbnail';
import LikeFollowers from './LikeFollowers';
import FollowButton from '../FollowButton';

interface ArtistItemProps {
  size?: 'large' | 'default'; // themeNum을 optional로 설정
}

export const ArtistItem = ({ size = 'default' }: ArtistItemProps) => {
  return (
    <Wrapper size={size}>
      <Thumbnail ratio="square" />
      <MidWrapper>
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>작가</p>
        <FollowButton color="white" children="팔로우" />
      </MidWrapper>
      <LikeFollowers />
    </Wrapper>
  );
};

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
