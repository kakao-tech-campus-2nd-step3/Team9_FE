import { useGetUser } from '@/apis/users/useGetUser';
import Footer from '@/components/layouts/Footer';
import styled from '@emotion/styled';
import MenuSection from './components/MenuSection';
import ProfileBox from './components/ProfileBox';

const My = () => {
  const { data, isLoading, isError } = useGetUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !data) {
    return <p>Error... console.log('Error:', error);</p>;
  }
  return (
    <>
      <ProfileSection>
        <ProfileBox
          userImageUrl={data?.data.userImageUrl}
          hashTag={data?.data.hashTags}
          userName={data?.data.username}
        />
      </ProfileSection>
      <MenuSection />
      <Footer />
      <div style={{ marginBottom: '53px' }} />
    </>
  );
};

export default My;

const ProfileSection = styled.div`
  background: var(--color-black);
  padding: 16px;
`;
