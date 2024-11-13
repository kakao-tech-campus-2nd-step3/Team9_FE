// import { useSuspenseQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';
// import QUERY_KEYS from '../queryKeys';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

type GetLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export async function getKakaoLgoin(): Promise<GetLoginResponse> {
  try {
    const response = await fetchInstance(BASE_URL).get(`/oauth2/login/kakao`);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '로그인 페이지 이동 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

// const useGetKakaoLogin = () => {
//   return useSuspenseQuery({
//     queryKey: [QUERY_KEYS.LOGIN],
//     queryFn: getKakaoLgoin,
//   });
// };

// export default useGetKakaoLogin;
