import styled from '@emotion/styled';

interface GridProps {
  children: React.ReactNode;
  col: number;
}

const Grid = ({ children, col }: GridProps) => {
  return <Wrapper col={col}>{children}</Wrapper>;
};

export default Grid;

const Wrapper = styled.div<{ col: number }>`
  display: grid;
  gap: ${({ col }) => (col === 2 ? '8px' : '40px 12px')};
  grid-template-columns: ${({ col }) => (col === 2 ? '1fr 1fr' : '1fr 1fr 1fr 1fr')};
  justify-items: center;
  padding: ${({ col }) => (col === 2 ? '16px' : '24px 16px 32px 16px;')};
`;
