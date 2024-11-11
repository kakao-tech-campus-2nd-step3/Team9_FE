import styled from '@emotion/styled';
import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import useGetFeed, { type Product } from '@/apis/products/useGetFeed';
import SearchBar from '@/components/layouts/SearchBar';
import { HEIGHTS } from '@/styles/constants';

const Discover = () => (
  <Wrapper>
    <SearchBar />
    <ContentWrapper>
      {/* todo: 폴백 UI 만들기 */}
      <ErrorBoundary fallback={<>Error</>}>
        <Suspense fallback={<>Loading...</>}>
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
    <ImageGrid>
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

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px;
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
