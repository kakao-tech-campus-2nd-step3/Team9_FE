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
  font-size: var(--font-size-md);
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

// export const InputItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 8px;
//   align-self: stretch;
//   width: 100%;

//   .input-label {
//     font-size: var(--font-size-sm);
//     font-weight: 600;
//   }
// `;

// export const StyledInput = styled.div<{ valid?: boolean }>`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;

//   .input-element {
//     align-self: stretch;
//     border: none;
//     border-bottom: ${({ valid }) =>
//       valid ? '1px solid var(--color-gray-md)' : '1px solid var(--color-red)'};
//     border-radius: 0;
//     padding: 8px 0;
//     font-family: inherit;
//     font-size: var(--font-size-sm);
//     outline: none;

//     &:focus {
//       border-bottom: ${({ valid }) =>
//         valid ? '1px solid var(--color-black)' : '1px solid var(--color-red)'};
//     }

//     ::placeholder {
//       color: var(--color-gray-dk);
//     }
//   }

//   .input-validation {
//     font-size: var(--font-size-xs);
//     color: var(--color-red);
//     margin-top: 4px;
//   }
// `;
