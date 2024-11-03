import Z_INDEX from '@/styles/z_index';
import styled from '@emotion/styled';

type DropdownButtonProps = {
  isOpen: boolean;
  selectedOption: string;
  setOpen: () => void;
  options: string[];
  handleSelect: (option: string) => void;
};

const DropdownButton = ({
  isOpen,
  selectedOption,
  setOpen,
  options,
  handleSelect,
}: DropdownButtonProps) => {
  return (
    <Wrapper>
      <DropButton onClick={setOpen}>{selectedOption} ▼ </DropButton>
      {isOpen && (
        <UlWrapper>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </UlWrapper>
      )}
    </Wrapper>
  );
};

export default DropdownButton;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropButton = styled.button`
  padding: 8px 16px;
  background-color: var(--color-white);
  cursor: pointer;
  width: 100px;
  font-weight: 600;
`;

const UlWrapper = styled.ul`
  z-index: ${Z_INDEX.Dropdown};
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 0;
  padding: 8px 4px;
  width: 100px;
  background-color: var(--color-white);
  cursor: pointer;
  font-weight: 400;
`;
