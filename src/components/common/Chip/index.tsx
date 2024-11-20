import styled from '@emotion/styled';

import CancelIcon from '@/assets/icons/cancel-filled.svg?react';

interface ChipProps {
  tag: string;
  onDeleteClick: () => void;
  onSearchClick: () => void;
}

const Chip = ({ tag, onDeleteClick, onSearchClick }: ChipProps) => {
  return (
    <Wrapper>
      <a onClick={onSearchClick}>{tag}</a>
      <DeleteButton onClick={onDeleteClick}>
        <CancelIcon />
      </DeleteButton>
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div`
  border: 1px solid var(--color-gray-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  background-color: var(--color-white);
  padding: 4px 8px;
  gap: 6px;
  display: inline-flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  width: 14px;
  height: 14px;
  transition: fill 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-black);
  }
`;
