import ArtistItem from '@/components/common/ArtistItem';
import ProductItem from '@/components/common/ProductItem';
import { SearchArtistInfo, SearchProductInfo } from '@/types/index';
import styled from '@emotion/styled';

interface HorizontalFrameProps {
  children: SearchArtistInfo[] | SearchProductInfo[];
}

const HorizontalFrame = ({ children }: HorizontalFrameProps) => {
  return (
    <HorizontalScrollWrapper>
      {children.map((item) => (
        <StyledItemWrapper key={item.id}>
          {'name' in item && (
            <ProductItem
              id={item.id}
              author={item.artist}
              title={item.name}
              src={item.thumbnailUrl}
              price={item.price}
              key={item.id}
              alt="artwork"
              isLiked={false}
            />
          )}
          {'nickname' in item && (
            <ArtistItem
              artistId={item.id}
              author={item.nickname}
              src={item.artistImageUrl}
              like={item.totalLikes}
              follower={item.totalFollowers}
              key={item.id}
              isFollow={item.isFollowing}
              alt="artist"
            />
          )}
        </StyledItemWrapper>
      ))}
    </HorizontalScrollWrapper>
  );
};

export default HorizontalFrame;

const HorizontalScrollWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0 16px;
  gap: 16px;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledItemWrapper = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 100%;
`;
