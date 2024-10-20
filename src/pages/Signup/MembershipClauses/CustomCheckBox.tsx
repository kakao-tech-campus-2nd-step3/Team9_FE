import styled from '@emotion/styled';

type CustomCheckboxProps = {
  children: React.ReactNode;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  marginBottom?: number;
  fontSize?: string;
  fontWeight?: string;
};

const CustomCheckbox = ({ children, isChecked, onChange, ...props }: CustomCheckboxProps) => {
  return (
    <Wrapper marginBottom={props.marginBottom}>
      <Label fontSize={props.fontSize} fontWeight={props.fontWeight}>
        {children}
      </Label>
      <StyledCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </Wrapper>
  );
};

export default CustomCheckbox;

const Wrapper = styled.label<{ marginBottom?: number }>`
  display: flex;
  align-items: center;
  gap: 8px;

  &:not(:last-child) {
    margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0')};
  }
`;

const Label = styled.label<{ fontSize?: string; fontWeight?: string }>`
  flex: 1;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : 'var(--font-size-base)')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
`;

const StyledCheckbox = styled.input`
  width: 14px;
  height: 14px;
  border: 0.5px solid #d6d6d6;
  border-radius: 2px;
  appearance: none; /* 기본 체크박스 스타일 제거 */
  outline: none;

  &:checked {
    background-color: var(--color-gray-dk);
  }
`;
