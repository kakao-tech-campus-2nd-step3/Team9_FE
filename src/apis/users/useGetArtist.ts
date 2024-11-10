import { APIResponse, ArtistInfo } from '@/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchInstance } from '../instance';

const token = localStorage.getItem('accessToken');

const getArtist = async (): Promise<APIResponse<ArtistInfo>> => {
  const response = await fetchInstance().get('/artists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetArtist = () => {
  const { data } = useSuspenseQuery<APIResponse<ArtistInfo>, Error>({
    queryKey: ['userInfo'],
    queryFn: getArtist,
  });

  return { data };
};
