import styled from '@emotion/styled';

type InputButtonProps = {
  label: string;
  isSelected?: boolean;
  onClick: () => void;
};

const InputButton = ({ label, isSelected, onClick }: InputButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Wrapper selected={isSelected} onClick={handleClick}>
      {label}
    </Wrapper>
  );
};

export default InputButton;

const Wrapper = styled.button<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-gray-md);
  background: var(--color-white);
  flex: 1;
  font-size: var(--font-size-sm);

  ${({ selected }) =>
    selected &&
    `
    border: 1px solid var(--color-black);
  `}
`;
