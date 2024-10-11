export const RouterPath = {
  root: '/',
  home: '/',
  discover: '/discover',
  categories: '/categories',
  search: 'search',
  results: 'results',
  products: 'products',
  artists: 'artists',
  chat: '/chat',

  my: '/my',
  orders: 'orders',
  favorites: 'favorites',
  sales: 'sales',
  gallery: 'gallery',

  posting: 'posting',

  login: 'login',
  signup: 'signup',
  notFound: '*',
};

export const getDynamicPath = {
  // 로그인 필요한 페이지라면 로그인 페이지로 리디렉트, 로그인 완료 시 원래 페이지로 리디렉트
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.pathname; // host 뺀 경로(pathname)로 접근
    return `/${RouterPath.login}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
};
