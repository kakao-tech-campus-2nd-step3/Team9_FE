import { APIResponse, ArtistInfo } from '@/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import fetchInstance from '../instance';
import QueryKeys from '../queryKeys';

async function getArtist(): Promise<APIResponse<ArtistInfo>> {
  const response = await fetchInstance().get('/artists');
  return response.data;
}

const useGetArtist = () => {
  const { data } = useSuspenseQuery<APIResponse<ArtistInfo>, Error>({
    queryKey: [QueryKeys.USER_INFO],
    queryFn: getArtist,
  });

  return { data };
};

export default useGetArtist;
