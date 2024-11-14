import useGetFollow from '@/apis/users/useGetFollow';
import ArtistItem from '@/components/common/ArtistItem';
import CategoryTabBar from '@/components/common/CategoryTabBar';
import Grid from '@/components/styles/Grid';
import { User } from '@/types';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const MyFavorites = () => {
  const categoryList = ['작품', '작가'];
  const [selectedTab, setSelectedTab] = useState('작품');
  const { data, status, refetch } = useGetFollow();

  useEffect(() => {
    if (selectedTab === '작가') {
      refetch();
    }
  }, [selectedTab, refetch]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }
  if (status === 'error' || !data) {
    return <p>Error... console.log('Error:', error);</p>;
  }

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <CategoryTabBar tabList={categoryList} tabClick={handleTabClick} tabState={selectedTab} />
      {selectedTab === '작품' ? (
        <Wrapper>작품</Wrapper> // 현재 이부분 api가 없어 비워두었습니다.
      ) : (
        <Wrapper>
          {data?.data.content?.length === 0 ? (
            <p>팔로우한 작가가 없습니다.</p>
          ) : (
            <Grid col={2}>
              {data?.data.content?.map((artist: User) => (
                <ArtistItem
                  author={artist.nickname}
                  like={artist.totalLikes}
                  follower={artist.totalFollowers}
                  src={artist.userImageUrl}
                  isFollow={true}
                />
              ))}
            </Grid>
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
