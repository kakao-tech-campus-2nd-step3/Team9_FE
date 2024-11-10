import { useMutation } from '@tanstack/react-query';

import fetchInstance from '../fetchInstance';
import { API_KEY, BASE_URL } from './index';

type CertifyCodeProps = {
  email: string;
  univName: string;
  code: string;
};

type CertifyCodeResponse = {
  success: boolean;
  univName: string;
  certified_email: string;
  certified_date: string;
  message?: string; // 실패 시에만
};

async function certifyCode({
  email,
  univName,
  code,
}: CertifyCodeProps): Promise<CertifyCodeResponse> {
  const requestBody = { key: API_KEY, email, univName, code };

  // 실패해도 에러 처리 안 됨. 정상 응답 옴
  const response = await fetchInstance(BASE_URL).post(`/certifycode`, requestBody);
  // console.log('certifyCode response: ', response);

  return response.data;
}

const useCertifyCode = () => {
  return useMutation<CertifyCodeResponse, Error, CertifyCodeProps>({
    mutationFn: ({ email, univName, code }: CertifyCodeProps) =>
      certifyCode({ email, univName, code }),
  });
};

export default useCertifyCode;
