import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { getDynamicPath } from './path';
import { RouterPath } from './path';

export const ProtectedRoute = () => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  // accessToken이 없으면 로그인 페이지로 리다이렉트, 있으면 자식 요소(페이지) 렌더링
  // 로그인 구현에 따라 추후 변동 가능성 O

  useEffect(() => {
    const currentPath = window.location.pathname;
    // 현재 경로가 로그인 페이지가 아닐 때만 경고 표시
    if (!accessToken && currentPath !== `/${RouterPath.login}`) {
      alert('로그인 후 이용해주세요.');
      navigate(getDynamicPath.login());
    }
  }, [accessToken, navigate]);

  return accessToken ? <Outlet /> : null;
};
