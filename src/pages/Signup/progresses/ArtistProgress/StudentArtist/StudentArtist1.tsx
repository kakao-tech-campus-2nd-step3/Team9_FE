import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

import useCertifyCode from '@/apis/univ-cert/useCertifyCode';
import useCertifyEmail from '@/apis/univ-cert/useCertifyEmail';
import useCheckUniv from '@/apis/univ-cert/useCheckUniv';
import useClearUser from '@/apis/univ-cert/useClearUser';
import CTA from '@/components/common/CTA';
import useStudentInfoStore from '@/store/useStudentArtistStore';
import { CustomInput, InputItem } from '../../../components/InputItem';
import { ProgressGuidance } from '../../styles';
import { handleEmailChange } from '../../utils';

type StudentArtist1Props = {
  onSuccess: () => void;
};

const StudentArtist1 = ({ onSuccess }: StudentArtist1Props) => {
  const { univEmail, setUnivEmail, univName, setUnivName } = useStudentInfoStore();
  const [isUnivValid, setIsUnivValid] = useState<boolean>(true);
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);
  const [isEmailChecked, setIsEmailChecked] = useState<boolean>(false);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [isCodeValid, setIsCodeValid] = useState<boolean>(true);

  const { mutate: checkUniv } = useCheckUniv();
  const { mutate: certifyEmail } = useCertifyEmail();
  const { mutate: certifyCode } = useCertifyCode();
  const { mutate: clearUser } = useClearUser();
  const [checkUnivError, setCheckUnivError] = useState<string | undefined>('');
  const [certifyEmailError, setCertifyEmailError] = useState<string | undefined>('');
  const [certifyCodeError, setCertifyCodeError] = useState<string | undefined>('');

  // 대학명 체크, 인증코드 전송
  const handleSendCode = async (e: React.MouseEvent) => {
    e.preventDefault();

    setCheckUnivError('');

    if (!univName || !univEmail) {
      return;
    }

    checkUniv(
      { univName },
      {
        onSuccess: (data) => {
          if (data.success) {
            setIsEmailChecked(true);
            setCertifyEmailError('');

            certifyEmail(
              { email: univEmail, univName },
              {
                onSuccess: (data) => {
                  if (data.success) {
                    setIsCodeSent(true);
                    alert('인증코드가 전송되었습니다.\n메일함을 확인해주세요.');
                  } else {
                    alert('인증코드 전송에 실패했습니다.');
                  }
                },
                onError: (error) => {
                  setCertifyEmailError(error.message);
                  alert(certifyEmailError);
                },
              },
            );
          } else {
            setIsUnivValid(false);
            setCheckUnivError(data.message);
          }
        },
        onError: (error) => {
          setIsUnivValid(false);
          setCheckUnivError(error.message);
        },
      },
    );
  };

  // 인증코드 값 업데이트
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    setCertifyCodeError('');
  };

  // 인증하기
  const handleVerifyCode = (e: React.MouseEvent) => {
    e.preventDefault();

    setCertifyCodeError('');

    if (!code) {
      return;
    }

    certifyCode(
      { email: univEmail, univName, code },
      {
        onSuccess: (data) => {
          if (data.success) {
            setIsCodeValid(true);
            setUnivName(data.univName);
            setUnivEmail(data.certified_email);
            onSuccess(); // 인증 성공 시 Step2로 이동
          } else {
            setIsCodeValid(false);
            setCertifyCodeError(data.message);
          }
        },
        onError: (error) => {
          setCertifyCodeError(error.message);
        },
      },
    );
  };

  // 인증된 유저 이메일 삭제 - 임시
  const handleRevoke = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!univEmail) {
      return;
    }

    clearUser(
      { email: univEmail },
      {
        onSuccess: (data) => {
          if (data.success) {
            alert('인증 취소되었습니다.');
          } else {
            alert('인증 취소 오류');
          }
        },
        onError: (error) => {
          alert(error.message);
        },
      },
    );
  };

  return (
    <>
      <ProgressGuidance>학생 인증을 진행할게요.</ProgressGuidance>
      <form className="progress-container">
        <InputItem>
          <Box width="100%" display="flex" flexDir="column">
            <Text fontSize="var(--font-size-xs)" color="var(--color-gray-dk)">
              대학명
            </Text>
            <CustomInput
              type="text"
              placeholder="OO대학교"
              value={univName}
              onChange={(e) => setUnivName(e.target.value)}
              valid={isUnivValid}
              caution={checkUnivError}
            />
          </Box>
          <Box width="100%" display="flex" flexDir="column">
            <Text fontSize="var(--font-size-xs)" color="var(--color-gray-dk)">
              이메일
            </Text>
            <CustomInput
              type="email"
              placeholder="abc@1618.com"
              value={univEmail}
              onChange={(e) => handleEmailChange(e, setUnivEmail, setIsEmailFormValid)}
              valid={isEmailFormValid}
              caution={'올바른 이메일 형식으로 입력해주세요.'}
            />
          </Box>
          <CTA
            label={isEmailChecked ? '재발송' : '인증코드 발송'}
            disabled={!(univName && isEmailFormValid)}
            onClick={handleSendCode}
          />
          {isCodeSent && (
            <Box display="flex" gap="12px" alignItems="center" width="100%">
              <Box width="100%" display="flex" flexDir="column">
                <Text fontSize="var(--font-size-xs)" color="var(--color-gray-dk)">
                  인증코드
                </Text>
                <CustomInput
                  type="number"
                  value={code}
                  onChange={handleCodeChange}
                  valid={isCodeValid}
                  caution={certifyCodeError}
                />
              </Box>
              <CTA label="인증하기" display="block" disabled={!code} onClick={handleVerifyCode} />
            </Box>
          )}
          {/* 임시 */}
          <CTA label="인증 취소" display="block" disabled={!univEmail} onClick={handleRevoke} />
        </InputItem>
      </form>
    </>
  );
};

export default StudentArtist1;
