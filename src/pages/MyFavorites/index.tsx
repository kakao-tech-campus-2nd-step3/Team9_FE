import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import useGetFollow from '@/apis/users/useGetFollow';
import useGetWishList from '@/apis/users/useGetWishes';
import ArtistItem from '@/components/common/ArtistItem';
import CategoryTabBar from '@/components/common/CategoryTabBar';
import Loader from '@/components/common/Loader';
import ProductItem from '@/components/common/ProductItem';
import * as G from '@/styles/globalStyles';
import { SearchProductInfo, User } from '@/types';

const MyFavorites = () => {
  const categoryList = ['작품', '작가'];
  const [selectedTab, setSelectedTab] = useState('작품');
  const { data: artistResults, status, refetch } = useGetFollow();
  const { data: wishListResults } = useGetWishList();

  useEffect(() => {
    if (selectedTab === '작가') {
      refetch();
    }
  }, [selectedTab, refetch]);

  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'error' || !artistResults) {
    return <p>Error... console.log('Error:', error);</p>;
  }

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <CategoryTabBar tabList={categoryList} tabClick={handleTabClick} tabState={selectedTab} />
      {selectedTab === '작품' ? (
        <Wrapper>
          {wishListResults.data.products.length === 0 ? (
            <p>찜한 작품이 없습니다.</p>
          ) : (
            <G.Grid col={2}>
              {wishListResults.data.products.map((product: SearchProductInfo) => (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  author={product.artist}
                  price={product.price}
                  src={product.thumbnailUrl}
                  isLiked={true}
                />
              ))}
            </G.Grid>
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          {artistResults?.data.content?.length === 0 ? (
            <p>팔로우한 작가가 없습니다.</p>
          ) : (
            <G.Grid col={2}>
              {artistResults?.data.content?.map((artist: User) => (
                <ArtistItem
                  artistId={artist.userId}
                  key={artist.userId}
                  author={artist.nickname}
                  like={artist.totalLikes}
                  follower={artist.totalFollowers}
                  src={artist.userImageUrl}
                  isFollow={true}
                />
              ))}
            </G.Grid>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default MyFavorites;

const Wrapper = styled.div`
  margin-top: 41px;
`;
