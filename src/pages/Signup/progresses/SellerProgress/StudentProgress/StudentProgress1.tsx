import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import useCertifyCode from '@/apis/univ-cert/useCertifyCode';
import useCertifyEmail from '@/apis/univ-cert/useCertifyEmail';
import useCheckUniv from '@/apis/univ-cert/useCheckUniv';
import useClearUser from '@/apis/univ-cert/useClearUser';
import CTA from '@/components/common/CTA';
import { InputItem, StyledInput } from '../../styles';

interface Step1Props {
  onSuccess: () => void;
}

const StudentProgress1 = ({ onSuccess }: Step1Props) => {
  const [univName, setUnivName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);
  const [isUnivNameChecked, setIsUnivNameChecked] = useState<boolean>(false);
  const [isUnivValid, setIsUnivValid] = useState<boolean>(true);
  const [isEmailChecked, setIsEmailChecked] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [isCodeChecked, setIsCodeChecked] = useState<boolean>(false);
  const [isCodeValid, setIsCodeValid] = useState<boolean>(true);

  // 이메일 업데이트 및 유효성 검사
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailFormValid(emailRegex.test(e.target.value));
  };

  const { mutate: checkUniv, isError: checkUnivError } = useCheckUniv();
  const { mutate: certifyEmail, isError: certifyEmailError } = useCertifyEmail();
  const { mutate: certifyCode, isError: certifyCodeError } = useCertifyCode();
  const { mutate: clearUser, isError: clearUserError } = useClearUser();

  // 대학명 체크, 인증코드 전송
  const handleSendCode = async (e: React.MouseEvent) => {
    e.preventDefault();

    setIsUnivNameChecked(true);

    if (univName && email && isEmailFormValid) {
      checkUniv(
        { univName },
        {
          onSuccess: (data) => {
            if (data.success) {
              setIsEmailChecked(true);

              certifyEmail(
                { email, univName },
                {
                  onSuccess: (data) => {
                    if (data.success) {
                      alert('인증코드가 전송되었습니다.\n메일함을 확인해주세요.');
                    } else {
                      alert('인증코드 발송 실패');
                    }
                  },
                },
              );
            } else {
              setIsUnivValid(false);
            }
          },
        },
      );
    }
  };

  // 인증코드 값 업데이트
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  // 인증하기
  const handleVerifyCode = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsCodeChecked(true);

    if (code) {
      certifyCode(
        { email, univName, code },
        {
          onSuccess: (data) => {
            if (data.success) {
              setIsCodeValid(true);
              onSuccess(); // 인증 성공 시 Step2로 이동
            } else {
              setIsCodeValid(false);
            }
          },
        },
      );
    }
  };

  // 인증된 유저 이메일 삭제 - 임시
  const handleRevoke = (e: React.MouseEvent) => {
    e.preventDefault();

    if (email) {
      clearUser(
        { email },
        {
          onSuccess: (data) => {
            if (data.success) {
              alert('인증 취소되었습니다.');
            } else {
              alert('인증 취소 오류');
            }
          },
        },
      );
    }
  };

  return (
    <InputItem>
      <p className="input-label">학생 인증</p>
      <StyledInput valid={isUnivValid}>
        <input
          type="text"
          className="input-element"
          placeholder="대학명"
          value={univName}
          onChange={(e) => setUnivName(e.target.value)}
        />
        {isUnivNameChecked && !univName ? (
          <p className="input-validation">대학명을 입력해주세요.</p>
        ) : !isUnivValid ? (
          <p className="input-validation">존재하지 않는 대학명입니다.</p>
        ) : null}
      </StyledInput>
      <StyledInput valid={true}>
        <input
          type="email"
          className="input-element"
          placeholder="abc@1618.com"
          value={email}
          onChange={handleEmailChange}
        />
        {isEmailChecked && !isEmailFormValid ? (
          <p className="input-validation">올바른 이메일 형식으로 입력해주세요.</p>
        ) : isEmailChecked && !email ? (
          <p className="input-validation">이메일을 입력해주세요.</p>
        ) : null}
      </StyledInput>
      <CTA label={isEmailChecked ? '재발송' : '인증코드 발송'} onClick={handleSendCode} />
      <Box display="flex" gap="12px" alignItems="center" alignSelf="stretch">
        {/* 인증코드 입력란 */}
        <StyledInput valid={isCodeValid}>
          <input
            type="text"
            className="input-element"
            placeholder="인증코드"
            value={code}
            onChange={handleCodeChange}
          />
          {isCodeChecked && !isCodeValid && (
            <p className="input-validation">인증코드가 일치하지 않습니다.</p>
          )}
        </StyledInput>
        <CTA label="인증하기" display="block" onClick={handleVerifyCode} disabled={!code} />
      </Box>
      {/* 임시 */}
      <CTA label="인증 취소" display="block" onClick={handleRevoke} />
    </InputItem>
  );
};

export default StudentProgress1;
