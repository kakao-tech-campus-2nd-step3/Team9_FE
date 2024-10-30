import { useState } from 'react';

import CTA, { CTAContainer } from '@/components/common/CTA';
import HorizontalLine from '@/components/styles/HorizontalLine';
import useUserInfoStore from '@/store/useUserInfoStore';
import { CustomInput, InputItem } from '../../components/InputItem';
import MembershipClauses from '../../components/MembershipClauses';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBox, ProgressGuidance } from '../styles';
import { handleBirthDateChange, handleEmailChange, handlePhoneChange } from '../utils';

const UserProgress = () => {
  const name = '000';
  const { birthDate, setBirthDate, phone, setPhone, email, setEmail, interests, clearUserInfo } =
    useUserInfoStore();
  const [isBirthDateValid, setIsBirthDateValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);

  const handleSubmit = () => {
    console.log('회원가입을 축하합니다!');
    clearUserInfo();
  };

  return (
    <>
      <ProgressBox>
        <ProgressBar percentage={100} />
        <ProgressGuidance>
          {name} 님, 반가워요.
          <br />
          회원 정보를 입력해주세요.
        </ProgressGuidance>
        <form className="progress-form">
          <InputItem label="생년월일 *">
            <CustomInput
              type="date"
              value={birthDate}
              onChange={(e) => handleBirthDateChange(e, setBirthDate, setIsBirthDateValid)}
              valid={isBirthDateValid}
              caution="생년월일을 다시 확인해주세요."
            />
          </InputItem>
          <InputItem label="휴대 전화 *">
            <CustomInput
              type="tel"
              placeholder="000-0000-0000"
              value={phone}
              onChange={(e) => handlePhoneChange(e, setPhone, setIsPhoneValid)}
              valid={isPhoneValid}
              caution="휴대 전화를 다시 확인해주세요."
            />
          </InputItem>
          <InputItem label="이메일 *">
            <CustomInput
              type="email"
              placeholder="abc@1618.com"
              value={email}
              onChange={(e) => handleEmailChange(e, setEmail, setIsEmailFormValid)}
              valid={isEmailFormValid}
              caution="이메일을 다시 확인해주세요."
            />
          </InputItem>
          <InputItem label="관심사">
            <CustomInput
              type="text"
              placeholder="관심사를 등록하고 관련 작품을 추천받아보세요."
              value={interests}
              // onChange 함수는 추후 구현
              readOnly
            />
          </InputItem>
          <HorizontalLine />
          <MembershipClauses />
        </form>
      </ProgressBox>
      <CTAContainer>
        <CTA
          label="가입하기"
          disabled={!(birthDate && phone && isEmailFormValid)}
          onClick={handleSubmit}
        />
      </CTAContainer>
    </>
  );
};

export default UserProgress;
