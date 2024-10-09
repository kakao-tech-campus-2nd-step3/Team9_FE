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
  gap: 40px 12px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  padding: 24px 16px 32px 16px;
`;
