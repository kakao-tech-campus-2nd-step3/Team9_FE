import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import { TAB_LIST } from '@/constants/tabList';
import { HEIGHTS, Z_INDEX } from '@/styles/constants';
import Tab from './Tab';

const TabBar = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      {TAB_LIST.map((tab, index) => {
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

const Wrapper = styled.nav`
  width: 100%;
  height: ${HEIGHTS.BOTTOM};
  display: flex;
  flex-direction: row;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-md);
  position: fixed;
  bottom: 0;
  z-index: ${Z_INDEX.TabBar};
`;
