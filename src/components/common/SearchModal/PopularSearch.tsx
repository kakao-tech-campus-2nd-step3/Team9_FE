import styled from '@emotion/styled';

import { POPULAR_SEARCH_LIST } from '@/constants/search';
import PopularSearchItem from '../PopularSearchItem';
import * as S from './styles';

const PopularSearch = () => {
  return (
    <S.SectionWrapper>
      <S.SectionTitle>
        <span className="section-title-highlight">인기</span> 검색어
      </S.SectionTitle>
      <PopularSearchGrid>
        {POPULAR_SEARCH_LIST.map((item, index) => (
          <PopularSearchItem key={index} name={item} rank={index + 1} />
        ))}
      </PopularSearchGrid>
    </S.SectionWrapper>
  );
};

export default PopularSearch;

const PopularSearchGrid = styled.div`
  display: grid;
  grid-auto-flow: column; // 세로 방향 배치
  grid-template-rows: repeat(5, 1fr);
  justify-items: flex-start;
  gap: 8px 12px;
  font-size: var(--font-size-sm);
`;
