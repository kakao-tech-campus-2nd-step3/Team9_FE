import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import HorizontalLine from '@/components/styles/HorizontalLine';
import { RouterPath } from '@/routes/path';
import type { Mode } from '@/types';
import MembershipAgreement from './MembershipClauses';
import ProgressBar from './ProgressBar';
import Button from './components/Button';

const Signup = () => {
  const navigate = useNavigate();
  const [memberType, setMemberType] = useState<Mode | undefined>();

  const DefaultProgress = () => (
    <ProgressBox>
      <ProgressBar percentage={50} />
      <p className="progress-guidance">
        1.618이 처음이시네요!
        <br />
        회원 유형을 선택해주세요.
      </p>
      <form className="progress-form">
        <Box display="flex" width="100%" gap="8px">
          <Button label="일반 회원" onClick={() => setMemberType('user')} />
          <Button label="작가(판매자) 회원" onClick={() => setMemberType('seller')} />
        </Box>
      </form>
    </ProgressBox>
  );

  const UserProgress = () => {
    const [birthDate, setBirthDate] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isBirthDateValid, setIsBirthDateValid] = useState<boolean>(true);
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    // 값 업데이트 및 유효성 검사
    const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBirthDate(e.target.value);

      const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
      setIsBirthDateValid(birthDateRegex.test(e.target.value));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);

      const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
      setIsPhoneValid(phoneRegex.test(e.target.value));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(e.target.value));
    };

    return (
      <ProgressBox>
        <ProgressBar percentage={100} />
        <p className="progress-guidance">
          000 님, 반가워요.
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
                type="number"
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
    );
  };

  const SellerProgress = () => (
    <>
      <ProgressBox>
        <ProgressBar percentage={75} />
        <p className="progress-guidance">
          000 님, 반가워요.
          <br />
          작가 유형을 선택해주세요.
        </p>
        <form></form>
      </ProgressBox>
      <ProgressBox>
        <ProgressBar percentage={100} />
        <p className="progress-guidance">작가 정보를 입력해주세요.</p>
        <form></form>
      </ProgressBox>
    </>
  );

  return (
    <Wrapper>
      <Header
        mode="seller"
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
        rightSideChildren={
          <IconButton icon="home" onClick={() => navigate(`${RouterPath.home}`)} />
        }
      />
      <ContentWrapper>
        <DefaultProgress />
        {/* memberType에 따라 가입 절차 다르게 */}
        {memberType === 'user' ? <UserProgress /> : memberType === 'seller' && <SellerProgress />}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  min-height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: ${HEADER_HEIGHT} 0 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProgressBox = styled.div`
  margin: 0 0 ${TABBAR_HEIGHT} 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .progress-guidance {
    padding: 16px 16px 32px 16px;
    align-self: stretch;
    font-size: var(--font-size-md);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .progress-form {
    display: flex;
    flex-direction: column;
    margin: 0 16px 16px;
    gap: 24px;
    align-self: stretch;
  }
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  .input-label {
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
`;

const StyledInput = styled.div<{ valid?: boolean }>`
  align-self: stretch;
  display: flex;
  flex-direction: column;

  .input-element {
    align-self: stretch;
    border: none;
    border-bottom: ${({ valid }) =>
      valid ? '1px solid var(--color-gray-md)' : '1px solid var(--color-red)'};
    border-radius: 0;
    padding: 8px 0;
    font-family: inherit;
    font-size: var(--font-size-sm);
    outline: none;

    &:focus {
      border-bottom: ${({ valid }) =>
        valid ? '1px solid var(--color-black)' : '1px solid var(--color-red)'};
    }

    ::placeholder {
      color: var(--color-gray-dk);
    }
  }

  .input-validation {
    font-size: var(--font-size-xs);
    color: var(--color-red);
    margin-top: 4px;
  }
`;
