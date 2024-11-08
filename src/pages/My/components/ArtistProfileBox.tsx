import LikesAndFollowers from '@/components/common/LikesAndFollowers';
import { ArtistInfo } from '@/types';
import styled from '@emotion/styled';

const ArtistProfileBox = ({
  ImageUrl,
  about,
  nickname,
  description,
  totalFollowers,
  totalLikes,
}: ArtistInfo) => {
  return (
    <Wrapper>
      <Image src={ImageUrl} alt={nickname} />
      <DetailWrapper>
        <NameWrapper>{nickname}</NameWrapper>
        <TagWrapper>
          <DescriptionWrapper>{description}</DescriptionWrapper>
          <LikesAndFollowers like={totalLikes} follower={totalFollowers} />
          <DescriptionWrapper>{about}</DescriptionWrapper>
        </TagWrapper>
      </DetailWrapper>
    </Wrapper>
  );
};

export default ArtistProfileBox;

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  flex: 1 0 0;
  gap: 8px;
  align-self: stretch;
  border-radius: 2px;
  border: 1px solid var(--color-gray-md);
  background: var(--color-white);
`;

const Image = styled.img`
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--color-gray-md);
`;

const DetailWrapper = styled.div`
  display: flex;
  width: 167px;
  height: 71px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

const NameWrapper = styled.p`
  font-size: var(--font-size-xl);
  text-align: center;
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--color-black);
`;

const DescriptionWrapper = styled.p`
  color: var(--color-black, #020715);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 6px;
  align-self: stretch;
  flex-wrap: wrap;
`;
