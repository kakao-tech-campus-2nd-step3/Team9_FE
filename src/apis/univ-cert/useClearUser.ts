import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '../instance';
import { API_KEY, BASE_URL } from './index';

type ClearUserProps = {
  email: string;
};

type ClearUserResponse = {
  success: boolean;
  status?: number; // 실패 시에만
  message?: string; // 실패 시에만
};

async function clearUser({ email }: ClearUserProps): Promise<ClearUserResponse> {
  const requestBody = { key: API_KEY };

  const response = await fetchInstance(BASE_URL).post(`/clear/${email}`, requestBody);
  console.log('clearUser response: ', response);

  return response.data;
}

const useClearUser = () => {
  return useMutation<ClearUserResponse, Error, ClearUserProps>({
    mutationFn: (email: ClearUserProps) => clearUser(email),
  });
};

export default useClearUser;
