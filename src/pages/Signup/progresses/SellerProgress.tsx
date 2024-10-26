import { useState } from 'react';
import Button from '../components/Button';
import ProgressBar from '../ProgressBar';
import { InputItem, ProgressBox, SelectItem, StyledInput } from './styles';
import CustomCTA from '../components/CustomCTA';
import { postCertify, postCheckUniv, postCertifyCode } from '@/apis/univ-cert';
import { Box } from '@chakra-ui/react';

const SellerProgress = () => {
  const name = '000';
  const [artistType, setArtistType] = useState<'student' | 'business' | undefined>();
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

  // 인증 코드 전송
  const handleSendCode = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isEmailValid) {
      setIsUnivNameChecked(true);

      if (univName && isEmailFormValid) {
        postCheckUniv({ univName })
          .then((data) => {
            if (data.success) {
              setIsUnivValid(true);
            } else {
              setIsUnivValid(false);
            }
          })
          .catch((error) => {
            setIsUnivValid(false);
            alert(error.message || '학교 체크 오류');
          });
      }

      if (isUnivNameChecked && isUnivValid && isEmailFormValid) {
        // console.log(email);

        postCertify({ email, univName })
          .then((data) => {
            if (data.success) {
              setIsEmailChecked(true);
              alert('인증 코드가 전송되었습니다.\n메일함을 확인해주세요.');
            } else {
              setIsEmailValid(false);
            }
          })
          .catch((error) => {
            setIsEmailValid(false);
            alert(error.message || '인증 코드 발송 오류');
          });
      }
    }
  };

  // 인증 코드 값 업데이트
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
          if (data.success === true) {
            setIsCodeValid(true);
            alert('인증되었습니다.');
          } else {
            setIsCodeValid(false);
            alert(data.message);
          }
        })
        .catch((error) => {
          setIsCodeValid(false);
          alert(error.message || '인증 오류');
        });
    }
  };

  return (
    <>
      <ProgressBox>
        <ProgressBar percentage={75} />
        <p className="progress-guidance">
          {name} 님, 반가워요.
          <br />
          작가 유형을 선택해주세요.
        </p>
        <form className="progress-form">
          <SelectItem>
            <Button
              label="학생"
              isSelected={artistType === 'student'}
              onClick={() => setArtistType('student')}
            />
            <Button
              label="사업자"
              isSelected={artistType === 'business'}
              onClick={() => setArtistType('business')}
            />
          </SelectItem>
          {artistType === 'student' && (
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
                ) : isEmailChecked && !email ? (
                  <p className="input-validatio">이메일을 입력해주세요.</p>
                ) : (
                  isEmailChecked &&
                  !isEmailValid && (
                    <p className="input-validation">이메일을 올바르게 입력해주세요.</p>
                  )
                )}
              </StyledInput>
              <CustomCTA
                label={isEmailChecked ? '인증 코드 재발송' : '인증 코드 발송'}
                onClick={handleSendCode}
              />
              <Box display="flex" gap="12px" alignItems="center" alignSelf="stretch">
                {/* 인증 코드 입력란 */}
                <StyledInput valid={isCodeValid}>
                  <input
                    type="text"
                    className="input-element"
                    placeholder="인증 코드"
                    value={code}
                    onChange={handleCodeChange}
                  />
                  {isCodeChecked && !code && (
                    <p className="input-validation">코드를 입력해주세요.</p>
                  )}
                </StyledInput>
                <CustomCTA label="인증하기" onClick={handleVerifyCode} />
              </Box>
            </InputItem>
          )}
        </form>
      </ProgressBox>
      <ProgressBox>
        <ProgressBar percentage={100} />
        <p className="progress-guidance">작가 정보를 입력해주세요.</p>
        <form className="progress-form"></form>
      </ProgressBox>
    </>
  );
};

export default SellerProgress;
