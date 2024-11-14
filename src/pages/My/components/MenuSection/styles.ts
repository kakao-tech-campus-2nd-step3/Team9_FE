import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

export const UlWrapper = styled.ul`
  width: 100%;
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 12px 0px;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;
  cursor: pointer;

  color: var(--color-black);
  font-size: var(--font-size-sm);
  font-style: normal;
  font-weight: 400;
`;
