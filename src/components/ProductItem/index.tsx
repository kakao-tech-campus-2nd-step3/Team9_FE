import styled from '@emotion/styled';
import { Thumbnail } from './Thumbnail';

interface ArtistItemProps {
  size?: 'large' | 'default';
}

export const ProductItem = ({ size = 'default' }: ArtistItemProps) => {
  return (
    <Wrapper size={size}>
      <Thumbnail ratio="square" />
      <MidWrapper>
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>작가</p>
        <p style={{ fontSize: 'var(--font-size-sm)' }}>제목</p>
        <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>87,000원</p>
      </MidWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: 'large' | 'default' }>`
  width: ${({ size }) => (size === 'large' ? '15.8rem' : '14rem')};
  height: ${({ size }) => (size === 'large' ? '24.1em' : '22.3em')};
  background-color: var(--color-white);
`;

const MidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 1.7rem;
  margin: 0.8rem 0;
`;
