import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';
import { API_KEY, BASE_URL } from './index';

type UnivCertResponse = {
  success: boolean;
};

type CertifyEmailProps = {
  email: string;
  univName: string;
};

async function certifyEmail({ email, univName }: CertifyEmailProps): Promise<UnivCertResponse> {
  const requestBody = { key: API_KEY, email, univName, univ_check: true };

  try {
    const response = await fetchInstance(BASE_URL).post(`/certify`, requestBody);
    // console.log('certifyEmail response: ', response);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '인증코드 전송에 실패했습니다.');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const useCertifyEmail = (): UseMutationResult<UnivCertResponse, Error, CertifyEmailProps> => {
  return useMutation<UnivCertResponse, Error, CertifyEmailProps>({
    mutationFn: ({ email, univName }: CertifyEmailProps) => certifyEmail({ email, univName }),
  });
};

export default useCertifyEmail;
