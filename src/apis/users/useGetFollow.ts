import { useQuery } from '@tanstack/react-query';

import { APIResponse, FollowResponse } from '@/types';
import fetchInstance from '../fetchInstance';
import QUERY_KEYS from '../queryKeys';

async function getFollow(): Promise<APIResponse<FollowResponse>> {
  const response = await fetchInstance().get('/users/following');

  return response.data;
}

const useGetFollow = () => {
  const { data, status, refetch } = useQuery<APIResponse<FollowResponse>, Error>({
    queryKey: [QUERY_KEYS.FOLLOW_LIST],
    queryFn: getFollow,
  });

  return { data, status, refetch };
};

export default useGetFollow;
