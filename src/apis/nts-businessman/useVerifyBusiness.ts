import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '../instance';
import { API_KEY, BASE_URL } from './index';

// 필수 키만
type VerifyProps = {
  b_no: number;
  start_dt: number;
  p_nm: string;
};

async function verify({ b_no, start_dt, p_nm }: VerifyProps): Promise<void> {
  const requestBody = {
    businesses: [
      {
        b_no,
        start_dt,
        p_nm,
        p_nm2: '',
        b_nm: '',
        corp_no: '',
        b_sector: '',
        b_type: '',
      },
    ],
  };

  try {
    const response = await fetchInstance(BASE_URL).post(
      `/validate?serviceKey=${API_KEY}`,
      requestBody,
    );
    console.log('verify response: ', response);
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        error.response.data.msg ||
          error.response.data.status_code ||
          '사업자등록정보 인증에 실패했습니다.',
      );
    } else {
      throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
    }
  }
}

const useVerifyBusiness = () => {
  return useMutation<void, Error, VerifyProps>({
    mutationFn: (props: VerifyProps) => verify(props),
  });
};

export default useVerifyBusiness;
