import { useNavigate, useParams } from 'react-router-dom';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import useGetProfile from '@/apis/artists/useGetProfile';
import IconButton from '@/components/common/IconButton';
import Header from '@/components/layouts/Header';
import styled from '@emotion/styled';

const ArtistDetailsContext = () => {
  const navigate = useNavigate();
  const { artistId } = useParams<{ artistId: string }>();

  const parsedId = artistId ? parseInt(artistId, 10) : null;

  const { data } = useGetProfile(parsedId);

  return (
    <Wrapper>
      <Header leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />} />
      <ContentWrapper>
        <ArtistProfileImage src={data.data.ImageUrl || '/placeholder.jpg'} />
        <ArtistInfoWrapper>
          <ArtistName>{data.data.nickname}</ArtistName>
          <ArtistDescription>{data.data.description}</ArtistDescription>
          <ArtistStats>
            <ArtistStatItem>
              <ArtistStatLabel>Followers</ArtistStatLabel>
              <ArtistStatValue>{data.data.totalFollowers}</ArtistStatValue>
            </ArtistStatItem>
            <ArtistStatItem>
              <ArtistStatLabel>Likes</ArtistStatLabel>
              <ArtistStatValue>{data.data.totalLikes}</ArtistStatValue>
            </ArtistStatItem>
          </ArtistStats>
          <ArtistAbout>{data.data.about}</ArtistAbout>
        </ArtistInfoWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const ArtistDetails = () => {
  return (
    <ErrorBoundary fallback={<div>Error Status</div>}>
      <Suspense fallback={<div>Loading Status</div>}>
        <ArtistDetailsContext />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ArtistDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 44px;
  margin-bottom: 53px;
`;

const ArtistProfileImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
`;

const ArtistInfoWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ArtistName = styled.h2`
  font-size: var(--font-size-xxl);
  font-weight: bold;
`;

const ArtistDescription = styled.p`
  font-size: var(--font-size-md);
`;

const ArtistStats = styled.div`
  display: flex;
  gap: 24px;
`;

const ArtistStatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtistStatLabel = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-dk);
`;

const ArtistStatValue = styled.span`
  font-size: var(--font-size-lg);
  font-weight: bold;
`;

const ArtistAbout = styled.p`
  font-size: var(--font-size-md);
`;
