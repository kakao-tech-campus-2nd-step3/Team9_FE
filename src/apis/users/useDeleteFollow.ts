import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchInstance } from '../instance';

const token = localStorage.getItem('accessToken');

export const deleteFollow = async (artistId: number): Promise<void> => {
  const response = await fetchInstance().delete(`/users/following/${artistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useDeleteFollow = () => {
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
