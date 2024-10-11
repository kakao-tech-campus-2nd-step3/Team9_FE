import styled from '@emotion/styled';

import Tab from './Tab';
import CategoriesIcon from '@/assets/icons/menu-hamburger.svg?react';
import DiscoverIcon from '@/assets/icons/dashboard-default.svg?react';
import HomeIcon from '@/assets/icons/home-default.svg?react';
import ChatIcon from '@/assets/icons/chat-default.svg?react';
import MyIcon from '@/assets/icons/person-default.svg?react';
import { RouterPath } from '@/routes/path';

const TabList = [
  { label: '카테고리', icon: <CategoriesIcon />, linkTo: `${RouterPath.categories}` },
  { label: '둘러보기', icon: <DiscoverIcon />, linkTo: `${RouterPath.discover}` },
  { label: '홈', icon: <HomeIcon />, linkTo: `${RouterPath.home}` },
  { label: '채팅', icon: <ChatIcon />, linkTo: `${RouterPath.chat}` },
  { label: '마이페이지', icon: <MyIcon />, linkTo: `${RouterPath.my}` },
];

const TabBar = () => {
  return (
    <Wrapper>
      {TabList.map((tab, index) => (
        <Tab key={index} label={tab.label} icon={tab.icon} linkTo={tab.linkTo} />
      ))}
    </Wrapper>
  );
};

export default TabBar;

// styles

const TABBAR_HEIGHT = '54px';

const Wrapper = styled.div`
  width: 100%;
  height: ${TABBAR_HEIGHT};
  display: flex;
  flex-direction: row;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-medium);
  position: sticky;
  bottom: 0;
`;
