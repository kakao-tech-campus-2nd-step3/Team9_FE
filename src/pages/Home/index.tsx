import styled from '@emotion/styled';

import Footer from '@/components/layouts/Footer';
import { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';

const Home = () => {
  return (
    <>
      <Wrapper className="home-contents">
        Home
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${HEADER_HEIGHT} 0 ${TABBAR_HEIGHT} 0;
  overflow-y: auto;
`;
