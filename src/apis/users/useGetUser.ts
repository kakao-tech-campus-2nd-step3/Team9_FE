import { APIResponse, UserInfo } from '@/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import fetchInstance from '../instance';
import QueryKeys from '../queryKeys';

async function getUser(): Promise<APIResponse<UserInfo>> {
  const response = await fetchInstance().get('/users');
  return response.data;
}

const useGetUser = () => {
  const { data } = useSuspenseQuery<APIResponse<UserInfo>, Error>({
    queryKey: [QueryKeys.USER_INFO],
    queryFn: getUser,
  });

  return { data };
};

export default useGetUser;
