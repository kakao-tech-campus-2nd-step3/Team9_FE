// import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import type { UserType } from '@/types/user';
import fetchInstance from '../fetchInstance';
// import QUERY_KEYS from '../queryKeys';

type UserTypeResponse = { role: string; userType: UserType };

async function getUserType(): Promise<UserTypeResponse> {
  try {
    const response = await fetchInstance().get('/users/type');

    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || 'user type 가져오기 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

// const useGetFollow = () => {
//   const { data, status, refetch } = useQuery<APIResponse<FollowResponse>, Error>({
//     queryKey: [QUERY_KEYS.FOLLOW_LIST],
//     queryFn: getFollow,
//   });

//   return { data, status, refetch };
// };

// export default useGetFollow;

export default getUserType;
