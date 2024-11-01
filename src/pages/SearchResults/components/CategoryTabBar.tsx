import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

type TapWrapperProps = {
  isActive: boolean;
};

type CategoryTabBarProps = {
  tabClick: (tab: string) => void;
  tabState: string;
};

const CategoryTabBar = ({ tabClick, tabState }: CategoryTabBarProps) => {
  const [onActive, setOnActive] = useState('전체');
  const categoryList = ['전체', '작품', '작가'];

  useEffect(() => {
    setOnActive(tabState);
  }, [tabState]);

  return (
    <Wrapper>
      {categoryList.map((category, index) => (
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
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 16px;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-md);
  background: var(--white, #fff);
  font-size: 1.4rem;
  text-align: center;
`;

const TabWrapper = styled.div<TapWrapperProps>`
  width: 100%;
  padding: 0px 8px;
  cursor: pointer;
  text-align: center;

  color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-gray-dk)')};
`;
