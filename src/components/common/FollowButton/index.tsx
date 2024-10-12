import styled from '@emotion/styled';

interface ButtonProps {
  children: string;
  color: 'white' | 'gray';
}

const FollowButton = ({ children, color }: ButtonProps) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default FollowButton;

const Wrapper = styled.div<{ color: 'white' | 'gray' }>`
  background-color: ${({ color }) =>
    color === 'white' ? 'var(--color-white)' : 'var(--color-gray-light)'};
  color: black;
  width: 4.4rem;
  height: 2rem;
  font-size: var(--font-size-xxs);
  border: ${({ color }) => (color === 'white' ? '0.1rem solid var(--color-black)' : 'none')};
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
