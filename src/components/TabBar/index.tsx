import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import Tab from './Tab';
import CategoriesIcon from '@/assets/icons/menu-hamburger.svg?react';
import DefaultDiscoverIcon from '@/assets/icons/dashboard-default.svg?react';
import ActiveDiscoverIcon from '@/assets/icons/dashboard-filled.svg?react';
import DefaultHomeIcon from '@/assets/icons/home-default.svg?react';
import ActiveHomeIcon from '@/assets/icons/home-filled.svg?react';
import DefaultChatIcon from '@/assets/icons/chat-default.svg?react';
import ActiveChatIcon from '@/assets/icons/chat-filled.svg?react';
import DefaultMyIcon from '@/assets/icons/person-default.svg?react';
import ActiveMyIcon from '@/assets/icons/person-filled.svg?react';
import { RouterPath } from '@/routes/path';

const TabList = [
  {
    label: '카테고리',
    defaultIcon: <CategoriesIcon />,
    activeIcon: <CategoriesIcon />,
    linkTo: RouterPath.categories,
  },
  {
    label: '둘러보기',
    defaultIcon: <DefaultDiscoverIcon />,
    activeIcon: <ActiveDiscoverIcon />,
    linkTo: RouterPath.discover,
  },
  {
    label: '홈',
    defaultIcon: <DefaultHomeIcon />,
    activeIcon: <ActiveHomeIcon />,
    linkTo: RouterPath.home,
  },
  {
    label: '채팅',
    defaultIcon: <DefaultChatIcon />,
    activeIcon: <ActiveChatIcon />,
    linkTo: RouterPath.chat,
  },
  {
    label: '마이페이지',
    defaultIcon: <DefaultMyIcon />,
    activeIcon: <ActiveMyIcon />,
    linkTo: RouterPath.my,
  },
];

const TabBar = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      {TabList.map((tab, index) => {
        const isActive = pathname === tab.linkTo;

        return (
          <Tab
            key={index}
            label={tab.label}
            defaultIcon={tab.defaultIcon}
            activeIcon={tab.activeIcon}
            linkTo={tab.linkTo}
            isActive={isActive}
          />
        );
      })}
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
