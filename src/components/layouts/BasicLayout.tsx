import styled from '@emotion/styled';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import FABContainer from '@/components/layouts/FAB/FABContainer';
import TabBar from '@/components/layouts/TabBar';

const BasicLayout = () => {
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <InnerLayout ref={contentWrapperRef}>
        <Outlet />
      </InnerLayout>
      <FABContainer scrollContainerRef={contentWrapperRef} />
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

const InnerLayout = styled.main`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
