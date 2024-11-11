import styled from '@emotion/styled';

const ProfileImage = ({ width, imageUrl }: { width: number; imageUrl?: string }) => (
  <StyledProfileImage width={width}>
    <img src={imageUrl} />
  </StyledProfileImage>
);

export default ProfileImage;

const StyledProfileImage = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  aspect-ratio: 1 / 1;
  border-radius: 50px;
  border: 1px solid var(--color-gray-md);
  background-color: var(--color-gray-lt);

  .img {
    object-fit: cover;
  }
`;
