import styled from '@emotion/styled';

export const Thumbnail = () => {
  return <Wrapper />;
};

export const ThumbnailSquare = () => {
  return <SquareWrapper />;
};

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  background-color: var(--color-gray-01);
  border-radius: 0.2rem;
`;

const SquareWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: var(--color-gray-01);
  border-radius: 0.2rem;
`;
