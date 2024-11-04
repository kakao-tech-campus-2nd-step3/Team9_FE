import styled from '@emotion/styled';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

const FreeLayout = () => {
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <InnerLayout ref={contentWrapperRef}>
        <Outlet />
      </InnerLayout>
    </PageLayout>
  );
};

export default FreeLayout;

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
