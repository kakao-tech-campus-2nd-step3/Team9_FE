import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { Z_INDEX } from '@/styles/constants';

type ProgressBarProps = {
  percentage: number;
};

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <Wrapper>
      <Bar percentage={percentage}>
        <div className="progress-bar" />
        <div className="progress-bar progress-bar-current" />
      </Bar>
      <Text as="span" fontSize="12px">
        {percentage}%
      </Text>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 16px;
`;

const Bar = styled.div<{ percentage: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 4px;
  gap: 10px;
  flex: 1 0 0;
  position: relative;

  .progress-bar {
    width: 100%;
    height: 100%;
    background: var(--color-gray-lt);
  }

  .progress-bar-current {
    width: ${({ percentage }) => `${percentage}%`};
    position: absolute;
    background: var(--color-black);
    z-index: ${Z_INDEX.ProgressBar};
  }
`;
