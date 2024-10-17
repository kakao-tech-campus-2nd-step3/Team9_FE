import styled from '@emotion/styled';

import Footer from '@/components/layouts/Footer';
import ArticleBanner from './ArticleBanner';
import { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';

const Home = () => {
  return (
    <Wrapper>
      <ArticleBanner
        image="http://www.mediadale.com/news/photo/202007/53159_63324_3446.jpg"
        title="한계를 부수고, 더 많이 그리고 싶어요"
        subtitle="주목하는 대학생 신인 작가"
        description='"예술은 삶의 기록이라고 생각해요"'
      />
      <div style={{ height: '100vh' }} />
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
