import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';

type PostStudentArtistProps = {
  schoolEmail: string;
  schoolName: string;
  major: string;
  about: string;
};

async function postStudentArtist({
  schoolEmail,
  schoolName,
  major,
  about,
}: PostStudentArtistProps): Promise<void> {
  const requestBody = { schoolEmail, schoolName, major, about };

  try {
    await fetchInstance().post(`/artists/students`, requestBody);

    // console.log('postStudentArtist response: ', response);
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

const usePostStudentArtist = () => {
  return useMutation<void, Error, PostStudentArtistProps>({
    mutationFn: (props: PostStudentArtistProps) => postStudentArtist(props),
  });
};

export default usePostStudentArtist;
