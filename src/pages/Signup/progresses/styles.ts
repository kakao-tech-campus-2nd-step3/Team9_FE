import styled from '@emotion/styled';

import { CTA_CONTAINER_HEIGHT } from '@/components/common/CTA';

export const ProgressBox = styled.div`
  margin: 0 0 ${CTA_CONTAINER_HEIGHT} 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .progress-guidance {
    padding: 16px 16px 32px 16px;
    align-self: stretch;
    font-size: var(--font-size-md);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .progress-form {
    display: flex;
    flex-direction: column;
    margin: 0 16px 16px;
    gap: 24px;
    align-self: stretch;
  }
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  .input-label {
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
`;

export const StyledInput = styled.div<{ valid?: boolean }>`
  align-self: stretch;
  display: flex;
  flex-direction: column;

  .input-element {
    align-self: stretch;
    border: none;
    border-bottom: ${({ valid }) =>
      valid ? '1px solid var(--color-gray-md)' : '1px solid var(--color-red)'};
    border-radius: 0;
    padding: 8px 0;
    font-family: inherit;
    font-size: var(--font-size-sm);
    outline: none;

    &:focus {
      border-bottom: ${({ valid }) =>
        valid ? '1px solid var(--color-black)' : '1px solid var(--color-red)'};
    }

    ::placeholder {
      color: var(--color-gray-dk);
    }
  }

  .input-validation {
    font-size: var(--font-size-xs);
    color: var(--color-red);
    margin-top: 4px;
  }
`;
