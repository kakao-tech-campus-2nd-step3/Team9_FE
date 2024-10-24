import { useState } from 'react';
import Button from '../components/Button';
import ProgressBar from '../ProgressBar';
import { InputItem, ProgressBox, SelectItem, StyledInput } from './styles';
import CustomCTA from '../components/CustomCTA';
import { postCertify, postCheckUniv } from '@/apis/univ-cert';

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

  // 이메일 업데이트 및 유효성 검사
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailFormValid(emailRegex.test(e.target.value));
  };

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
