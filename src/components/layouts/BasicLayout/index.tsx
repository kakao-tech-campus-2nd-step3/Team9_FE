import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import FABContainer from '@/components/layouts/FAB';
import Header from '@/components/layouts/Header';
import TabBar from '@/components/layouts/TabBar';

const BasicLayout = () => {
  const mode = 'seller';

  return (
    <PageLayout>
      <Header mode={mode} />
      <Outlet />
      <FABContainer mode={mode} />
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
