import { useMutation, useQueryClient } from '@tanstack/react-query';

import fetchInstance from '../fetchInstance';
import QUERY_KEYS from '../queryKeys';

async function deleteLikes(productId: number): Promise<void> {
  await fetchInstance().delete(`/products/${productId}/likes`);
}

const useDeleteLikes = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation<void, Error, number>({
    mutationFn: (productId: number) => deleteLikes(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCT_LIST] });
    },
    onError: (error) => {
      console.error('Failed to delete likes:', error);
    },
  });

  return { mutate, status };
};

export default useDeleteLikes;
