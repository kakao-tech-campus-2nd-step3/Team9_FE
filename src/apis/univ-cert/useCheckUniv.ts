import { useMutation, type UseMutationResult } from '@tanstack/react-query';

import { fetchInstance } from '../instance';
import { BASE_URL } from './index';

type UnivCertResponse = {
  success: boolean;
  code?: number; // 실패 시에만
  message?: string; // 실패 시에만
};

type CheckUnivProps = {
  univName: string;
};

async function checkUniv({ univName }: CheckUnivProps): Promise<UnivCertResponse> {
  const requestBody = { univName };

  const response = await fetchInstance(BASE_URL).post(`/check`, requestBody);
  console.log('checkUniv response: ', response);

  return response.data;
}

const useCheckUniv = (): UseMutationResult<UnivCertResponse, Error, CheckUnivProps> => {
  return useMutation<UnivCertResponse, Error, CheckUnivProps>({
    mutationFn: (props: CheckUnivProps) => checkUniv(props),
  });
};

export default useCheckUniv;
