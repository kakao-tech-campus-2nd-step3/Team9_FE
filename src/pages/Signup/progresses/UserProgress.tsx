import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import CTA, { CTAContainer } from '@/components/common/CTA';
import HorizontalLine from '@/components/styles/HorizontalLine';
import MembershipAgreement from '../MembershipClauses';
import ProgressBar from '../ProgressBar';
import { InputItem, ProgressBox, StyledInput } from './styles';

const UserProgress = () => {
  const name = '000';
  const [birthDate, setBirthDate] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isBirthDateValid, setIsBirthDateValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  // 생년월일 업데이트 및 유효성 검사
  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);

    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    setIsBirthDateValid(birthDateRegex.test(e.target.value));
  };

  // 휴대폰 포맷팅하여 업데이트 및 유효성 검사
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatPhone = (phone: string) => {
      if (phone.length <= 3) return phone;
      if (phone.length <= 6) return `${phone.slice(0, 3)}-${phone.slice(3)}`;
      if (phone.length <= 10) return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
      return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;
    };

    const formattedPhone = formatPhone(e.target.value.replace(/\D/g, '')); // 숫자 외의 문자 제거 후 전달
    setPhone(formattedPhone);

    const phoneRegex = /^(\d{3}-\d{3,4}-\d{4})$/;
    setIsPhoneValid(phoneRegex.test(formattedPhone));
  };

  // 이메일 업데이트 및 유효성 검사
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(e.target.value));
  };

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
                onChange={handleBirthDateChange}
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
                onChange={handlePhoneChange}
              />
              {!isPhoneValid && <p className="input-validation">휴대 전화를 다시 확인해주세요.</p>}
            </StyledInput>
          </InputItem>
          <InputItem>
            <p className="input-label">이메일 *</p>
            <StyledInput valid={isEmailValid}>
              <input
                type="email"
                className="input-element"
                placeholder="abc@1618.com"
                value={email}
                onChange={handleEmailChange}
              />
              {!isEmailValid && <p className="input-validation">이메일을 다시 확인해주세요.</p>}
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
          <MembershipAgreement />
        </form>
      </ProgressBox>
      <CTAContainer>
        <CTA label="가입하기" disabled={isSubmitDisabled} onClick={handleSubmit} />
      </CTAContainer>
    </>
  );
};

export default UserProgress;
