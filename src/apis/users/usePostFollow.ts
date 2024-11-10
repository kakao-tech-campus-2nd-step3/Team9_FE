import { useMutation } from '@tanstack/react-query';
import fetchInstance from '../instance';

export const postFollow = async (artistId: number): Promise<void> => {
  const response = await fetchInstance().post(`/users/following/${artistId}`, {});
  return response.data;
};

export const usePostFollow = () => {
  const { mutate, status } = useMutation<void, Error, number>({
    mutationFn: (artistId: number) => postFollow(artistId),
    onError: (error) => {
      console.error('API call failed:', error);
    },
  });

  return { mutate, status };
};
