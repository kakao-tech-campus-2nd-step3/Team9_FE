import styled from '@emotion/styled';

interface GridProps {
  children: React.ReactNode;
  col: number;
  style?: React.CSSProperties;
}

const Grid = ({ children, col, style }: GridProps) => {
  return (
    <Wrapper col={col} style={style}>
      {children}
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div<{ col: number }>`
  display: grid;
  gap: ${({ col }) => (col === 2 ? '8px' : '40px 12px')};
  grid-template-columns: ${({ col }) => (col === 2 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)')};
  justify-items: center;
  padding: ${({ col }) => (col === 2 ? '16px' : '24px 16px 32px 16px;')};
`;
