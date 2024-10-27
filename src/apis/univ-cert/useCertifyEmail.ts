import { useMutation, type UseMutationResult } from '@tanstack/react-query';

import { fetchInstance } from '../instance';
import { API_KEY, BASE_URL } from './index';

type UnivCertResponse = {
  success: boolean;
  code?: number; // 실패 시에만
  message?: string; // 실패 시에만
};

type CertifyEmailProps = {
  email: string;
  univName: string;
};

async function certifyEmail({ email, univName }: CertifyEmailProps): Promise<UnivCertResponse> {
  const requestBody = { key: API_KEY, email, univName, univ_check: true };

  const response = await fetchInstance(BASE_URL).post(`/certify`, requestBody);
  console.log('certifyEmail response: ', response);

  return response.data;
}

const useCertifyEmail = (): UseMutationResult<UnivCertResponse, Error, CertifyEmailProps> => {
  return useMutation<UnivCertResponse, Error, CertifyEmailProps>({
    mutationFn: ({ email, univName }: CertifyEmailProps) => certifyEmail({ email, univName }),
  });
};

export default useCertifyEmail;
