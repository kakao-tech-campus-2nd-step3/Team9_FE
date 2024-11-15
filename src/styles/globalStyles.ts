import styled from '@emotion/styled';

export const Gap = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: var(--color-gray-lt);
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 0.5px solid var(--color-gray-lt);
`;

export const Grid = styled.div<{ col: number; justifyItems?: string }>`
  display: grid;
  grid-template-columns: ${({ col }) => (col === 2 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)')};
  justify-items: ${({ justifyItems }) => justifyItems || 'center'};
  padding: ${({ col }) => (col === 2 ? '16px' : '24px 16px 32px 16px;')};
  gap: ${({ col }) => (col === 2 ? '8px' : '40px 12px')};
`;
