import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { POPULAR_SEARCH_LIST } from '@/constants/search';
import * as G from '@/styles/globalStyles';
import PopularSearchItem from '../PopularSearchItem';

const PopularSearch = () => {
  const midPoint = Math.ceil(POPULAR_SEARCH_LIST.length / 2);

  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>
          <RedText>인기</RedText> 검색어
        </TitleText>
      </TitleWrapper>
      <G.Grid col={2} style={{ justifyItems: 'flex-start' }}>
        <Column>
          {POPULAR_SEARCH_LIST.slice(0, midPoint).map((item, index) => (
            <PopularSearchItem key={item.id} text={item.text} rank={index + 1} />
          ))}
        </Column>
        <Column>
          {POPULAR_SEARCH_LIST.slice(midPoint).map((item, index) => (
            <PopularSearchItem key={item.id} text={item.text} rank={midPoint + index + 1} />
          ))}
        </Column>
      </G.Grid>
    </Wrapper>
  );
};

export default PopularSearch;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleText = styled(Text)`
  color: var(--color-black, #020715);
  font-size: var(--font-size-md);
  font-weight: 700;
  line-height: normal;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RedText = styled.span`
  color: var(--color-red);
`;
