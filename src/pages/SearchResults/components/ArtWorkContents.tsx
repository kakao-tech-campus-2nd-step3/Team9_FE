import searchWork from '@/apis/data/searchWork';
import ProductItem from '@/components/common/ProductItem';
import Grid from '@/components/styles/Grid';
import { SearchWork } from '@/types';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import DropdownButton from './Dropdown';

export type ArtWorkOptions = '최신순' | '가격순' | '제목순';

const ArtWorkContents = () => {
  const searchWorkLen = searchWork.length;
  const originalSearchWork = useRef(searchWork);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ArtWorkOptions>('최신순');
  const [sortedWork, setSortedWork] = useState(searchWork);

  const options: ArtWorkOptions[] = ['최신순', '가격순', '제목순'];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: ArtWorkOptions) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const sortByPrice = (a: SearchWork, b: SearchWork) => a.price - b.price;
  const sortByTitle = (a: SearchWork, b: SearchWork) => a.title.localeCompare(b.title);

  useEffect(() => {
    if (selectedOption === '최신순') {
      setSortedWork([...originalSearchWork.current]);
    } else if (selectedOption === '가격순') {
      setSortedWork([...searchWork].sort(sortByPrice));
    } else if (selectedOption === '제목순') {
      setSortedWork([...searchWork].sort(sortByTitle));
    }
  }, [selectedOption, searchWork]);

  return (
    <div>
      <ResultWrapper>
        {searchWorkLen}점의 작품
        <DropdownButton<ArtWorkOptions>
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
  color: var(--color-black);
  font-size: var(--font-size-sm);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
