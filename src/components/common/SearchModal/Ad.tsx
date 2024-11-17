import styled from '@emotion/styled';

import { AD_LIST } from '@/constants/search';
import * as S from './styles';

const SearchAd = () => {
  return (
    <S.SectionWrapper>
      <S.SectionTitle>
        <span className="section-title-highlight">요즘 뜨는</span> 작품
      </S.SectionTitle>
      <AdTag>광고</AdTag>
      <AdWrapper>
        {AD_LIST.map((ad, index) => (
          <AdImage key={index}>
            <img src={ad.imageUrl} alt="Ad image" />
          </AdImage>
        ))}
      </AdWrapper>
    </S.SectionWrapper>
  );
};

export default SearchAd;

const AdWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const AdTag = styled.p`
  background: var(--color-gray-md);
  border-radius: 50px;
  padding: 3px 7px;
  font-size: var(--font-size-xs);
  color: var(--color-white);
  font-weight: 500;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const AdImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: var(--color-gray-lt);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
