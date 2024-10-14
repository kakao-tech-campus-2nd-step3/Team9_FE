import { Outlet } from 'react-router-dom';

import FABContainer from '@/components/layouts/FAB';
import Header from '@/components/layouts/Header';
import TabBar from '@/components/layouts/TabBar';

const BasicLayout = () => {
  const mode = 'seller';

  return (
    <>
      <Header mode={mode} />
      <Outlet />
      <FABContainer mode={mode} />
      <TabBar />
    </>
  );
};

export default BasicLayout;
