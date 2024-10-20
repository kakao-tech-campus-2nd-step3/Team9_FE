import styled from '@emotion/styled';

type CTAProps = {
  theme?: 'primary' | 'secondary';
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const CTA = ({ theme = 'primary', label, disabled, onClick }: CTAProps) => {
  return (
    <StyledCTA theme={theme} disabled={disabled} onClick={onClick}>
      {label}
    </StyledCTA>
  );
};

export default CTA;

export const CTA_CONTAINER_HEIGHT = '5.4rem';

const StyledCTA = styled.button<{
  theme: 'primary' | 'secondary';
  disabled?: boolean;
}>`
  border-radius: var(--border-radius);
  border: ${({ theme }) => (theme === 'primary' ? `none` : `1px solid var(--color-black)`)};
  background-color: ${({ theme }) =>
    theme === 'primary' ? `var(--color-black)` : `var(--color-white)`};
  color: ${({ theme }) => (theme === 'primary' ? `var(--color-white)` : `var(--color-black)`)};
  outline: none;
  flex: 1;
  min-height: 42px;
  padding: 4px 8px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: transform 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid var(--color-gray-md);
    background-color: var(--color-gray-lt);
    color: var(--color-gray-dk);
  }

  /* disabled 아닐 때만 적용 */
  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      opacity: 0.8 !important;
    `}
  }

  &:active {
    ${({ disabled }) =>
      !disabled &&
      `
      transform: scale(0.98);
   `}
  }
`;

// 컨테이너 필요할 때 따로 임포트하여 사용
export const CTAContainer = styled.div`
  flex: 1;
  position: sticky;
  bottom: 0;
  display: flex;
  height: ${CTA_CONTAINER_HEIGHT};
  padding: 6px 16px;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-md);
  z-index: 100;
`;
