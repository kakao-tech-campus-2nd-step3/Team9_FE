import styled from '@emotion/styled';

import CancelDefault from '@/assets/icons/cancel-default.svg?react';
import { useNavigate } from 'react-router-dom';

interface ChipProps {
  tag: string;
  onClick: () => void;
}

const Chip = ({ tag, onClick }: ChipProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button onClick={() => navigate(`/results?query=${tag}`)}>{tag}</button>
      <CancelIconButton onClick={onClick}>
        <CancelDefault />
      </CancelIconButton>
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div`
  border: 1px solid var(--color-gray-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  padding: 0.6rem;
  gap: 0.6rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const CancelIconButton = styled.button`
  cursor: pointer;
  width: 15px;
  height: 15px;
  background-color: var(--color-white);
  transition: fill 0.3s ease;

  & svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    stroke: var(--color-black);
    fill: var(--color-black);
  }
`;
