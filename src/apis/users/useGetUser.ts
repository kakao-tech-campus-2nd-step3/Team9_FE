import { APIResponse, ArtistInfo, UserInfo } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchInstance } from '../instance';

const token = localStorage.getItem('accessToken');

type UserMode = 'user' | 'artist';
type InfoType<T> = T extends 'user' ? UserInfo : ArtistInfo;

export const getUser = async <T extends UserMode>(mode: T): Promise<APIResponse<InfoType<T>>> => {
  const endpoint = mode === 'user' ? '/users' : '/artists';
  const response = await fetchInstance().get(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetUser = <T extends UserMode>(mode: T) => {
  const { data, isLoading, isError } = useQuery<APIResponse<InfoType<T>>, Error>({
    queryKey: ['userInfo', mode],
    queryFn: () => getUser(mode),
  });

  return { data, isLoading, isError };
};
