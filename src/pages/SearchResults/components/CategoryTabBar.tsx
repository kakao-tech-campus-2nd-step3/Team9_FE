import styled from '@emotion/styled';
import { useState } from 'react';

interface TapWrapperProps {
  isActive: boolean;
}

const CategoryTabBar = () => {
  const [onActive, setOnActive] = useState(0);

  return (
    <Wrapper>
      <TapWrapper isActive={onActive === 0} onClick={() => setOnActive(0)}>
        전체
      </TapWrapper>
      <TapWrapper isActive={onActive === 1} onClick={() => setOnActive(1)}>
        작품
      </TapWrapper>
      <TapWrapper isActive={onActive === 2} onClick={() => setOnActive(2)}>
        작가
      </TapWrapper>
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
  border-bottom: 1px solid var(--color-gray-medium);
  background: var(--white, #fff);
  font-size: 1.4rem;
  text-align: center;
`;

const TapWrapper = styled.div<TapWrapperProps>`
  width: 100%;
  padding: 0px 8px;
  cursor: pointer;
  text-align: center;

  color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-gray-dk)')};
`;
