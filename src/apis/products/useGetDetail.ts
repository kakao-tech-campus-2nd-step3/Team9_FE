import { useSuspenseQuery } from '@tanstack/react-query';

import { APIResponse, ProductResponse } from '@/types';
import fetchInstance from '../fetchInstance';
import QUERY_KEYS from '../queryKeys';

async function getDetail(productId: number | null): Promise<APIResponse<ProductResponse>> {
  const response = await fetchInstance().get(`/products/${productId}`);

  return response.data;
}

const useGetDetail = (productId: number | null) => {
  const { data } = useSuspenseQuery<APIResponse<ProductResponse>, Error>({
    queryKey: [QUERY_KEYS.PRODUCT_DETAIL, productId],
    queryFn: () => getDetail(productId),
  });

  return { data };
};

export default useGetDetail;
