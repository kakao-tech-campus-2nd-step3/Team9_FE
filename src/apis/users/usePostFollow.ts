import { useMutation } from '@tanstack/react-query';

import fetchInstance from '../fetchInstance';

async function postFollow(artistId: number): Promise<void> {
  await fetchInstance().post(`/users/following/${artistId}`, {});
}

const usePostFollow = () => {
  const { mutate, status } = useMutation<void, Error, number>({
    mutationFn: (artistId: number) => postFollow(artistId),
    onError: (error) => {
      console.error('API call failed:', error);
    },
  });

  return { mutate, status };
};

export default usePostFollow;
