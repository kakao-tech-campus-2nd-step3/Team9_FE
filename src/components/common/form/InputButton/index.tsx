import styled from '@emotion/styled';

type ButtonProps = {
  label: string;
  isSelected?: boolean;
  onClick: () => void;
};

const Button = ({ label, isSelected, onClick }: ButtonProps) => {
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

export default Button;

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

  ${({ selected }) =>
    selected &&
    `
    border: 1px solid var(--color-black);
  `}
`;
