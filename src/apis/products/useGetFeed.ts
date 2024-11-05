import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { fetchInstance } from '../instance';

type GetFeedProps = {
  size?: number;
};

type Products = {
  id: number;
  name: string;
  artist: string;
  price: number;
  thumnailUrl: string;
};

type GetFeedResponse = {
  hasNext: boolean;
  products: Products[];
};

async function getFeed({ size }: GetFeedProps): Promise<GetFeedResponse> {
  try {
    const response = await fetchInstance().get(`/products/feed?size=${size}`);
    // console.log('getFeed response: ', response);

    return response.data;
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

const useGetFeed = (size: number) => {
  return useSuspenseInfiniteQuery<GetFeedResponse, Error, GetFeedProps>({
    queryKey: ['feed'],
    queryFn: () => getFeed({ size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.products.length / size + 1 : undefined;
    },
  });
};

export default useGetFeed;
