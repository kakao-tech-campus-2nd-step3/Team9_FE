import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '../instance';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

type PostStudentArtistProps = {
  schoolEmail: string;
  schoolName: string;
  major: string;
  about: string;
};

type PostArtistResponse = string;

async function postStudentArtist({
  schoolEmail,
  schoolName,
  major,
  about,
}: PostStudentArtistProps): Promise<PostArtistResponse> {
  const requestBody = { schoolEmail, schoolName, major, about };

  try {
    const response = await fetchInstance(BASE_URL).post(`/artists/students`, requestBody);
    // console.log('certifyCode response: ', response);

    return response.data; // 맞는지 모르겠음 data가 그냥 string인 건지...?
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || '회원가입 실패');
    } else {
      throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
    }
  }
}

const usePostStudentArtist = () => {
  return useMutation<PostArtistResponse, Error, PostStudentArtistProps>({
    mutationFn: ({ schoolEmail, schoolName, major, about }: PostStudentArtistProps) =>
      postStudentArtist({ schoolEmail, schoolName, major, about }),
  });
};

export default usePostStudentArtist;
