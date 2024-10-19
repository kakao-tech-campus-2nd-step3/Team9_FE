import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import KakaoSymbol from '@/assets/kakao-symbol.svg?react';
import Logo from '@/assets/logo.svg?react';
import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { RouterPath } from '@/routes/path';
import { backgroundImageList } from './backgroundImageList';

const Login = () => {
  const isMember = false; // 추후 API 연동
  const navigate = useNavigate();

  // 랜덤 배경이미지
  const randomIndex = Math.floor(Math.random() * backgroundImageList.length);
  const backgroundImage = backgroundImageList[randomIndex].src;
  const backgroundImageCreator = backgroundImageList[randomIndex].creator;

  return (
    <Wrapper backgroundImage={backgroundImage}>
      <Header
        mode="seller"
        leftSideChildren={
          <IconButton icon="arrow-back" color="var(--color-white)" onClick={() => navigate(-1)} />
        }
        rightSideChildren={
          <IconButton
            icon="home"
            color="var(--color-white)"
            onClick={() => navigate(`${RouterPath.home}`)}
          />
        }
      />
      <ContentWrapper>
        <Logo className="logo-svg" />
        <Text color="var(--color-white)" textAlign="center" fontSize="var(--font-size-md)">
          예술은 비율 속 무한을 드러내며, <br />
          그 무한은 숨겨진 가치를 밝혀줍니다. <br />
          예술 속에 숨겨진 가치를 찾아드립니다.
        </Text>
        <KakaoLoginButton isMember={isMember} />
      </ContentWrapper>
      <Text
        fontSize="var(--font-size-xs)"
        color="var(--color-gray-dk)"
        position="absolute"
        left="16px"
        bottom="16px"
      >
        사진: Unsplash의 {backgroundImageCreator}
      </Text>
    </Wrapper>
  );
};

export default Login;

type KakaoLoginButtonProps = { isMember: boolean };

const KakaoLoginButton = ({ isMember }: KakaoLoginButtonProps) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!isMember) {
      navigate(`/${RouterPath.signup}`);
    }
  };

  return (
    <StyledKakaoLoginButton onClick={handleLogin}>
      <KakaoSymbol />
      카카오로 시작하기
    </StyledKakaoLoginButton>
  );
};

const Wrapper = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  min-height: 100vh;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: ${HEADER_HEIGHT} 0 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .logo-svg {
    path {
      fill: white;
    }
    width: 118.5px;
    height: 37.5px;

    @media (min-width: 480px) {
      width: 158px;
      height: 50px;
    }
  }
`;

const StyledKakaoLoginButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  padding: 10px 50px;
  background-color: var(--color-yellow-kakao);
  border-radius: var(--border-radius);
  gap: 16px;
  font-size: var(--font-size-md);
  font-weight: 500;
`;
