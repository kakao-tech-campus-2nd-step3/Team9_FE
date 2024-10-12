import styled from '@emotion/styled';

import Footer from '@/components/Footer';
import { HEADER_HEIGHT } from '@/components/Header';
import { TABBAR_HEIGHT } from '@/components/TabBar';

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

const Wrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${TABBAR_HEIGHT});
  display: flex;
  flex-direction: column;
`;
