import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import SearchBar from '@/components/layouts/SearchBar';
import { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';

const Discover = () => {
  const [imageList, setImageList] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  // 아무 이미지 fetch
  const fetchImages = async () => {
    const newImages = Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/300/300?random=${page * 10 + i}`,
    );
    setImageList((prevImages) => [...prevImages, ...newImages]);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
      <SearchBar />
      <ContentWrapper>
        <ImageGrid>
          {imageList.map((src, index) => (
            <ImageItem key={index}>
              <img src={src} />
            </ImageItem>
          ))}
        </ImageGrid>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Discover;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${HEADER_HEIGHT} 0 ${TABBAR_HEIGHT} 0;
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
