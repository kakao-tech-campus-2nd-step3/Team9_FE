import Grid from '@/components/styles/Grid';
import searchArtist from '@/apis/data/searchArtist';
import ArtistItem from '@/components/common/ArtistItem';
import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import DropdownButton from './Dropdown';
import { SearchArtist } from '@/types';

const ArtistContents = () => {
  const searchArtistLen = searchArtist.length;
  const originalSearchArtist = useRef(searchArtist);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('최신순');
  const [sortedArtist, setSortedArtist] = useState(searchArtist);

  const options = ['최신순', '인기순', '이름순', '팔로우순'];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const sortByFollowed = (a: SearchArtist, b: SearchArtist) => b.totalFollowers - a.totalFollowers;
  const sortByName = (a: SearchArtist, b: SearchArtist) => a.name.localeCompare(b.name);
  const sortByHeart = (a: SearchArtist, b: SearchArtist) => b.totalLikes - a.totalLikes;

  useEffect(() => {
    if (selectedOption === '최신순') {
      setSortedArtist([...originalSearchArtist.current]);
    } else if (selectedOption === '인기순') {
      setSortedArtist([...searchArtist].sort(sortByFollowed));
    } else if (selectedOption === '이름순') {
      setSortedArtist([...searchArtist].sort(sortByName));
    } else if (selectedOption === '팔로우순') {
      setSortedArtist([...searchArtist].sort(sortByHeart));
    }
  }, [selectedOption, searchArtist]);

  return (
    <div>
      <ResultWrapper>
        {searchArtistLen}명의 작가{' '}
        <DropdownButton
          isOpen={isOpen}
          selectedOption={selectedOption}
          setOpen={handleOpen}
          options={options}
          handleSelect={handleSelect}
        />
      </ResultWrapper>
      <Grid col={2}>
        {sortedArtist.map((item) => (
          <ArtistItem
            author={item.name}
            src={item.src}
            like={item.totalLikes}
            follower={item.totalFollowers}
            key={item.id}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ArtistContents;

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
