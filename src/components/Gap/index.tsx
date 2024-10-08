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
  height: ${({ height }) => height}rem;
  background-color: var(--color-gray-light);
`;
