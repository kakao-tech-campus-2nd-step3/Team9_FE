import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { getDynamicPath } from './path';

export const ProtectedRoute = () => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  // accessToken이 없으면 로그인 페이지로 리다이렉트, 있으면 자식 요소(페이지) 렌더링
  // 로그인 구현에 따라 추후 변동 가능성 O
  useEffect(() => {
    if (!accessToken) {
      alert('로그인 후 이용해주세요.');
      navigate(getDynamicPath.login());
    }
  }, [accessToken, navigate]);

  return accessToken ? <Outlet /> : null;
};
