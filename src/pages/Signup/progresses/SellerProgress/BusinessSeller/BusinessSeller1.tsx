import { useState } from 'react';

import useVerifyBusiness from '@/apis/nts-businessman/useVerifyBusiness';
import CTA from '@/components/common/CTA';
import useBusinessInfoStore from '@/store/useBusinessInfoStore';
import { CustomInput, InputItem } from '../../../components/InputItem';
import { Text } from '@chakra-ui/react';

type BusinessSeller1Props = {
  onSuccess: () => void;
};

const BusinessSeller1 = ({ onSuccess }: BusinessSeller1Props) => {
  const {
    businessNumber,
    setBusinessNumber,
    startDate,
    setStartDate,
    presidentName,
    setPresidentName,
  } = useBusinessInfoStore();

  const { mutate: verify } = useVerifyBusiness();
  const [verifyError, setVerifyError] = useState<string>('');

  const removeHyphen = (str: string) => {
    return str.replace(/-/g, '');
  };

  // 인증하기
  const handleVerifyBusiness = (e: React.MouseEvent) => {
    e.preventDefault();

    setVerifyError('');

    if (businessNumber && startDate && presidentName) {
      verify(
        { b_no: businessNumber, start_dt: removeHyphen(startDate), p_nm: presidentName },
        {
          onSuccess: () => {
            // onSuccess(); // 인증 성공 시 Step2로 이동
            alert('인증 성공');
          },
          onError: (error) => {
            setVerifyError(error.message);
          },
        },
      );
    }
  };

  return (
    <InputItem label="사업자등록정보 조회">
      <CustomInput
        type="number"
        placeholder="사업자등록번호"
        value={businessNumber ?? ''}
        onChange={(e) => setBusinessNumber(e.target.value)}
      />
      <CustomInput
        type="date"
        placeholder="개업일자"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <CustomInput
        type="text"
        placeholder="대표자명"
        value={presidentName}
        onChange={(e) => setPresidentName(e.target.value)}
      />
      <CTA
        label="인증하기"
        disabled={!(businessNumber && startDate && presidentName)}
        onClick={handleVerifyBusiness}
      />
      {verifyError && (
        <Text fontSize="var(--font-size-xs)" color="var(--color-red)" marginTop="4px">
          {verifyError}
        </Text>
      )}
    </InputItem>
  );
};

export default BusinessSeller1;
