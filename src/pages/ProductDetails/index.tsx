import styled from '@emotion/styled';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate, useParams } from 'react-router-dom';

import usePostChatRoom from '@/apis/chats/usePostChatRoom';
import useGetDetail from '@/apis/products/useGetDetail';
import CTA, { CTAContainer } from '@/components/common/CTA';
import IconButton from '@/components/common/IconButton';
import Loader from '@/components/common/Loader';
import Header from '@/components/layouts/Header';
import { RouterPath } from '@/routes/path';
import useUserStore from '@/store/useUserStore';
import { HEIGHTS } from '@/styles/constants';
import * as G from '@/styles/globalStyles';

const USER_EMAIL_1 = 'ble6859@knu.ac.kr';
const USER_EMAIL_2 = 'francisco53@hotmail.com';

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />} />
      <ErrorBoundary fallback={<div>Error Status</div>}>
        <Suspense fallback={<Loader />}>
          <ProductDetailsContent />
        </Suspense>
      </ErrorBoundary>
    </Wrapper>
  );
};

const ProductDetailsContent = () => {
  const { productId } = useParams();
  const productIdAsNumber = productId ? parseInt(productId, 10) : null;

  const { email } = useUserStore();
  const userEmail1 = email || USER_EMAIL_1; // 사용자 본인 이메일
  const userEmail2 = USER_EMAIL_2; // 상대방 이메일

  const { data } = useGetDetail(productIdAsNumber);
  const { mutate: postChatRoom } = usePostChatRoom();

  const navigate = useNavigate();

  const handleClickChat = () => {
    postChatRoom(
      {
        userEmail1,
        userEmail2,
      },
      {
        onSuccess: (data) => {
          const chatRoomId = data.id;
          navigate(`${RouterPath.chats}/${chatRoomId}`);
        },
        onError: (error) => {
          alert(error);
        },
      },
    );
  };
  console.log(data);

  return (
    <ContentWrapper>
      <ProductImage src={data.data.imageUrls[0] || '/placeholder.jpg'} />
      <ProductInfoWrapper>
        <ProductArtistInfo>{data.data.artistInfo.artistName}</ProductArtistInfo>
        <ProductCategory>{data.data.category}</ProductCategory>
        <ProductName>{data.data.name}</ProductName>
        <ProductPrice>{data.data.price.toLocaleString()}원</ProductPrice>
        <G.HorizontalLine />
        <ProductSize>크기: {data.data.size}</ProductSize>
        <ProductDescription>{data.data.description}</ProductDescription>
        <ProductHashTags>
          {data.data.hashTags.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </ProductHashTags>
      </ProductInfoWrapper>
      <CTAContainer>
        <CTA label="채팅하기" onClick={handleClickChat}></CTA>
      </CTAContainer>
    </ContentWrapper>
  );
};

export default ProductDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: ${HEIGHTS.HEADER} 0 ${HEIGHTS.BOTTOM} 0;
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

const ProductInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
`;

const ProductName = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;

const ProductCategory = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-gray-dk);
`;

const ProductSize = styled.p`
  font-size: var(--font-size-md);
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-size: var(--font-size-md);
`;

const ProductArtistInfo = styled.p`
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const ProductHashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-dk);
`;
