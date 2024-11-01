import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

import useVerifyBusiness from '@/apis/nts-businessman/useVerifyBusiness';
import CTA from '@/components/common/CTA';
import useBusinessInfoStore from '@/store/useBusinessArtistStore';
import { CustomInput, InputItem } from '../../../components/InputItem';
import { ProgressGuidance } from '../../styles';

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
            onSuccess(); // 인증 성공 시 Step2로 이동
          },
          onError: (error) => {
            setVerifyError(error.message);
          },
        },
      );
    }
  };

  return (
    <>
      <ProgressGuidance>사업자등록정보를 조회할게요.</ProgressGuidance>
      <form className="progress-container">
        <InputItem>
          <Box width="100%" display="flex" flexDir="column">
            <Text fontSize="var(--font-size-xs)" color="var(--color-gray-dk)">
              사업자등록번호
            </Text>
            <CustomInput
              type="number"
              placeholder="0000000000 (- 제외)"
              value={businessNumber ?? ''}
              onChange={(e) => setBusinessNumber(e.target.value)}
            />
          </Box>
          <Box width="100%" display="flex" flexDir="column">
            <Text fontSize="var(--font-size-xs)" color="var(--color-gray-dk)">
              개업일자
            </Text>
            <CustomInput
              type="date"
              placeholder="개업일자"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Box>
          <Box width="100%" display="flex" flexDir="column">
            <Text fontSize="var(--font-size-xs)" color="var(--color-gray-dk)">
              대표자명
            </Text>
            <CustomInput
              type="text"
              value={presidentName}
              onChange={(e) => setPresidentName(e.target.value)}
            />
          </Box>
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
      </form>
    </>
  );
};

export default BusinessSeller1;
