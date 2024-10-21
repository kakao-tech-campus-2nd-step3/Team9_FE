import styled from '@emotion/styled';

import { Image } from '@chakra-ui/react';
import Grid from '@/components/styles/Grid';
import searchAdList from '@/apis/data/searchAdList';

const SearchAd = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <div>
          <RedText>요즘 뜨는</RedText> 작품
        </div>
        <Tab>광고</Tab>
      </TitleWrapper>
      <Grid col={2}>
        {searchAdList.map((ad) => (
          <AdImage key={ad.id} src={ad.src} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default SearchAd;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: var(--color-black, #020715);
  font-size: var(--font-size-md);
  font-weight: 700;
  line-height: normal;
`;

const RedText = styled.span`
  color: var(--color-red);
`;

const AdImage = styled(Image)`
  width: 158px;
`;

const Tab = styled.p`
  background: var(--color-gray-lt);
  border-radius: 50px;
  padding: 3px 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 36px;
  height: 20px;
  font-size: var(--font-size-xs);
  color: var(--white, #fff);
  font-weight: 700;
`;
