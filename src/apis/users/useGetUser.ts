import { useSuspenseQuery } from '@tanstack/react-query';

import { APIResponse } from '@/types';
import { UserInfo } from '@/types/user';
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
