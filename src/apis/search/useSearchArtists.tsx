import { APIResponse, InfiniteAPIResponse, SearchArtistsResponse } from '@/types';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import fetchInstance from '../instance';
import QueryKeys from '../queryKeys';

async function searchArtists(
  { pageParam = 0 }: { pageParam: number },
  query: string,
): Promise<APIResponse<SearchArtistsResponse>> {
  const size = 20;
  const response = await fetchInstance().get('/artists/search', {
    params: {
      query,
      size,
      page: pageParam,
    },
  });
  return response.data;
}

const useSearchArtists = (query: string) => {
  const queryResult = useSuspenseInfiniteQuery<
    APIResponse<SearchArtistsResponse>,
    Error,
    InfiniteAPIResponse<SearchArtistsResponse>,
    [string, string],
    number
  >({
    queryKey: [QueryKeys.ARTIST_LIST, query],
    queryFn: ({ pageParam }) => searchArtists({ pageParam }, query),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.hasNext ? allPages.length : undefined;
    },
  });

  return queryResult;
};

export default useSearchArtists;
