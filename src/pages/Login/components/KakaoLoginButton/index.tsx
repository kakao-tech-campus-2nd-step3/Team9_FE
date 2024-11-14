import styled from '@emotion/styled';

import KakaoSymbol from '@/assets/kakao-symbol.svg?react';

type KakaoLoginButtonProps = {
  onClick: () => void;
};

const KakaoLoginButton = ({ onClick }: KakaoLoginButtonProps) => {
  return (
    <StyledKakaoLoginButton onClick={onClick}>
      <KakaoSymbol />
      카카오로 시작하기
    </StyledKakaoLoginButton>
  );
};

export default KakaoLoginButton;

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
