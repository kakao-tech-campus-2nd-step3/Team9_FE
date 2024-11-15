import { APIResponse, InfiniteAPIResponse, SearchProductsResponse } from '@/types';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import fetchInstance from '../instance';
import QueryKeys from '../queryKeys';

async function searchProducts(
  { pageParam = 0 }: { pageParam: number },
  query: string,
): Promise<APIResponse<SearchProductsResponse>> {
  const size = 20;
  const sort = 'LATEST';
  const response = await fetchInstance().get('/products', {
    params: {
      query,
      size,
      page: pageParam,
      sort,
    },
  });
  return response.data;
}

const useSearchProducts = (query: string) => {
  const queryResult = useSuspenseInfiniteQuery<
    APIResponse<SearchProductsResponse>,
    Error,
    InfiniteAPIResponse<SearchProductsResponse>,
    [string, string],
    number
  >({
    queryKey: [QueryKeys.PRODUCT_LIST, query],
    queryFn: ({ pageParam }) => searchProducts({ pageParam }, query),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.hasNext ? allPages.length : undefined;
    },
  });

  return queryResult;
};

export default useSearchProducts;
