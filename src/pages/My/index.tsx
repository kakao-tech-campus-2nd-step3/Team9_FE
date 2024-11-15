import styled from '@emotion/styled';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import useGetArtist from '@/apis/artists/useGetArtist';
import useGetUser from '@/apis/users/useGetUser';
import Loader from '@/components/common/Loader';
import Footer from '@/components/layouts/Footer';
import useModeStore from '@/store/useModeStore';
import { HEIGHTS } from '@/styles/constants';
import { ArtistInfo, UserInfo } from '@/types';
import ArtistProfileBox from './components/ArtistProfileBox';
import UserMenuSection from './components/MenuSection/UserMenuSection';
import UserProfileBox from './components/UserProfileBox';

const My = () => {
  return (
    <ErrorBoundary fallback={<div>Error...</div>}>
      <Suspense fallback={<Loader />}>
        <MyContent />
      </Suspense>
    </ErrorBoundary>
  );
};

const MyContent = () => {
  const { mode } = useModeStore();
  const { data } = mode === 'user' ? useGetUser() : useGetArtist();

  return (
    <Wrapper>
      {mode === 'user' ? (
        <>
          <ProfileSection>
            <UserProfileBox
              userImageUrl={(data.data as UserInfo).userImageUrl}
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: ${HEIGHTS.BOTTOM};
`;

const ProfileSection = styled.div`
  background: var(--color-black);
  padding: 16px;
`;
