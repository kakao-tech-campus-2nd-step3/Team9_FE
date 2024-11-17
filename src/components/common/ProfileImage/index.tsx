import styled from '@emotion/styled';

const ProfileImage = ({
  width,
  imageUrl,
  alt,
}: {
  width: number;
  imageUrl?: string;
  alt: string;
}) => (
  <StyledProfileImage width={width}>
    <img src={imageUrl} alt={alt} />
  </StyledProfileImage>
);

export default ProfileImage;

const StyledProfileImage = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  aspect-ratio: 1 / 1;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid var(--color-gray-md);
  background-color: var(--color-gray-lt);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
