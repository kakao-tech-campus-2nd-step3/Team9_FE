import { useMutation, useQueryClient } from '@tanstack/react-query';

import fetchInstance from '../instance';

async function deleteFollow(artistId: number): Promise<void> {
  const response = await fetchInstance().delete(`/users/following/${artistId}`);

  return response.data;
}

const useDeleteFollow = () => {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation<void, Error, number>({
    mutationFn: (artistId: number) => deleteFollow(artistId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['followList'] });
    },
    onError: (error) => {
      console.error('Failed to delete follow:', error);
    },
  });

  return { mutate, status };
};

export default useDeleteFollow;
