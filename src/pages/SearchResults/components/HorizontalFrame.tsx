import ArtistItem from '@/components/common/ArtistItem';
import ProductItem from '@/components/common/ProductItem';
import { SearchArtist, SearchWork } from '@/types/index';
import styled from '@emotion/styled';

interface HorizontalFrameProps {
  children: SearchArtist[] | SearchWork[];
}

const HorizontalFrame = ({ children }: HorizontalFrameProps) => {
  return (
    <HorizontalScrollWrapper>
      {children.map((item) => (
        <StyledItemWrapper key={item.id}>
          {'title' in item && (
            <ProductItem
              author={item.artist}
              title={item.title}
              src={item.src}
              price={item.price}
              key={item.id}
              alt="artwork"
            />
          )}
          {'name' in item && (
            <ArtistItem
              artistId={item.id}
              author={item.name}
              src={item.src}
              like={item.totalLikes}
              follower={item.totalFollowers}
              key={item.id}
              isFollow={item.followed}
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
