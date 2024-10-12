import styled from '@emotion/styled';

interface GapProps {
  height: number;
}

const Gap = ({ height }: GapProps) => {
  return <CustomGap height={height} />;
};

export default Gap;

const CustomGap = styled.hr<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: var(--color-gray-lt);
  border: none;
`;
