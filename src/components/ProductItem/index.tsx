import styled from '@emotion/styled';
import Thumbnail from '@/components/Thumbnail';

interface ArtistItemProps {
  author: string;
  title: string;
  price: number;
  size?: 'large' | 'default';
  heart?: boolean;
  src?: string;
  alt?: string;
}

const ProductItem = ({
  author,
  title,
  price,
  size = 'default',
  heart = false,
  src,
  alt,
}: ArtistItemProps) => {
  return (
    <Wrapper size={size}>
      <Thumbnail ratio="square" heart={heart} src={src} alt={alt} />
      <MidWrapper>
        <DescriptionWrapper style={{ fontWeight: '600' }}>{author}</DescriptionWrapper>
        <DescriptionWrapper>{title}</DescriptionWrapper>
        <DescriptionWrapper style={{ fontWeight: '600' }}>{price}원</DescriptionWrapper>
      </MidWrapper>
    </Wrapper>
  );
};

export default ProductItem;

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

const DescriptionWrapper = styled.p`
  font-size: var(--font-size-sm);
`;
