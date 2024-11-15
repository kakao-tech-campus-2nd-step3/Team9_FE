import styled from '@emotion/styled';
import { useState } from 'react';

import SearchModal from '@/components/common/SearchModal';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { AD_LIST, ARTICLE_LIST } from '@/constants/home';
import { HEIGHTS } from '@/styles/constants';
import AdBanner from './components/AdBanner';
import ArticleBanner from './components/ArticleBanner';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      {isModalOpen && <SearchModal modalClose={() => setIsModalOpen(false)} />}
      <Header modalOpen={handleModalOpen} />
      <AdBanner adList={AD_LIST} />
      {ARTICLE_LIST.map((item) => (
        <ArticleBanner
          key={item.title}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
        />
      ))}
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${HEIGHTS.HEADER} 0 ${HEIGHTS.BOTTOM} 0;
`;
