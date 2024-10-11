import styled from '@emotion/styled';

// import IconButton from '../IconButton';

interface TabProps {
  label: string;
  icon: React.ReactNode;
}

const Tab = ({ label, icon }: TabProps) => {
  return (
    <Wrapper>
      {icon}
      {label}
    </Wrapper>
  );
};

export default Tab;

// styles

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 3px;
  font-size: var(--font-size-xxs);
  font-weight: 400;
  text-align: center;
  color: var(--color-gray-deep);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    color: var(--color-black);
  }

  &:active {
    transform: scale(0.95);
    background-color: var(--color-gray-light);
  }
`;
