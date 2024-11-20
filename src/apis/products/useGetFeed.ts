import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';
import QUERY_KEYS from '../queryKeys';

export type Product = {
  id: number;
  name: string;
  artist: string;
  price: number;
  thumbnailUrl: string;
};

type GetFeedResponse = {
  hasNext: boolean;
  products: Product[];
};

async function getFeed(size: number): Promise<GetFeedResponse> {
  try {
    const response = await fetchInstance().get(`/products/feed?size=${size}`);

    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '피드 가져오기 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const useGetFeed = () => {
  const size = 20;

  return useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEYS.FEED, size],
    queryFn: () => getFeed(size),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.products.length / size + 1 : undefined;
    },
  });
};

export default useGetFeed;
