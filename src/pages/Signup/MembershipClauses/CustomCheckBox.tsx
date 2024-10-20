import styled from '@emotion/styled';

import Checkbox from '@/components/common/form/Checkbox';

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
      <Checkbox isChecked={isChecked} onChange={onChange} />
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
