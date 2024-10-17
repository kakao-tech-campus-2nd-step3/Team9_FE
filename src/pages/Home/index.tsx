import styled from '@emotion/styled';

import Footer from '@/components/layouts/Footer';
import { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import ArticleBanner from './ArticleBanner';

const Home = () => {
  return (
    <Wrapper>
      <ArticleBanner
        image="http://www.mediadale.com/news/photo/202007/53159_63324_3446.jpg"
        title="예술계가 주목하는 대학생 신인 작가, 마르코"
        subtitle="한계를 부수고, 더 많이 그리고 싶어요"
        description="자신의 예술적 경계를 넘어서기 위해 끊임없이 노력하는 23세의 젊은 작가를 소개합니다."
      />
      <ArticleBanner
        image="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRsCNS%2FbtruXXySAou%2Fb2sKldvj8EfKSMpePKTYmk%2Fimg.jpg"
        title="백남준 탄생 90주년 특별전 《아방가르드는 당당하다》"
        subtitle="백남준의 결정적인 열 가지 장면"
        description="항상 새로운 매체와 예술에 도전했던 아방가르드 예술가 백남준을 조명합니다."
      />
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
