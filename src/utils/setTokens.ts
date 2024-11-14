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
