import { RouterPath } from '@/routes/path';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SEARCH_ARRAY_KEY } from '@/constants/search';
import Chip from '../Chip';
import * as S from './styles';

const RecentSearch = () => {
  const [searchArray, setSearchArray] = useState<Array<{ keyword: string; key: string }>>([]);
  const navigate = useNavigate();

  const deleteAll = () => {
    setSearchArray([]);
    localStorage.removeItem(SEARCH_ARRAY_KEY);
  };

  const deleteSearchKeyword = (key: string) => {
    const updatedArray = searchArray.filter((item) => item.key !== key);
    setSearchArray(updatedArray);
    localStorage.setItem(SEARCH_ARRAY_KEY, JSON.stringify(searchArray));
  };

  const handleSearch = (keyword: string) => {
    const filteredArray = searchArray.filter((item) => item.keyword !== keyword);
    const newArray = [{ keyword, key: keyword }, ...filteredArray].slice(0, 10);
    setSearchArray(newArray);
    localStorage.setItem(SEARCH_ARRAY_KEY, JSON.stringify(newArray));
    navigate(`/${RouterPath.results}?query=${keyword}`);
  };

  const handleChipClick = (item: { keyword: string; key: string }, isDeleteButton: boolean) => {
    if (isDeleteButton) {
      deleteSearchKeyword(item.key);
    } else {
      handleSearch(item.keyword);
    }
  };

  useEffect(() => {
    const storedSearchArray = localStorage.getItem(SEARCH_ARRAY_KEY);
    if (storedSearchArray) {
      setSearchArray(JSON.parse(storedSearchArray));
    }
  }, []);

  return (
    <S.SectionWrapper>
      <S.SectionTitle>최근 검색어</S.SectionTitle>
      {searchArray.length > 0 && <DeleteAllButton onClick={deleteAll}>모두 삭제</DeleteAllButton>}
      <RecentSearchWrapper>
        {searchArray.map((item) => (
          <Chip
            key={item.key}
            tag={item.keyword}
            onDeleteClick={() => handleChipClick(item, true)}
            onSearchClick={() => handleChipClick(item, false)}
          />
        ))}
      </RecentSearchWrapper>
    </S.SectionWrapper>
  );
};

export default RecentSearch;

const RecentSearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const DeleteAllButton = styled.button`
  color: var(--color-gray-dk);
  font-size: var(--font-size-xs);
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: 18px;
  right: 16px;
`;
