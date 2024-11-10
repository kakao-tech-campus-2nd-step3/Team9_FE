import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';
import { API_KEY, BASE_URL } from './index';

// 필수 키만
type VerifyProps = {
  b_no: string; // 사업자등록번호
  start_dt: string; // 개업일자
  p_nm: string; // 대표자성명
};

async function verify({ b_no, start_dt, p_nm }: VerifyProps): Promise<void> {
  const requestBody = {
    businesses: [
      {
        b_no,
        start_dt,
        p_nm,
        p_nm2: '', // 대표자성명2
        b_nm: '', // 상호
        corp_no: '', // 법인등록번호
        b_sector: '', // 주업태명
        b_type: '', // 주종목명
      },
    ],
  };

  try {
    await fetchInstance(BASE_URL).post(`/validate?serviceKey=${API_KEY}`, requestBody);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          error.response.data.msg ||
            error.response.data.status_code ||
            '사업자등록정보 조회에 실패했습니다.',
        );
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const useVerifyBusiness = () => {
  return useMutation<void, Error, VerifyProps>({
    mutationFn: (props: VerifyProps) => verify(props),
  });
};

export default useVerifyBusiness;
