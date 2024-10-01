import styled from '@emotion/styled';
import { ThumbnailSquare } from './Thumbnail';
import LikeFollowers from './LikeFollowers';
import FollowButton from '../FollowButton';
interface ArtistItemProps {
  themeNum: 'one' | 'two';
}

export const ArtistItem = ({ themeNum }: ArtistItemProps) => {
  return (
    <Wrapper themeNum={themeNum}>
      <ThumbnailSquare />
      <MidWrapper>
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>작가</p>
        <FollowButton color="white" children="팔로우" />
      </MidWrapper>
      <LikeFollowers />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ themeNum: 'one' | 'two' }>`
  width: ${({ themeNum }) => (themeNum === 'one' ? '15.8rem' : '14rem')};
  height: ${({ themeNum }) => (themeNum === 'one' ? '22.5em' : '20.7em')};
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
