import styled from '@emotion/styled';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import FABContainer from '@/components/layouts/FAB/FABContainer';
import Header from '@/components/layouts/Header';
import TabBar from '@/components/layouts/TabBar';

const BasicLayout = () => {
  const mode = 'seller';
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <Header mode={mode} />
      <ContentWrapper ref={contentWrapperRef}>
        <Outlet />
      </ContentWrapper>
      <FABContainer mode={mode} scrollContainerRef={contentWrapperRef} />
      <TabBar />
    </PageLayout>
  );
};

export default BasicLayout;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
