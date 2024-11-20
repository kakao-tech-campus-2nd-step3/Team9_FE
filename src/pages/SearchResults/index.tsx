import styled from '@emotion/styled';
import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import useSearchArtists from '@/apis/search/useSearchArtists';
import useSearchProducts from '@/apis/search/useSearchProducts';
import CategoryTabBar from '@/components/common/CategoryTabBar';
import Loader from '@/components/common/Loader';
import SearchModal from '@/components/common/SearchModal';
import SearchBar from '@/components/layouts/SearchBar';
import { RouterPath } from '@/routes/path';
import useSearchModalStore from '@/store/useSearchModalStore';
import * as G from '@/styles/globalStyles';
import ArtWorkContents from './components/ArtWorkContents';
import ArtistContents from './components/ArtistContents';
import HorizontalFrame from './components/HorizontalFrame';
import MoreButton from './components/MoreButton';

const SearchResults = () => {
  return (
    <ErrorBoundary fallback={<div>Error Status</div>}>
      <Suspense fallback={<Loader />}>
        <SearchResultsContent />
      </Suspense>
    </ErrorBoundary>
  );
};

const SearchResultsContent = () => {
  const [selectedTab, setSelectedTab] = useState('전체');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const searchArtistResults = useSearchArtists(searchQuery);
  const artistsData = searchArtistResults.data.pages.flatMap((page) => page.data.artists);
  const searchProductResults = useSearchProducts(searchQuery);
  const productsData = searchProductResults.data.pages.flatMap((page) => page.data.products);

  const navigate = useNavigate();
  const searchLen = productsData.length + artistsData.length;
  const searchProductLen = productsData.length;
  const searchArtistLen = artistsData.length;
  const categoryList = ['전체', '작품', '작가'];
  const location = useLocation();

  const { isModalOpen, setIsModalOpen } = useSearchModalStore();

  // 검색어 바꿔 새로 검색 시 검색 모달 닫음
  useEffect(() => {
    setIsModalOpen(false);
  }, [searchQuery]);

  const goBack = () => {
    if (location.pathname.startsWith(`/${RouterPath.results}`)) {
      navigate(-1);
    } else {
      navigate(RouterPath.categories);
    }
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <PageContainer>
      <SearchBar goBack={goBack} />
      {isModalOpen && <SearchModal />}
      <CategoryTabBar tabClick={handleTabClick} tabState={selectedTab} tabList={categoryList} />
      <ContentSection>
        {selectedTab === '전체' && (
          <AllContentWrapper>
            <ResultFont>{searchLen}건의 결과</ResultFont>
            <Section>
              <SubTitleFont>
                작품 <ResultLightFont>({searchProductLen})</ResultLightFont>
              </SubTitleFont>
              {searchProductLen === 0 ? (
                <NoDataMessage>데이터가 없습니다.</NoDataMessage>
              ) : (
                <HorizontalWRapper>
                  <HorizontalFrame children={productsData} />
                  <MoreButton onClick={() => handleTabClick('작품')}> 더보기 </MoreButton>
                </HorizontalWRapper>
              )}
            </Section>
            <G.Gap height={12} />
            <Section>
              <SubTitleFont>
                작가 <ResultLightFont>({searchArtistLen})</ResultLightFont>
              </SubTitleFont>
              {searchArtistLen === 0 ? (
                <NoDataMessage>데이터가 없습니다.</NoDataMessage>
              ) : (
                <HorizontalWRapper>
                  <HorizontalFrame children={artistsData} />
                  <MoreButton onClick={() => handleTabClick('작가')}> 더보기 </MoreButton>
                </HorizontalWRapper>
              )}
            </Section>
          </AllContentWrapper>
        )}
        {selectedTab === '작품' && <ArtWorkContents searchWork={productsData} />}
        {selectedTab === '작가' && <ArtistContents searchArtist={artistsData} />}
      </ContentSection>
    </PageContainer>
  );
};

export default SearchResults;

const PageContainer = styled.div`
  width: 100%;
`;

const ContentSection = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 41px;
`;

const AllContentWrapper = styled.div`
  padding-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

const ResultFont = styled.div`
  color: var(--color-black);
  font-size: var(--font-size-sm);
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
`;

const SubTitleFont = styled.div`
  color: var(--color-black);
  font-size: var(--font-size-sm);
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  padding: 16px 16px;
`;

const ResultLightFont = styled.div`
  color: var(--color-black);
  font-size: var(--font-size-sm);
  font-weight: 400;
  margin-left: 2px;
`;

const HorizontalWRapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoDataMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  font-weight: 600;
  color: var(--color-black);
`;
