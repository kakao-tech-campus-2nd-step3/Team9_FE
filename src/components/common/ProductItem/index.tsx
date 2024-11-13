import styled from '@emotion/styled';

import Thumbnail from '@/components/common/Thumbnail';

type ArtistItemProps = {
  author: string;
  title: string;
  price: number;
  heart?: boolean;
  src?: string;
  alt?: string;
};

const ProductItem = ({ author, title, price, src, alt }: ArtistItemProps) => {
  return (
    <Wrapper>
      <Thumbnail ratio="square" src={src} alt={alt} heart={true} />
      <MidWrapper>
        <DescriptionWrapper style={{ fontWeight: '600' }}>{author}</DescriptionWrapper>
        <DescriptionWrapper>{title}</DescriptionWrapper>
        <DescriptionWrapper style={{ fontWeight: '600' }}>{price}원</DescriptionWrapper>
      </MidWrapper>
    </Wrapper>
  );
};

export default ProductItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 170px;
  background-color: var(--color-white);
`;

const MidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 0.8rem 0;
`;

const DescriptionWrapper = styled.p`
  font-size: var(--font-size-sm);
`;
