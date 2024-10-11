import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface TabProps {
  label: string;
  icon: React.ReactNode;
  linkTo: string;
}

const Tab = ({ label, icon, linkTo }: TabProps) => {
  return (
    <Wrapper>
      <StyledLink to={linkTo}>
        {icon}
        <span>{label}</span>
      </StyledLink>
    </Wrapper>
  );
};

export default Tab;

// styles

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const StyledLink = styled(Link)`
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
  color: var(--color-gray-deep);
  transition: transform 0.2s ease;

  &:hover {
    color: var(--color-black);

    svg {
      fill: var(--color-black);
    }
  }

  &:active {
    transform: scale(0.95);
    background-color: var(--color-gray-light);
  }
`;
