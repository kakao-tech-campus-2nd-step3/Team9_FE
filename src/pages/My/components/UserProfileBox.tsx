import ProfileImage from '@/components/common/ProfileImage';
import { UserInfo } from '@/types';
import styled from '@emotion/styled';

const UserProfileBox = ({ userImageUrl, hashTags, username }: UserInfo) => {
  return (
    <Wrapper>
      <ProfileImage imageUrl={userImageUrl} alt={username} width={96} />
      <DetailWrapper>
        <NameWrapper>{username}</NameWrapper>
        <TagWrapper>
          <InterestsWrapper>관심사</InterestsWrapper>
          <HastTabWrapper>
            {hashTags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </HastTabWrapper>
        </TagWrapper>
      </DetailWrapper>
    </Wrapper>
  );
};

export default UserProfileBox;

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

const DetailWrapper = styled.div`
  display: flex;
  height: 71px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

const NameWrapper = styled.p`
  font-size: var(--font-size-xl);
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--color-black);
`;

const InterestsWrapper = styled.p`
  font-size: var(--font-size-sm);
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
