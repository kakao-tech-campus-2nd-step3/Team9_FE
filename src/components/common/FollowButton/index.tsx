import styled from '@emotion/styled';

const FollowButton = styled.button<{ isFollowed: boolean }>`
  background-color: ${({ isFollowed }) =>
    isFollowed ? 'var(--color-gray-lt)' : 'var(--color-white)'};
  color: black;
  width: 4.4rem;
  height: 2rem;
  font-size: var(--font-size-xxs);
  border: ${({ isFollowed }) => (isFollowed ? 'none' : '0.1rem solid var(--color-black)')};
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FollowButton;
