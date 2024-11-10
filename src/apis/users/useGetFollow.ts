import { APIResponse, FollowResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import fetchInstance from '../instance';

const getFollow = async (): Promise<APIResponse<FollowResponse>> => {
  const response = await fetchInstance().get('/users/following');
  return response.data;
};

export const useGetFollow = () => {
  const { data, status, refetch } = useQuery<APIResponse<FollowResponse>, Error>({
    queryKey: ['followList'],
    queryFn: getFollow,
  });

  return { data, status, refetch };
};
