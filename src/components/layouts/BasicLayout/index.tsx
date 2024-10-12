import { Outlet } from 'react-router-dom';

import FABContainer from '@/components/FAB';
import Header from '../../Header';
import TabBar from '../../TabBar';

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
