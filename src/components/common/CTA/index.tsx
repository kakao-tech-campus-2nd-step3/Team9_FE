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
  border-radius: 10px;
  border: ${({ theme }) => (theme === 'primary' ? `none` : `1px solid var(--color-black)`)};
  background-color: ${({ theme }) =>
    theme === 'primary' ? `var(--color-black)` : `var(--color-white)`};
  color: ${({ theme }) => (theme === 'primary' ? `var(--color-white)` : `var(--color-black)`)};
  outline: none;

  &:disabled {
    cursor: not-allowed;
    color: var(--color-gray-md);
    background-color: var(--color-gray-lt);
  }

  /* &:hover와 &:focus는 disabled === false일 때만 적용 */
  &:hover,
  &:focus {
    ${({ disabled }) =>
      !disabled &&
      `
      opacity: 0.8 !important;
      color: var(--color-gray-md) !important;
      background-color: var(--color-gray-lt) !important;
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
