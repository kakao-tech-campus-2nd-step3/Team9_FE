import styled from '@emotion/styled';
import popularSearch from '@/apis/data/popularSearch';
import PopularSearchItem from '../PopularSearchItem';
import { Text } from '@chakra-ui/react';
import Grid from '@/components/styles/Grid';

const PopularSearch = () => {
  const midPoint = Math.ceil(popularSearch.length / 2);

  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>
          <RedText>인기</RedText> 검색어
        </TitleText>
      </TitleWrapper>
      <Grid col={2} style={{ justifyItems: 'flex-start' }}>
        <Column>
          {popularSearch.slice(0, midPoint).map((item, index) => (
            <PopularSearchItem key={item.id} text={item.text} rank={index + 1} />
          ))}
        </Column>
        <Column>
          {popularSearch.slice(midPoint).map((item, index) => (
            <PopularSearchItem key={item.id} text={item.text} rank={midPoint + index + 1} />
          ))}
        </Column>
      </Grid>
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
