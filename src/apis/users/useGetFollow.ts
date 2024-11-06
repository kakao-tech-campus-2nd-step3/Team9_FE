import { FollowResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchInstance } from '../instance';

const token = localStorage.getItem('accessToken');

export const getFollow = async (): Promise<FollowResponse> => {
  const response = await fetchInstance().get('/users/following', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetFollow = () => {
  const { data, status, error } = useQuery<FollowResponse, Error>({
    queryKey: ['followList'],
    queryFn: getFollow,
  });

  return { data, status, error };
};
