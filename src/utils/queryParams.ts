export function getQueryParams(params: Record<any, any>) {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    queryParams.append(key, String(value)); // value가 any 타입이므로 stringfy하여 추가
  });
  queryParams.toString;

  // 'param1=param1&param2=param2' 형식으로 반환
  return queryParams;
}
