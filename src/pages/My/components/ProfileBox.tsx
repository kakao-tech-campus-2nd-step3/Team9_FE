import styled from '@emotion/styled';

type ProfileBoxProps = {
  userImageUrl: string;
  hashTag: string[];
  userName: string;
};

const ProfileBox = ({ userImageUrl, hashTag, userName }: ProfileBoxProps) => {
  return (
    <Wrapper>
      <Image src={userImageUrl} alt={userName} />
      <DetailWrapper>
        <NameWrapper>{userName}</NameWrapper>
        <TagWrapper>
          {' '}
          <InterestsWrapper>관심사</InterestsWrapper>
          <HastTabWrapper>
            {hashTag.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </HastTabWrapper>
        </TagWrapper>
      </DetailWrapper>
    </Wrapper>
  );
};

export default ProfileBox;

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

const InterestsWrapper = styled.p`
  font-size: var(--font-size-sm);
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-gray-md);
`;

const HastTabWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  font-size: var(--font-size-xs);
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-gray-dk);
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 6px;
  align-self: stretch;
  flex-wrap: wrap;
`;
