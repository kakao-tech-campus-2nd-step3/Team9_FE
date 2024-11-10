import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';

type PostBusinessArtistProps = {
  businessNumber: number;
  openDate: string;
  headName: string;
  about: string;
};

async function postBusinessArtist({
  businessNumber,
  openDate,
  headName,
  about,
}: PostBusinessArtistProps): Promise<void> {
  const requestBody = { businessNumber, openDate, headName, about };

  try {
    await fetchInstance().post(`/artists/bussinesses`, requestBody);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '회원가입 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const usePostBusinessArtist = () => {
  return useMutation<void, Error, PostBusinessArtistProps>({
    mutationFn: (props: PostBusinessArtistProps) => postBusinessArtist(props),
  });
};

export default usePostBusinessArtist;
