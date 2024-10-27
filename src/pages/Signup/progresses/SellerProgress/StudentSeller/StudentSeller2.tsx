import { useState } from 'react';

import CTA, { CTAContainer } from '@/components/common/CTA';
import HorizontalLine from '@/components/styles/HorizontalLine';
import useStudentInfoStore from '@/store/useStudentInfoStore';
import { Box } from '@chakra-ui/react';
import { CustomInput, InputItem } from '../../../components/InputItem';
import MembershipClauses from '../../../components/MembershipClauses';
import ProgressBar from '../../../components/ProgressBar';
import { ProgressBox } from '../../styles';
import { handleBirthDateChange, handleEmailChange, handlePhoneChange } from '../../utils';
import usePostStudentArtist from '@/apis/artists/usePostStudentArtist';

const StudentSeller2 = () => {
  const {
    birthDate,
    setBirthDate,
    phone,
    setPhone,
    email,
    setEmail,
    univName,
    major,
    setMajor,
    about,
    setAbout,
  } = useStudentInfoStore();
  const [isBirthDateValid, setIsBirthDateValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);

  const { mutate: postStudentArtist } = usePostStudentArtist();

  const handleSubmit = () => {
    postStudentArtist(
      { schoolEmail: email, schoolName: univName, major, about },
      {
        onSuccess: () => {
          console.log('회원가입을 축하합니다!');
          // navigate(RouterPath.home);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  return (
    <>
      <ProgressBox>
        <ProgressBar percentage={100} />
        <p className="progress-guidance">판매자 정보를 입력해주세요.</p>
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
          <InputItem label="학생 정보 *">
            <Box display="flex" gap="12px">
              <CustomInput type="text" placeholder="대학명" value={univName} readOnly />
              <CustomInput
                type="text"
                placeholder="학부/과"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                valid={true}
              />
            </Box>
          </InputItem>
          <InputItem label="작가 소개글">
            <CustomInput
              type="textarea"
              placeholder="작가 경력, 작품 스타일 등을 소개해주세요."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              valid={true}
            />
          </InputItem>
          <HorizontalLine />
          <MembershipClauses />
        </form>
      </ProgressBox>
      <CTAContainer>
        <CTA
          label="가입하기"
          disabled={!(birthDate && phone && isEmailFormValid && univName && major)}
          onClick={handleSubmit}
        />
      </CTAContainer>
    </>
  );
};

export default StudentSeller2;
