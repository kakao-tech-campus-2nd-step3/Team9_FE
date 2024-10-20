import styled from '@emotion/styled';
import Chip from '../Chip';
import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

export const SEARCH_ARRAY_KEY = 'searchArray';

const RecentSearch = () => {
  const [searchArray, setSearchArray] = useState<Array<{ keyword: string; key: string }>>([]);

  const allDelete = () => {
    setSearchArray([]);
    localStorage.removeItem(SEARCH_ARRAY_KEY);
  };

  const handleStoredData = (key: string) => {
    const updatedArray = searchArray.filter((item) => item.key !== key);
    setSearchArray(updatedArray);
    localStorage.setItem(SEARCH_ARRAY_KEY, JSON.stringify(updatedArray));
  };

  useEffect(() => {
    const storedData = localStorage.getItem(SEARCH_ARRAY_KEY);
    if (storedData) {
      setSearchArray(JSON.parse(storedData));
    }
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>최근 검색어</TitleText>
        {searchArray.length > 0 && <DelText onClick={allDelete}>모두 삭제하기</DelText>}
      </TitleWrapper>
      <ChipWrapper>
        {searchArray.map((item) => (
          <Chip key={item.key} tag={item.keyword} onClick={() => handleStoredData(item.key)} />
        ))}
      </ChipWrapper>
    </Wrapper>
  );
};

export default RecentSearch;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const ChipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DelText = styled(Text)`
  color: var(--color-gray-deep, #909090);
  text-align: right;
  font-size: var(--font-size-sm);
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const TitleText = styled(Text)`
  color: var(--color-black, #020715);
  font-size: var(--font-size-md);
  font-weight: 700;
  line-height: normal;
`;
