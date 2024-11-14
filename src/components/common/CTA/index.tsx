import styled from '@emotion/styled';

import { HEIGHTS, Z_INDEX } from '@/styles/constants';

type CTAProps = {
  theme?: 'primary' | 'secondary';
  label: string;
  display?: 'flex' | 'block';
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CTA = ({ theme = 'primary', label, display = 'flex', disabled, onClick }: CTAProps) => {
  return (
    <StyledCTA theme={theme} display={display} disabled={disabled} onClick={onClick}>
      {label}
    </StyledCTA>
  );
};

export default CTA;

const StyledCTA = styled.button<{
  theme: 'primary' | 'secondary';
  display: 'flex' | 'block';
  disabled?: boolean;
}>`
  border-radius: var(--border-radius);
  border: ${({ theme }) => (theme === 'primary' ? `none` : `1px solid var(--color-black)`)};
  background-color: ${({ theme }) =>
    theme === 'primary' ? `var(--color-black)` : `var(--color-white)`};
  color: ${({ theme }) => (theme === 'primary' ? `var(--color-white)` : `var(--color-black)`)};
  outline: none;
  min-height: 42px;
  padding: 4px 8px;
  text-align: center;
  font-size: var(--font-size-sm);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: transform 0.2s ease;
  ${({ display }) =>
    display === 'flex' &&
    `
    flex: 1;
    align-self: stretch;
  `}

  &:disabled {
    cursor: not-allowed;
    border: 1px solid var(--color-gray-md);
    background-color: var(--color-gray-lt);
    color: var(--color-gray-dk);
  }

  /* disabled 아닐 때만 적용 */
  &:not(:disabled) {
    &:hover {
      opacity: 0.8 !important;
    }

    &:active {
      transform: scale(0.96);
    }
  }
`;

// 컨테이너 필요할 때 따로 임포트하여 사용
export const CTAContainer = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  display: flex;
  height: ${HEIGHTS.BOTTOM};
  padding: 6px 16px;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-md);
  z-index: ${Z_INDEX.CTA};
`;
