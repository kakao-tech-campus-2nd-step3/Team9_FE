import styled from '@emotion/styled';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate, useParams } from 'react-router-dom';

import usePostChatRoom from '@/apis/chats/usePostChatRoom';
import useGetDetail from '@/apis/products/useGetDetail';
import CTA, { CTAContainer } from '@/components/common/CTA';
import IconButton from '@/components/common/IconButton';
import Header from '@/components/layouts/Header';
import { RouterPath } from '@/routes/path';
// import useUserStore from '@/store/useUserStore';

const USER_EMAIL_1 = 'ble6859@knu.ac.kr';
const USER_EMAIL_2 = 'user2@example.com';

const ProductDetails = () => {
  return (
    <ErrorBoundary fallback={<div>Error Status</div>}>
      <Suspense fallback={<div>Loading Status</div>}>
        <ProductDetailsContent />
      </Suspense>
    </ErrorBoundary>
  );
};

const ProductDetailsContent = () => {
  const { productId } = useParams<{ productId: string }>();
  const productIdAsNumber = productId ? parseInt(productId, 10) : null;

  const { data } = useGetDetail(productIdAsNumber);
  const { mutate: postChatRoom } = usePostChatRoom();
  // const { email } = useUserStore(); // todo: 주석 해제
  // todo:  작가 이메일 키 넣어달라 요청
  // const artistEmail = data.data.artistInfo.email || USER_EMAIL_2;
  const email = USER_EMAIL_1; // 사용자 본인 이메일
  const artistEmail = USER_EMAIL_2; // 작가 이메일

  // todo: 수정 - email 값이 ''이면 로그인 리다이렉트

  const navigate = useNavigate();

  const handleClickChat = () => {
    postChatRoom(
      {
        userEmail1: email,
        userEmail2: artistEmail,
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
    <Wrapper>
      <Header leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />} />
      <ContentWrapper>
        <ProductImage src={data.data.imageUrls[0] || '/placeholder.jpg'} />
        <ProductInfoWrapper>
          <ProductName>{data.data.name}</ProductName>
          <ProductCategory>{data.data.category}</ProductCategory>
          <ProductSize>{data.data.size}</ProductSize>
          <ProductPrice>₩{data.data.price.toLocaleString()}</ProductPrice>
          <ProductDescription>{data.data.description}</ProductDescription>
          <ProductArtistInfo>Artist: {data.data.artistInfo.artistName}</ProductArtistInfo>
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
    </Wrapper>
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
  margin-top: 44px;
  margin-bottom: 53px;
`;

const ProductImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const ProductInfoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

const ProductName = styled.h2`
  font-size: var(--font-size-xxl);
  font-weight: bold;
`;

const ProductCategory = styled.p`
  font-size: 16px;
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
  font-size: var(--font-size-md);
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
