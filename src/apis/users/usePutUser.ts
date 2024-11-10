import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';

type PutUserProps = {
  name: string;
  userImageUrl?: string;
  nickname: string;
  email: string;
  birthdate: string;
  phone: string;
  address?: string;
  hashTags?: string[];
};

async function putUser({
  name,
  userImageUrl = '',
  nickname,
  email,
  birthdate,
  phone,
  address,
  hashTags = [],
}: PutUserProps): Promise<void> {
  const requestBody = {
    name,
    userImageUrl,
    nickname,
    email,
    birthdate,
    phone,
    address,
    hashTags,
  };

  try {
    await fetchInstance().put(`/users`, requestBody);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '유저 정보 수정 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const usePutUser = () => {
  return useMutation<void, Error, PutUserProps>({
    mutationFn: (props: PutUserProps) => putUser(props),
  });
};

export default usePutUser;
