import { Outlet } from 'react-router-dom';

import FABContainer from '@/components/layouts/FAB';
import TabBar from '@/components/layouts/TabBar';

const NoHeaderLayout = () => {
  const mode = 'seller';

  return (
    <>
      <Outlet />
      <FABContainer mode={mode} />
      <TabBar />
    </>
  );
};

export default NoHeaderLayout;
