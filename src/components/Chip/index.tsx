import styled from '@emotion/styled';
import CancelDefault from '@/assets/icons/cancel-default.svg';
import { Image } from '@chakra-ui/react';

const Chip = () => {
  return (
    <Wrapper>
      <span># Chip</span>
      <Image src={CancelDefault} style={{ width: '1.2rem' }} />
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div`
  border: 0.05rem solid var(--color-gray-02);
  border-radius: 0.2rem;
  background-color: var(--color-white);
  font-size: var(--font-size-xs);
  width: 9rem;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
