import Grid from '@/components/styles/Grid';
import searchWork from '@/apis/data/searchWork';
import ProductItem from '@/components/common/ProductItem';
import styled from '@emotion/styled';
import DropdownButton from './Dropdown';
import { useEffect, useState, useRef } from 'react';
import { SearchWork } from '@/types';

const ArtWorkContents = () => {
  const searchWorkLen = searchWork.length;
  const originalSearchWork = useRef(searchWork); // Holds original unsorted list

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('최신순'); // Default option
  const [sortedWork, setSortedWork] = useState(searchWork);

  const options = ['최신순', '가격순', '제목순'];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const sortByPrice = (a: SearchWork, b: SearchWork) => a.price - b.price;
  const sortByTitle = (a: SearchWork, b: SearchWork) => a.title.localeCompare(b.title);

  useEffect(() => {
    if (selectedOption === '최신순') {
      setSortedWork([...originalSearchWork.current]); // Reset to original order
    } else if (selectedOption === '가격순') {
      setSortedWork([...searchWork].sort(sortByPrice));
    } else if (selectedOption === '제목순') {
      setSortedWork([...searchWork].sort(sortByTitle));
    }
  }, [selectedOption, searchWork]);

  return (
    <div>
      <ResultWrapper>
        {searchWorkLen}점의 작품{' '}
        <DropdownButton
          isOpen={isOpen}
          selectedOption={selectedOption}
          setOpen={handleOpen}
          options={options}
          handleSelect={handleSelect}
        />
      </ResultWrapper>
      <Grid col={2}>
        {sortedWork.map((item) => (
          <ProductItem
            key={item.id}
            author={item.artist}
            title={item.title}
            src={item.src}
            price={item.price}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ArtWorkContents;

const ResultWrapper = styled.div`
  color: var(--color-black, #020715);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  justify-content: space-between;
  width: 100%;
`;
