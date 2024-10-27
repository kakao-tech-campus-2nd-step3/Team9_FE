import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import CTA, { CTAContainer } from '@/components/common/CTA';
import HorizontalLine from '@/components/styles/HorizontalLine';
import useUserInfoStore from '@/store/useUserInfoStore';
import MembershipClauses from '../../components/MembershipClauses';
import ProgressBar from '../../components/ProgressBar';
import { InputItem, ProgressBox, StyledInput } from '../styles';
import { handleBirthDateChange, handleEmailChange, handlePhoneChange } from '../utils';

const UserProgress = () => {
  const name = '000';
  const { birthDate, setBirthDate, phone, setPhone, email, setEmail } = useUserInfoStore();
  const [isBirthDateValid, setIsBirthDateValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);

  // 유효성 검사 -> 버튼 상태 관리
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (birthDate && phone && email) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [birthDate, phone, email]);

  const handleSubmit = () => {
    console.log('제출 완료');
  };

  return (
    <>
      <ProgressBox>
        <ProgressBar percentage={100} />
        <p className="progress-guidance">
          {name} 님, 반가워요.
          <br />
          회원 정보를 입력해주세요.
        </p>
        <form className="progress-form">
          <InputItem>
            <p className="input-label">생년월일 *</p>
            <StyledInput valid={isBirthDateValid}>
              <input
                type="date"
                className="input-element"
                value={birthDate}
                onChange={(e) => handleBirthDateChange(e, setBirthDate, setIsBirthDateValid)}
              />
              {!isBirthDateValid && (
                <p className="input-validation">생년월일을 다시 확인해주세요.</p>
              )}
            </StyledInput>
          </InputItem>
          <InputItem>
            <p className="input-label">휴대 전화 *</p>
            <StyledInput valid={isPhoneValid}>
              <input
                type="tel"
                className="input-element"
                placeholder="000-0000-0000"
                value={phone}
                onChange={(e) => handlePhoneChange(e, setPhone, setIsPhoneValid)}
              />
              {!isPhoneValid && <p className="input-validation">휴대 전화를 다시 확인해주세요.</p>}
            </StyledInput>
          </InputItem>
          <InputItem>
            <p className="input-label">이메일 *</p>
            <StyledInput valid={isEmailFormValid}>
              <input
                type="email"
                className="input-element"
                placeholder="abc@1618.com"
                value={email}
                onChange={(e) => handleEmailChange(e, setEmail, setIsEmailFormValid)}
              />
              {!isEmailFormValid && <p className="input-validation">이메일을 다시 확인해주세요.</p>}
            </StyledInput>
          </InputItem>
          <InputItem>
            <p className="input-label">관심사</p>
            <StyledInput valid={true}>
              <div className="input-element">
                <Text color="var(--color-gray-dk)">
                  관심사를 등록하고 관련 작품을 추천받아보세요.
                </Text>
              </div>
            </StyledInput>
          </InputItem>
          <HorizontalLine />
          <MembershipClauses />
        </form>
      </ProgressBox>
      <CTAContainer>
        <CTA label="가입하기" disabled={isSubmitDisabled} onClick={handleSubmit} />
      </CTAContainer>
    </>
  );
};

export default UserProgress;
