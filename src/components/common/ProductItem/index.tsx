import styled from '@emotion/styled';

import useDeleteLikes from '@/apis/users/useDeleteLikes';
import usePostLikes from '@/apis/users/usePostLikes';
import Thumbnail from '@/components/common/Thumbnail';
import { useState } from 'react';

type ProductItemProps = {
  id: number;
  author: string;
  title: string;
  price: number;
  heart?: boolean;
  src?: string;
  alt?: string;
  isLiked: boolean;
};

const ProductItem = ({ id, author, title, price, src, alt, isLiked }: ProductItemProps) => {
  const [productLiked, setProductLiked] = useState(isLiked);

  const { mutate: postLike, status: isPostStatus } = usePostLikes();
  const { mutate: deleteLike, status: isDeleteStatus } = useDeleteLikes();

  const handleHeartClick = () => {
    if (productLiked) {
      deleteLike(id, {
        onSuccess: () => {
          setProductLiked(false);
        },
        onError: (error) => {
          console.error('Failed to delete follow:', error);
          alert('팔로우 취소에 실패했습니다.');
        },
      });
    } else {
      postLike(id, {
        onSuccess: () => {
          setProductLiked(true);
        },
        onError: (error) => {
          console.error('Failed to post follow:', error);
          alert('팔로우에 실패했습니다.');
        },
      });
    }
  };

  return (
    <Wrapper>
      <Thumbnail
        ratio="square"
        src={src}
        alt={alt}
        heart={true}
        handleHeartClick={handleHeartClick}
        productLiked={productLiked}
        isPostStatus={isPostStatus}
        isDeleteStatus={isDeleteStatus}
        id={id}
        type="product"
      />
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
