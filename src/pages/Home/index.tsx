import styled from '@emotion/styled';

import SearchModal from '@/components/common/SearchModal';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { AD_LIST, ARTICLE_LIST } from '@/constants/home';
import { HEIGHTS } from '@/styles/constants';
import AdBanner from './components/AdBanner';
import ArticleBanner from './components/ArticleBanner';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <SearchModal />
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
