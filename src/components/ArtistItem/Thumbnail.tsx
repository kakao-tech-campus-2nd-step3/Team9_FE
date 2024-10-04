import styled from '@emotion/styled';

interface Thumbnail {
  ratio?: 'square' | 'default';
}

export const Thumbnail = ({ ratio = 'default' }: Thumbnail) => {
  return <Wrapper ratio={ratio} />;
};

const Wrapper = styled.div<{ ratio: 'square' | 'default' }>`
  width: 100%;
  aspect-ratio: ${({ ratio }) => (ratio === 'square' ? '1/1' : '4/5')};
  background-color: var(--color-gray-01);
  border-radius: 0.2rem;
`;
