import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ProgressBar = () => {
  return (
    <Wrapper>
      <Bar>
        <div className="progress-bar" />
        <div className="progress-bar progress-bar-current" />
      </Bar>
      <Text as="span" fontSize="12px">
        50%
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

const Bar = styled.div`
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
    width: 50%;
    position: absolute;
    background: var(--color-black);
    z-index: 10;
  }
`;
