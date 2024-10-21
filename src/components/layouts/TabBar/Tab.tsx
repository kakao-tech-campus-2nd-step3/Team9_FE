import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import type { Tab as TabType } from '@/constants/tabList';

type TabProps = TabType & {
  isActive: boolean; // 현재 페이지인지 여부 / pathname === tab.linkTo
};

const Tab = ({ label, defaultIcon, activeIcon, linkTo, isActive }: TabProps) => {
  return (
    <Wrapper>
      <StyledLink isActive={isActive} to={linkTo}>
        {isActive ? activeIcon : defaultIcon}
        <p>{label}</p>
      </StyledLink>
    </Wrapper>
  );
};

export default Tab;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  display: flex;
  flex: 1;
  border-radius: var(--border-radius);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-size: var(--font-size-xxs);
  font-weight: 400;
  text-align: center;
  color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-gray-dk)')};
  transition: transform 0.2s ease;

  &:hover {
    color: var(--color-black);

    svg {
      color: var(--color-black);
    }
  }

  &:active {
    transform: scale(0.95);
    background-color: var(--color-gray-lt);
  }
`;
