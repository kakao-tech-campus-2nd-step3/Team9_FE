import styled from '@emotion/styled';

import Footer from '@/components/layouts/Footer';
import { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import { homeAdList } from '@/constants/home/homeAdList';
import { articleList } from '@/constants/home/articleList';
import AdBanner from './AdBanner';
import ArticleBanner from './ArticleBanner';

const Home = () => {
  return (
    <Wrapper>
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
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${HEADER_HEIGHT} 0 ${TABBAR_HEIGHT} 0;
  overflow-y: auto;
`;
