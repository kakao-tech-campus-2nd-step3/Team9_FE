import styled from '@emotion/styled';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return <Wrapper onClick={onClick}>{label}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  border-radius: var(--border-radius);
  border: 0.5px solid var(--color-gray-md);
  background: var(--color-white);
  flex: 1;
`;
