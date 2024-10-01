import styled from '@emotion/styled';

interface CategoryTabElementProps {
  children: string;
  color: 'white' | 'black';
}

const CategoryTabElement = ({ children, color }: CategoryTabElementProps) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default CategoryTabElement;

const Wrapper = styled.div<{ color: 'white' | 'black' }>`
  background-color: var(--color-white);
  color: var(--color-black);
  width: 15.8rem;
  height: 4.4rem;
  font-size: var(--font-size-sm);
  border-bottom: ${({ color }) =>
    color === 'white' ? '0.1rem solid var(--color-gray-02)' : '0.1rem solid var(--color-black)'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
