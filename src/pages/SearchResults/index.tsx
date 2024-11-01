import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/layouts/SearchBar';
import CategoryTabBar from './components/CategoryTabBar';
import SwiperFrame from './components/SwiperFrame';
import searchWork from '@/apis/data/searchWork';
import searchArtist from '@/apis/data/searchArtist';
import { RouterPath } from '@/routes/path';
import { useState } from 'react';
import ArtWorkContents from './components/ArtWorkContents';
import ArtistContents from './components/ArtistContents';
import styled from '@emotion/styled';
import Gap from '@/components/styles/Gap';
import MoreButton from './components/MoreButton';

const SearchResults = () => {
  const [selectedTab, setSelectedTab] = useState('전체');
  const navigate = useNavigate();
  const searchLen = searchWork.length + searchArtist.length;
  const searchWorkLen = searchWork.length;
  const searchArtistLen = searchArtist.length;

  const goBack = () => {
    navigate(RouterPath.categories);
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <SearchBar goBack={goBack} />
      <CategoryTabBar tabClick={handleTabClick} tabState={selectedTab} />
      <div>
        {selectedTab === '전체' && (
          <div>
            <ResultFont>{searchLen}건의 결과</ResultFont>
            <SubTitleFont>
              작품 <ResultLightFont>({searchWorkLen})</ResultLightFont>
            </SubTitleFont>
            <SwiperWrapper>
              <SwiperFrame children={searchWork}></SwiperFrame>
              <MoreButton onClick={() => handleTabClick('작품')}> 더보기 </MoreButton>
            </SwiperWrapper>
            <Gap height={12} />
            <SubTitleFont>
              작가 <ResultLightFont>({searchArtistLen})</ResultLightFont>
            </SubTitleFont>
            <SwiperWrapper>
              <SwiperFrame children={searchArtist}></SwiperFrame>
              <MoreButton onClick={() => handleTabClick('작가')}> 더보기 </MoreButton>
            </SwiperWrapper>
          </div>
        )}
        {selectedTab === '작품' && <ArtWorkContents />}
        {selectedTab === '작가' && <ArtistContents />}
      </div>
    </>
  );
};

export default SearchResults;

const ResultFont = styled.div`
  color: var(--color-black, #020715);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
`;

const SubTitleFont = styled.div`
  color: var(--color-black, #020715);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  padding: 16px 16px;
`;

const ResultLightFont = styled.div`
  color: var(--color-black, #020715);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 2px;
`;

const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
