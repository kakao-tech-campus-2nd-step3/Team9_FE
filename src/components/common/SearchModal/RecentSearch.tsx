import styled from '@emotion/styled';
import Chip from '../Chip';
import { useState, useEffect } from 'react';

const RecentSearch = () => {
  const [searchArray, setSearchArray] = useState([]);

  const handleStoredData = (tag: string) => {
    const updatedArray = searchArray.filter((item) => item !== tag);
    setSearchArray(updatedArray);
    localStorage.setItem('searchArray', JSON.stringify(updatedArray));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('searchArray');
    if (storedData) {
      setSearchArray(JSON.parse(storedData));
    }
  }, []);

  return (
    <Wrapper>
      <h2>최근 검색어</h2>
      {searchArray.map((item, index) => (
        <Chip key={index} tag={item} onClick={() => handleStoredData(item)} />
      ))}
    </Wrapper>
  );
};

export default RecentSearch;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
