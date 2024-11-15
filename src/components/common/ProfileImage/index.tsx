import styled from '@emotion/styled';

const ProfileImage = ({ width, imageUrl }: { width: number; imageUrl?: string }) => (
  <StyledProfileImage width={width}>{imageUrl ? <img src={imageUrl} /> : null}</StyledProfileImage>
);

export default ProfileImage;

const StyledProfileImage = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--color-gray-md);
  background-color: var(--color-gray-lt);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fills the container */
  }
`;
