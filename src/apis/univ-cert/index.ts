import { AxiosError } from 'axios';

import { fetchInstance } from '../instance';

const BASE_URL = 'https://univcert.com/api/v1';
const API_KEY = import.meta.env.VITE_APP_UNIVCERT_API_KEY;

type PostCheckUnivProps = {
  univName: string;
};

type PostCheckUnivResponse = {
  code?: number;
  success: boolean;
  message?: string;
};

export async function postCheckUniv({
  univName,
}: PostCheckUnivProps): Promise<PostCheckUnivResponse> {
  const requestBody = { univName };

  try {
    const response = await fetchInstance(BASE_URL).post(`/check`, requestBody);
    console.log('postCheckUniv response: ', response);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response;
    }
    // AxiosError가 아닌 경우 예외 처리
    throw new Error('postCheckUniv error: unexpected');
  }
}

type PostCertifyProps = {
  key: string;
  email: string;
  univName: string;
  univ_check: boolean;
};

export async function postCertify({
  key = API_KEY,
  email,
  univName,
  univ_check = true,
}: PostCertifyProps): Promise<void> {
  const requestBody = { key, email, univName, univ_check };

  try {
    const response = await fetchInstance(BASE_URL).post(`/certify`, requestBody);
    console.log('postCertify response: ', response);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response;
    }
    // AxiosError가 아닌 경우 예외 처리
    throw new Error('postCertify error: unexpected');
  }
}
