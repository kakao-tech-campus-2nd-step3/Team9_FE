import { useEffect, useState } from 'react';

import CTA, { CTAContainer } from '@/components/common/CTA';
import HorizontalLine from '@/components/styles/HorizontalLine';
import useStudentInfoStore from '@/store/useStudentInfoStore';
import { Box } from '@chakra-ui/react';
import MembershipClauses from '../../../components/MembershipClauses';
import ProgressBar from '../../../components/ProgressBar';
import { InputItem, ProgressBox, StyledInput } from '../../styles';
import { handleBirthDateChange, handleEmailChange, handlePhoneChange } from '../../utils';

const StudentProgress2 = () => {
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
    intro,
    setIntro,
  } = useStudentInfoStore();
  const [isBirthDateValid, setIsBirthDateValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);

  // 유효성 검사 -> 버튼 상태 관리
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsSubmitDisabled(!(birthDate && phone && email && univName && major));
  }, [birthDate, phone, email, univName, major]);

  const handleSubmit = () => {
    console.log('제출 완료');
  };

  return (
    <>
      <ProgressBox>
        <ProgressBar percentage={100} />
        <p className="progress-guidance">판매자 정보를 입력해주세요.</p>
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
            <p className="input-label">학생 정보 *</p>
            <Box display="flex" gap="12px">
              <StyledInput valid={true}>
                <input
                  type="text"
                  className="input-element"
                  placeholder="대학명"
                  value={univName}
                  readOnly
                />
              </StyledInput>
              <StyledInput valid={true}>
                <input
                  type="text"
                  className="input-element"
                  placeholder="학부/과"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </StyledInput>
            </Box>
          </InputItem>
          <InputItem>
            <p className="input-label">작가 소개글</p>
            <StyledInput valid={true}>
              <input
                type="textarea"
                className="input-element"
                placeholder="작가 경력, 작품 스타일 등을 소개해주세요."
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
              />
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

export default StudentProgress2;
