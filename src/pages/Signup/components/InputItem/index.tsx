import styled from '@emotion/styled';

type InputItemProps = {
  label?: string;
  children: React.ReactNode;
};

export const InputItem = ({ label, children }: InputItemProps) => {
  return (
    <StyledInputItem>
      <p className="input-label">{label}</p>
      <div className="input-items">{children}</div>
    </StyledInputItem>
  );
};

type CustomInputProps = {
  type: 'text' | 'textarea' | 'date' | 'tel' | 'email' | 'number';
  placeholder?: string;
  value: string | string[] | number;
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
      {type === 'textarea' ? (
        <textarea
          className="input-element input-element-textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          {...props}
        />
      ) : (
        <>
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
        </>
      )}
    </StyledCustomInput>
  );
};

const StyledInputItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 0 16px;

  .input-label {
    font-size: var(--font-size-md);
    font-weight: 600;
  }

  .input-items {
    width: inherit;
    display: inherit;
    flex-direction: inherit;
    gap: 24px;
  }
`;

const StyledCustomInput = styled.div<{ valid: boolean }>`
  width: 100%;
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

  .input-element-textarea {
    height: 120px;
    resize: none;
  }

  .input-validation {
    font-size: var(--font-size-xs);
    color: var(--color-red);
    margin-top: 4px;
  }
`;
