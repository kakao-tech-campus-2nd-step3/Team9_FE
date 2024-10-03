import styled from '@emotion/styled';

interface GridProps {
  children: React.ReactNode;
}

const Grid = ({ children }: GridProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Grid;

const Wrapper = styled.div`
  display: grid;
  padding: 1.6rem;
  gap: 0.8rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;
