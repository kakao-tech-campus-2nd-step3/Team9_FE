import styled from '@emotion/styled';

import SearchBar from '@/components/layouts/SearchBar';
import { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';

const Discover = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

export default Discover;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${HEADER_HEIGHT} 0 ${TABBAR_HEIGHT} 0;
`;
