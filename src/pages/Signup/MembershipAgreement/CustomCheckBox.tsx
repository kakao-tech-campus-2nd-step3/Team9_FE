import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

type CustomCheckboxProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
} & CheckboxProps;

const CustomCheckbox = ({ isChecked, onChange, children }: CustomCheckboxProps) => {
  return (
    <Wrapper>
      <Checkbox isChecked={isChecked} onChange={(e) => onChange(e.target.checked)}>
        {children}
      </Checkbox>
    </Wrapper>
  );
};

export default CustomCheckbox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
