import styled from '@emotion/styled';

import CancelDefault from '@/assets/icons/cancel-default.svg?react';

interface ChipProps {
  tag: string;
  onClick: () => void; // onClick prop 추가
}

const Chip = ({ tag, onClick }: ChipProps) => {
  return (
    <Wrapper>
      <span># {tag}</span>
      <CancelIcon onClick={onClick} />
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div`
  border: 0.05rem solid var(--color-gray-md);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  font-size: var(--font-size-xs);
  padding: 0.6rem;
  gap: 0.6rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const CancelIcon = styled(CancelDefault)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
  transition: fill 0.3s ease;

  &:hover {
    fill: var(--color-black);
  }
`;
