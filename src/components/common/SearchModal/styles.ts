import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
`;

export const SectionTitle = styled.p`
  flex-direction: row;
  margin-bottom: 12px;
  font-size: var(--font-size-md);
  font-weight: 700;

  .section-title-highlight {
    font-size: inherit;
    color: var(--color-red);
  }
`;
