import { Outlet } from 'react-router-dom';

import FABContainer from '@/components/FAB';
import Header from '../../Header';
import TabBar from '../../TabBar';

const BasicLayout = () => {
  return (
    <>
      <Header mode="seller" />
      <Outlet />
      <TabBar />
      <FABContainer mode="seller" />
    </>
  );
};

export default BasicLayout;
