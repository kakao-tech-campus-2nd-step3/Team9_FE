import { useQuery } from '@tanstack/react-query';

import { APIResponse, FollowResponse } from '@/types';
import fetchInstance from '../instance';

async function getFollow(): Promise<APIResponse<FollowResponse>> {
  const response = await fetchInstance().get('/users/following');

  return response.data;
}

const useGetFollow = () => {
  const { data, status, refetch } = useQuery<APIResponse<FollowResponse>, Error>({
    queryKey: ['followList'],
    queryFn: getFollow,
  });

  return { data, status, refetch };
};

export default useGetFollow;
