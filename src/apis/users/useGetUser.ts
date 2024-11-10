import { useQuery } from '@tanstack/react-query';

import { APIResponse, ArtistInfo, Mode, UserInfo } from '@/types';
import fetchInstance from '../instance';
import QUERY_KEYS from '../queryKeys';

type InfoType<T extends Mode> = T extends 'user' ? UserInfo : ArtistInfo;

async function getUser<T extends Mode>(mode: T): Promise<APIResponse<InfoType<T>>> {
  const endpoint = mode === 'user' ? '/users' : '/artists';
  const response = await fetchInstance().get(endpoint);

  return response.data;
}

const useGetUser = <T extends Mode>(mode: T) => {
  const { data, isLoading, isError } = useQuery<APIResponse<InfoType<T>>, Error>({
    queryKey: [QUERY_KEYS.USER_INFO, mode],
    queryFn: () => getUser(mode),
  });

  return { data, isLoading, isError };
};

export default useGetUser;
