import { useSuspenseQuery } from '@tanstack/react-query';

import { APIResponse, ProfileResponse } from '@/types';
import fetchInstance from '../fetchInstance';
import QUERY_KEYS from '../queryKeys';

async function getProfile(artistInfoId: number | null): Promise<APIResponse<ProfileResponse>> {
  const response = await fetchInstance().get(`/artists/${artistInfoId}`);

  return response.data;
}

const useGetProfile = (artistInfoId: number | null) => {
  const { data } = useSuspenseQuery<APIResponse<ProfileResponse>, Error>({
    queryKey: [QUERY_KEYS.ARTIST_PROFILE, artistInfoId],
    queryFn: () => getProfile(artistInfoId),
  });

  return { data };
};

export default useGetProfile;
