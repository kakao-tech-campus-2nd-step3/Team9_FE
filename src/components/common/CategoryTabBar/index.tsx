import { Z_INDEX } from '@/styles/constants';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { HEIGHTS } from '@/styles/constants';

type TapWrapperProps = {
  isActive: boolean;
};

type CategoryTabBarProps = {
  tabClick: (tab: string) => void;
  tabState: string;
  tabList: string[];
};

const CategoryTabBar = ({ tabClick, tabState, tabList }: CategoryTabBarProps) => {
  const [onActive, setOnActive] = useState('전체');

  useEffect(() => {
    setOnActive(tabState);
  }, [tabState]);

  return (
    <Wrapper>
      {tabList.map((category, index) => (
        <TabWrapper
          key={index}
          isActive={onActive === category}
          onClick={() => {
            setOnActive(category);
            tabClick(category);
          }}
        >
          {category}
        </TabWrapper>
      ))}
    </Wrapper>
  );
};

export default CategoryTabBar;

const Wrapper = styled.div`
  z-index: ${Z_INDEX.Header};
  position: sticky;
  top: ${HEIGHTS.HEADER};
  width: 100%;
  height: 41px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--color-gray-md);
  background: var(--color-white);
  font-size: var(--font-size-sm);
  text-align: center;
`;

const TabWrapper = styled.div<TapWrapperProps>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-gray-dk)')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid var(--color-black)' : 'none')};
`;
