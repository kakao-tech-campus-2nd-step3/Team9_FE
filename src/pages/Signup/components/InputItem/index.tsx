import styled from '@emotion/styled';

type InputItemProps = {
  label: string;
  children: React.ReactNode;
};

export const InputItem = ({ label, children }: InputItemProps) => {
  return (
    <StyledInputItem>
      <p className="input-label">{label}</p>
      {children}
    </StyledInputItem>
  );
};

type CustomInputProps = {
  type: 'text' | 'textarea' | 'date' | 'tel' | 'email';
  placeholder?: string;
  value: string | string[];
  onChange?: (e: any) => void;
  valid?: boolean;
  caution?: string;
  readOnly?: boolean;
};

export const CustomInput = ({
  type,
  placeholder,
  value,
  onChange,
  valid = true,
  caution,
  readOnly = false,
  ...props
}: CustomInputProps) => {
  return (
    <StyledCustomInput valid={valid}>
      <input
        className="input-element"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        {...props}
      />
      {!valid && <p className="input-validation">{caution}</p>}
    </StyledCustomInput>
  );
};

const StyledInputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;

  .input-label {
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
`;

const StyledCustomInput = styled.div<{ valid: boolean }>`
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
