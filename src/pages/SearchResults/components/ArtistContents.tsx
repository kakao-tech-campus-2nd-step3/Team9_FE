import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import ArtistItem from '@/components/common/ArtistItem';
import * as G from '@/styles/globalStyles';
import { SearchArtistInfo } from '@/types';
import DropdownButton from './Dropdown';

export type ArtistOptions = '최신순' | '인기순' | '이름순' | '팔로우순';

const ArtistContents = ({ searchArtist }: { searchArtist: SearchArtistInfo[] }) => {
  const searchArtistLen = searchArtist.length;
  const originalSearchArtist = useRef(searchArtist);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ArtistOptions>('최신순');
  const [sortedArtist, setSortedArtist] = useState(searchArtist);

  const options: ArtistOptions[] = ['최신순', '인기순', '이름순', '팔로우순'];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: ArtistOptions) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const sortByFollowed = (a: SearchArtistInfo, b: SearchArtistInfo) =>
    b.totalFollowers - a.totalFollowers;
  const sortByName = (a: SearchArtistInfo, b: SearchArtistInfo) =>
    a.nickname.localeCompare(b.nickname);
  const sortByHeart = (a: SearchArtistInfo, b: SearchArtistInfo) => b.totalLikes - a.totalLikes;

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
        {searchArtistLen}명의 작가
        <DropdownButton<ArtistOptions>
          isOpen={isOpen}
          selectedOption={selectedOption}
          setOpen={handleOpen}
          options={options}
          handleSelect={handleSelect}
        />
      </ResultWrapper>
      {searchArtistLen === 0 ? (
        <NoDataMessage>데이터가 없습니다.</NoDataMessage>
      ) : (
        <G.Grid col={2}>
          {sortedArtist.map((item) => (
            <ArtistItem
              artistId={item.id}
              author={item.nickname}
              src={item.artistImageUrl}
              like={item.totalLikes}
              follower={item.totalFollowers}
              key={item.id}
              isFollow={item.isFollowing}
            />
          ))}
        </G.Grid>
      )}
    </div>
  );
};

export default ArtistContents;

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
