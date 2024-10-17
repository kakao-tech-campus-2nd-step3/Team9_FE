import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

// import TabList from '@/constants/TabList';
import Tab from './Tab';

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

export const TABBAR_HEIGHT = '5.4rem';

const Wrapper = styled.nav`
  width: 100%;
  height: ${TABBAR_HEIGHT};
  display: flex;
  flex-direction: row;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-md);
  position: fixed;
  bottom: 0;
`;
