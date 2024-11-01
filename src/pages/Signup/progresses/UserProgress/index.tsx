import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import usePutUser from '@/apis/users/usePutUser';
import CTA, { CTAContainer } from '@/components/common/CTA';
import { RouterPath } from '@/routes/path';
import useUserStore from '@/store/useUserStore';
import { CustomInput, InputItem } from '../../components/InputItem';
import MembershipClauses from '../../components/MembershipClauses';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBox, ProgressGuidance } from '../styles';
import { handleBirthDateChange, handleEmailChange, handlePhoneChange } from '../utils';

const UserProgress = () => {
  const {
    name,
    birthdate,
    setBirthdate,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
    nickname,
    setNickname,
    interests,
    // setInterests,
    clearUserInfo,
  } = useUserStore();
  const [isBirthdateValid, setIsBirthdateValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);

  const { mutate: putUser } = usePutUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    putUser(
      { name, birthdate, phone, email, address, nickname, hashTags: interests },
      {
        onSuccess: () => {
          alert('회원가입을 축하합니다!');
          clearUserInfo();
          navigate(RouterPath.home);
        },
        onError: (error) => {
          alert(error);
        },
      },
    );
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
        <form className="progress-container">
          <InputItem label="생년월일 *">
            <CustomInput
              type="date"
              value={birthdate}
              onChange={(e) => handleBirthDateChange(e, setBirthdate, setIsBirthdateValid)}
              valid={isBirthdateValid}
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
          <InputItem label="주소">
            <CustomInput
              type="text"
              placeholder=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputItem>
          <InputItem label="닉네임">
            <CustomInput
              type="text"
              placeholder=""
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
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
          <MembershipClauses />
        </form>
      </ProgressBox>
      <CTAContainer>
        <CTA
          label="가입하기"
          disabled={!(isBirthdateValid && isPhoneValid && isEmailFormValid)}
          onClick={handleSubmit}
        />
      </CTAContainer>
    </>
  );
};

export default UserProgress;
