import { useMutation, type UseMutationResult } from '@tanstack/react-query';

import fetchInstance from '../fetchInstance';
import { BASE_URL } from './index';

type UnivCertResponse = {
  success: boolean;
  message?: string; // 실패 시에만
};

type CheckUnivProps = {
  univName: string;
};

async function checkUniv({ univName }: CheckUnivProps): Promise<UnivCertResponse> {
  const requestBody = { univName };

  // 실패해도 에러 처리 안 됨. 정상 응답 옴
  const response = await fetchInstance(BASE_URL).post(`/check`, requestBody);
  // console.log('checkUniv response: ', response);

  return response.data;
}

const useCheckUniv = (): UseMutationResult<UnivCertResponse, Error, CheckUnivProps> => {
  return useMutation<UnivCertResponse, Error, CheckUnivProps>({
    mutationFn: (props: CheckUnivProps) => checkUniv(props),
  });
};

export default useCheckUniv;
