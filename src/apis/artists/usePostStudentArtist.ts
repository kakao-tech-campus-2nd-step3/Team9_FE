import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '../instance';

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
  const token = localStorage.getItem('accessToken');

  try {
    await fetchInstance().post(`/artists/students`, requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log('postStudentArtist response: ', response);
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '회원가입 실패');
    } else {
      throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
    }
  }
}

const usePostStudentArtist = () => {
  return useMutation<void, Error, PostStudentArtistProps>({
    mutationFn: (props: PostStudentArtistProps) => postStudentArtist(props),
  });
};

export default usePostStudentArtist;
