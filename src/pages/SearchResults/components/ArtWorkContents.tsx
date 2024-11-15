import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import ProductItem from '@/components/common/ProductItem';
import * as G from '@/styles/globalStyles';
import { SearchProductInfo } from '@/types';
import DropdownButton from './Dropdown';

export type ArtWorkOptions = '최신순' | '가격순' | '제목순';

const ArtWorkContents = ({ searchWork }: { searchWork: SearchProductInfo[] }) => {
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

  const sortByPrice = (a: SearchProductInfo, b: SearchProductInfo) => a.price - b.price;
  const sortByTitle = (a: SearchProductInfo, b: SearchProductInfo) => a.name.localeCompare(b.name);

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
      {searchWorkLen === 0 ? (
        <NoDataMessage>데이터가 없습니다.</NoDataMessage>
      ) : (
        <G.Grid col={2}>
          {sortedWork.map((item) => (
            <ProductItem
              id={item.id}
              key={item.id}
              author={item.artist}
              title={item.name}
              src={item.thumbnailUrl}
              price={item.price}
              isLiked={false}
            />
          ))}
        </G.Grid>
      )}
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

const NoDataMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0;
  font-weight: 600;
  color: var(--color-black);
`;
