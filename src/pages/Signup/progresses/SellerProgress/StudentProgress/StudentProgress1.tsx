import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import { clearUser, postCertify, postCertifyCode, postCheckUniv } from '@/apis/univ-cert';
import CustomCTA from '../../../../../components/common/CustomCTA';
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
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [code, setCode] = useState<string>('');
  const [isCodeChecked, setIsCodeChecked] = useState<boolean>(false);
  const [isCodeValid, setIsCodeValid] = useState<boolean>(true);

  // 이메일 업데이트 및 유효성 검사
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailFormValid(emailRegex.test(e.target.value));
  };

  // 인증코드 전송
  const handleSendCode = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isEmailValid) {
      setIsUnivNameChecked(true);

      if (univName && isEmailFormValid) {
        postCheckUniv({ univName })
          .then((data) => setIsUnivValid(data.success === true))
          .catch((error) => {
            setIsUnivValid(false);
            alert(error.data.message || '학교 체크 오류');
          });
      }

      if (isUnivNameChecked && isUnivValid && isEmailFormValid) {
        setIsEmailChecked(true);

        postCertify({ email, univName })
          .then((data) => {
            setIsEmailValid(data.success === true);
            alert('인증코드가 전송되었습니다.\n메일함을 확인해주세요.');
          })
          .catch((error) => {
            setIsEmailValid(false);
            alert(error.data.message || '인증코드 발송 오류');
          });
      }
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
      postCertifyCode({ email, univName, code })
        .then((data) => {
          setIsCodeValid(data.success === true);
          alert('인증되었습니다.');
          onSuccess(); // 인증 성공 시 Step2로 이동
        })
        .catch((error) => {
          setIsCodeValid(false);
          alert(error.data.message || '인증 오류');
        });
    }
  };

  const handleRevoke = (e: React.MouseEvent) => {
    e.preventDefault();

    if (email) {
      clearUser({ email })
        .then(() => {
          alert('인증 취소되었습니다.');
        })
        .catch((error) => {
          alert(error.data.message || '인증 취소 오류');
        });
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
        ) : (
          !isUnivValid && <p className="input-validation">존재하지 않는 대학명입니다.</p>
        )}
      </StyledInput>
      <StyledInput valid={isEmailValid}>
        <input
          type="email"
          className="input-element"
          placeholder="abc@1618.com"
          value={email}
          onChange={handleEmailChange}
        />
        {isEmailChecked && !isEmailFormValid ? (
          <p className="input-validation">올바른 이메일 형식으로 입력해주세요.</p>
        ) : (
          isEmailChecked && !email && <p className="input-validation">이메일을 입력해주세요.</p>
        )}
      </StyledInput>
      <CustomCTA label={isEmailChecked ? '재발송' : '인증코드 발송'} onClick={handleSendCode} />
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
          {isCodeChecked && !code && <p className="input-validation">코드를 입력해주세요.</p>}
        </StyledInput>
        <CustomCTA label="인증하기" onClick={handleVerifyCode} disabled={!code} />
      </Box>
      {/* 임시 */}
      <CustomCTA label="인증 취소" onClick={handleRevoke} />
    </InputItem>
  );
};

export default StudentProgress1;
