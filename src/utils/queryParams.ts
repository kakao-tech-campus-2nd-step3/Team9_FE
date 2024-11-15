/**
 * URL 쿼리 파라미터 관련 함수
 */

// query param으로 만들어 반환
export function getQueryParams(params: Record<any, any>): URLSearchParams {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    queryParams.append(key, String(value)); // value가 any 타입이므로 stringfy하여 추가
  });
  queryParams.toString;

  // 'param1=param1&param2=param2' 형식으로 반환
  return queryParams;
}

// 로그인 후 호출되어 query param의 토큰을 로컬 스토리지에 저장
export function setTokens(): void {
  const queryParams = new URLSearchParams(window.location.search);
  const accessToken = queryParams.get('accessToken');
  const refreshToken = queryParams.get('refreshToken');

  if (accessToken && refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
}
