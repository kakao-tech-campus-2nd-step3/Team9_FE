import { APIResponse, FollowResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchInstance, queryKey } from '../instance';

const token = localStorage.getItem('accessToken');

const getFollow = async (): Promise<APIResponse<FollowResponse>> => {
  const response = await fetchInstance().get('/users/following', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetFollow = () => {
  const { data, status, refetch } = useQuery<APIResponse<FollowResponse>, Error>({
    queryKey: queryKey.followList,
    queryFn: getFollow,
  });

  return { data, status, refetch };
};
