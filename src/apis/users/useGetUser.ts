import { MyInfo } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchInstance } from '../instance';

const token = localStorage.getItem('accessToken');

export const getUser = async (): Promise<MyInfo> => {
  const response = await fetchInstance().get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetUser = () => {
  const { data, isLoading, isError } = useQuery<MyInfo, Error>({
    queryKey: ['userInfo'],
    queryFn: getUser,
  });

  return { data, isLoading, isError };
};
