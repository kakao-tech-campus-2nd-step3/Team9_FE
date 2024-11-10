import styled from '@emotion/styled';

import { Z_INDEX } from '@/styles/constants';

interface DropdownButtonProps<T extends string> {
  isOpen: boolean;
  selectedOption: T;
  setOpen: () => void;
  options: T[];
  handleSelect: (option: T) => void;
}

const DropdownButton = <T extends string>({
  isOpen,
  selectedOption,
  setOpen,
  options,
  handleSelect,
}: DropdownButtonProps<T>) => {
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
