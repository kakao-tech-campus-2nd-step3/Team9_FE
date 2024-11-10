import useGetUser from '@/apis/users/useGetUser';
import Footer from '@/components/layouts/Footer';
import useModeStore from '@/store/useModeStore';
import { ArtistInfo, UserInfo } from '@/types';
import styled from '@emotion/styled';
import ArtistProfileBox from './components/ArtistProfileBox';
import UserMenuSection from './components/MenuSection/UserMenuSection';
import UserProfileBox from './components/UserProfileBox';

const My = () => {
  const { mode } = useModeStore();
  const { data, isLoading, isError } = useGetUser(mode);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !data) {
    return <p>Error... console.log('Error:', error);</p>;
  }
  return (
    <Wrapper>
      {mode === 'user' ? (
        <>
          <ProfileSection>
            <UserProfileBox
              userImageUrl={(data.data as UserInfo).userImageUrl} // UserInfo 타입으로 단언
              username={(data.data as UserInfo).username}
              hashTags={(data.data as UserInfo).hashTags}
            />
          </ProfileSection>
          <UserMenuSection />
        </>
      ) : (
        <ProfileSection>
          <ArtistProfileBox
            ImageUrl={(data.data as ArtistInfo).ImageUrl}
            nickname={(data.data as ArtistInfo).nickname}
            description={(data.data as ArtistInfo).description}
            totalFollowers={(data.data as ArtistInfo).totalFollowers}
            totalLikes={(data.data as ArtistInfo).totalLikes}
            about={(data.data as ArtistInfo).about}
          />
        </ProfileSection>
      )}

      <Footer />
    </Wrapper>
  );
};

export default My;

const ProfileSection = styled.div`
  background: var(--color-black);
  padding: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 53px;
`;
