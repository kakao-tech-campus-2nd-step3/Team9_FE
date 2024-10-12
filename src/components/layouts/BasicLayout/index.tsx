import { Outlet } from 'react-router-dom';

import Header from '../../Header';
import TabBar from '../../TabBar';

const BasicLayout = () => {
  return (
    <>
      <Header mode="seller" />
      <Outlet />
      <TabBar />
    </>
  );
};

export default BasicLayout;
