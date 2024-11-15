import { useMutation } from '@tanstack/react-query';

import fetchInstance from '../fetchInstance';

async function postLikes(productId: number): Promise<void> {
  await fetchInstance().post(`/products/${productId}/likes`, {});
}

const usePostLikes = () => {
  const { mutate, status } = useMutation<void, Error, number>({
    mutationFn: (productId: number) => postLikes(productId),
    onError: (error) => {
      console.error('API call failed:', error);
    },
  });

  return { mutate, status };
};

export default usePostLikes;
