// 임시
import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '../instance';

type TestLoginResponse = { accessToken: string; refreshToken: string };

async function testLogin(): Promise<TestLoginResponse> {
  const response = await fetchInstance().get(`/test/signup`);
  // console.log('certifyCode response: ', response);

  localStorage.setItem('accessToken', response.data.accessToken);
  localStorage.setItem('refreshToken', response.data.refreshToken);
  return response.data;
}

const useTestLogin = () =>
  useMutation({
    mutationFn: testLogin,
  });

export default useTestLogin;
