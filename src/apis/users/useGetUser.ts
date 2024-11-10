import { APIResponse, ArtistInfo, Mode, UserInfo } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchInstance } from '../instance';

type InfoType<T extends Mode> = T extends 'user' ? UserInfo : ArtistInfo;

const getUser = async <T extends Mode>(mode: T): Promise<APIResponse<InfoType<T>>> => {
  const endpoint = mode === 'user' ? '/users' : '/artists';
  const response = await fetchInstance().get(endpoint);
  return response.data;
};

export const useGetUser = <T extends Mode>(mode: T) => {
  const { data, isLoading, isError } = useQuery<APIResponse<InfoType<T>>, Error>({
    queryKey: ['userInfo', mode],
    queryFn: () => getUser(mode),
  });

  return { data, isLoading, isError };
};
