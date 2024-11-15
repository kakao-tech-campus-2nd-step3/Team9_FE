import { useSuspenseQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { UserInfo } from '@/types/user';
import fetchInstance from '../instance';
import QueryKeys from '../queryKeys';

type UserDetailsResponse = UserInfo;

async function getUserDetails(): Promise<UserDetailsResponse> {
  try {
    const response = await fetchInstance().get('/users/details');

    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '유저 디테일 가져오기 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const useGetUserDetails = () => {
  return useSuspenseQuery<UserDetailsResponse, Error>({
    queryKey: [QueryKeys.USER_DETAILS],
    queryFn: getUserDetails,
  });
};

export default useGetUserDetails;
