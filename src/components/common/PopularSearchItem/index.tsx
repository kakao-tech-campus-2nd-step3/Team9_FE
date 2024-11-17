import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';

interface PopularSearchItemProps {
  name: string;
  rank: number;
}

const PopularSearchItem = ({ name, rank }: PopularSearchItemProps) => {
  return (
    <Wrapper>
      <Rank isTop3={rank <= 3}>{rank}</Rank>
      <Text>{name}</Text>
    </Wrapper>
  );
};

export default PopularSearchItem;

const Wrapper = styled.div`
  display: flex;
  width: 15.8rem;
  padding: 4px;
  align-items: center;
  gap: 10px;
  color: var(--color-black, #020715);
  font-size: var(--font-size-sm);
  font-weight: 400;
`;

const Rank = styled.span<{ isTop3: boolean }>`
  ${({ isTop3 }) =>
    isTop3 &&
    `
    font-weight: bold;
    text-decoration: underline;
  `}
`;
