import styled from '@emotion/styled';

import CancelDefault from '@/assets/icons/cancel-default.svg?react';

interface ChipProps {
  tag: string;
  onClick: () => void;
}

const Chip = ({ tag, onClick }: ChipProps) => {
  return (
    <Wrapper>
      <span># {tag}</span>
      <CancelIcon onClick={onClick} />
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div`
  border: 0.05rem solid var(--color-gray-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-xs);
  padding: 0.6rem;
  gap: 0.6rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const CancelIcon = styled(CancelDefault)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  transition: fill 0.3s ease;

  path {
  }

  &:hover {
    stroke: var(--color-black);
    fill: var(--color-black);
  }
`;
// 이 svg가 html의 조합으로 만들어지는데
// 이 svg 자체의 속성을 변경하고 있어서 안되었다.
// stroke속성이랑 내부의 path의 fill을 바꾸어주니 정상적으로 나왔다.
