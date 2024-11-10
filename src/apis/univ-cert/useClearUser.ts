import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';
import { API_KEY, BASE_URL } from './index';

type ClearUserProps = {
  email: string;
};

type ClearUserResponse = {
  success: boolean;
};

async function clearUser({ email }: ClearUserProps): Promise<ClearUserResponse> {
  const requestBody = { key: API_KEY };

  try {
    const response = await fetchInstance(BASE_URL).post(`/clear/${email}`, requestBody);
    // console.log('clearUser response: ', response);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '인증 취소 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const useClearUser = () => {
  return useMutation<ClearUserResponse, Error, ClearUserProps>({
    mutationFn: (email: ClearUserProps) => clearUser(email),
  });
};

export default useClearUser;
