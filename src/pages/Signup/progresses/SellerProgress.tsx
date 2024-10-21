import { useState } from 'react';
import Button from '../components/Button';
import ProgressBar from '../ProgressBar';
import { InputItem, ProgressBox, SelectItem, StyledInput } from './styles';
import CustomCTA from '../components/CustomCTA';
import { postCheckUniv } from '@/apis/univ-cert';

const SellerProgress = () => {
  const name = '000';
  const [artistType, setArtistType] = useState<'student' | 'business' | undefined>();
  const [univName, setUnivName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isUnivValid, setIsUnivValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  // 이메일 업데이트 및 유효성 검사
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(e.target.value));
  };

  const handleSendCode = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isEmailValid) {
      // 학교 체크하고 이메일 전송
      postCheckUniv({ univName })
        .then(() => {
          setIsUnivValid(true);
        })
        .catch((error) => {
          // API에서 받은 오류 객체일 경우
          if (error.result === 'FAIL') {
            setIsUnivValid(false);
            alert(error.message || '학교 체크 오류');
          }
          // 예상치 못한 오류 처리
          else {
            alert('학교 체크 오류');
          }
        });
      if (isUnivValid) {
        postCheckUniv({ univName })
          .then(() => {
            console.log('인증 코드가 전송되었습니다.\n메일함을 확인해주세요.');
          })
          .catch((error) => {
            // API에서 받은 오류 객체일 경우
            if (error.result === 'FAIL') {
              setIsUnivValid(false);
              alert(error.message || '메일 발송 오류');
            }
            // 예상치 못한 오류 처리
            else {
              alert('메일 발송 오류');
            }
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
                  placeholder="대학교명"
                  value={univName}
                  onChange={(e) => setUnivName(e.target.value)}
                />
                {!isUnivValid && <p className="input-validation">인증 불가한 대학교입니다.</p>}
              </StyledInput>
              <StyledInput valid={isEmailValid}>
                <input
                  type="email"
                  className="input-element"
                  placeholder="abc@1618.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                {!isEmailValid && (
                  <p className="input-validation">올바른 이메일 형식으로 입력해주세요.</p>
                )}
              </StyledInput>
              <CustomCTA label="인증 코드 발송" onClick={() => handleSendCode} />
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
