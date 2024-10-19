import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Route, useNavigate } from 'react-router-dom';

import KakaoSymbol from '@/assets/kakao-symbol.svg?react';
import Logo from '@/assets/logo.svg?react';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { RouterPath } from '@/routes/path';
import IconButton from '@/components/common/IconButton';

const backgroundImageList: { src: string; creator: string }[] = [
  {
    src: 'https://images.unsplash.com/photo-1653315215217-ac5b8dde9cd3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1649115727835-0d8eee476bdc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1715267264107-4d6a0a80852f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1645460223610-39a23a7022a4?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    creator:
      '사진: <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%81%9D%EC%97%90-%EB%B9%9B%EC%9D%B4-%EC%9E%88%EB%8A%94-%EB%82%98%EC%84%A0%ED%98%95-%EA%B3%84%EB%8B%A8-iV-Fyo7_Neg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>의<a href="https://unsplash.com/ko/@vinsen_cekrani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vinsen Cekrani</a>',
  },
];

const Login = () => {
  const isMember = false; // 추후 API 연동
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!isMember) {
      navigate(`/${RouterPath.signup}`);
    }
  };

  return (
    <Wrapper backgroundImage={backgroundImageList[0].src}>
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
        <KakaoLoginButton onClick={handleLogin}>
          <KakaoSymbol />
          카카오로 시작하기
        </KakaoLoginButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  min-height: 100vh;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
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

const KakaoLoginButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  padding: 10px 16px;
  background-color: var(--color-yellow-kakao);
  border-radius: var(--border-radius);
  gap: 16px;
  font-size: var(--font-size-md);
  font-weight: 500;
`;
