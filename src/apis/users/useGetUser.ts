import { APIResponse, UserInfo } from '@/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchInstance, queryKey } from '../instance';

const token = localStorage.getItem('accessToken');

const getUser = async (): Promise<APIResponse<UserInfo>> => {
  const response = await fetchInstance().get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetUser = () => {
  const { data } = useSuspenseQuery<APIResponse<UserInfo>, Error>({
    queryKey: queryKey.userInfo,
    queryFn: getUser,
  });

  return { data };
};
