import { APIResponse, SearchProductsResponse } from '@/types';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import fetchInstance from '../instance';
import QueryKeys from '../queryKeys';

async function getWishes({
  pageParam = 0,
}: {
  pageParam: number;
}): Promise<APIResponse<SearchProductsResponse>> {
  const size = 20;
  const response = await fetchInstance().get('/wishes', {
    params: {
      size,
      page: pageParam,
    },
  });
  return response.data;
}

const useGetWishes = () => {
  const queryResult = useSuspenseInfiniteQuery<
    APIResponse<SearchProductsResponse>,
    Error,
    APIResponse<SearchProductsResponse>,
    [string],
    number
  >({
    queryKey: [QueryKeys.WISH_LIST],
    queryFn: ({ pageParam }) => getWishes({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.hasNext ? allPages.length : undefined;
    },
  });

  return queryResult;
};

export default useGetWishes;
