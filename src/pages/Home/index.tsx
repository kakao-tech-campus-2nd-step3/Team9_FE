import styled from '@emotion/styled';

import Footer from '@/components/layouts/Footer';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import { articleList } from '@/constants/home/articleList';
import { homeAdList } from '@/constants/home/homeAdList';
import AdBanner from './AdBanner';
import ArticleBanner from './ArticleBanner';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <AdBanner adList={homeAdList} />
      {articleList.map((item) => (
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
  margin: ${HEADER_HEIGHT} 0 ${TABBAR_HEIGHT} 0;
`;
