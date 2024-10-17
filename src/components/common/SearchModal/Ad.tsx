import styled from '@emotion/styled';

import { Image, Text } from '@chakra-ui/react';
import Grid from '@/components/styles/Grid';
import ad from '@/apis/data/ad';

const Ad = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>
          <RedText>요즘 뜨는</RedText> 작품
          <p>광고</p>
        </TitleText>
      </TitleWrapper>
      <Grid col={2}>
        {ad.map((ad) => (
          <AdImage key={ad.id} src={ad.src} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Ad;

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

const RedText = styled.span`
  color: var(--color-red);
`;

const AdImage = styled(Image)`
  width: 158px;
`;
