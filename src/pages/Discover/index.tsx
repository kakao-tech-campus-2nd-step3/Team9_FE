import styled from '@emotion/styled';
import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Masonry from 'react-masonry-css';

import useGetFeed, { type Product } from '@/apis/products/useGetFeed';
import Loader from '@/components/common/Loader';
import SearchModal from '@/components/common/SearchModal';
import SearchBar from '@/components/layouts/SearchBar';
import { HEIGHTS } from '@/styles/constants';

const Discover = () => (
  <Wrapper>
    <SearchBar includeBack={false} includeFavorite={true} />
    <SearchModal />
    <ContentWrapper>
      {/* todo: 폴백 UI 만들기 */}
      <ErrorBoundary fallback={<>Error</>}>
        <Suspense fallback={<Loader />}>
          <Feed />
        </Suspense>
      </ErrorBoundary>
    </ContentWrapper>
  </Wrapper>
);

const Feed = () => {
  const { data, fetchNextPage, hasNextPage } = useGetFeed();

  // 스크롤 내려감에 따라 다음 페이지 데이터 페칭
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100 && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // 언마운트될 때 이벤트 리스너 해제
  }, [fetchNextPage, hasNextPage]);

  return (
    <ImageGrid
      className="masonry-grid"
      breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
      columnClassName="masonry-grid-column"
    >
      {data?.pages.map((page) =>
        page.products.map((product: Product) => (
          <ImageItem key={product.id}>
            <img src={product.thumbnailUrl} alt={product.name} />
          </ImageItem>
        )),
      )}
    </ImageGrid>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${HEIGHTS.HEADER} 0 ${HEIGHTS.BOTTOM} 0;
`;

const ContentWrapper = styled.div`
  padding: 4px;
  overflow-y: auto;
  flex: 1;
`;

const ImageGrid = styled(Masonry)`
  display: flex;
  margin-left: -8px; /* gutter size */
  width: auto;

  & > div {
    padding-left: 8px; /* gutter size */
    background-clip: padding-box;
  }

  .masonry-grid-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const ImageItem = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default Discover;
