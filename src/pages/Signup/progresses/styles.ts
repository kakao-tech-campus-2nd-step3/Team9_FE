import styled from '@emotion/styled';

export const ProgressBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .progress-container {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    gap: 24px;
    align-self: stretch;
  }
`;

export const ProgressGuidance = styled.p`
  padding: 16px 16px 32px 16px;
  align-self: stretch;
  font-size: var(--font-size-lg);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SelectItem = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  gap: 8px;
`;
