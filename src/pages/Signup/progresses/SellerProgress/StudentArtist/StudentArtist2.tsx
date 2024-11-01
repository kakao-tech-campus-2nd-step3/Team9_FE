import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import usePostStudentArtist from '@/apis/artists/usePostStudentArtist';
import usePutUser from '@/apis/users/usePutUser';
import CTA, { CTAContainer } from '@/components/common/CTA';
import { RouterPath } from '@/routes/path';
import useStudentArtistStore from '@/store/useStudentArtistStore';
import useUserStore from '@/store/useUserStore';
import { CustomInput, InputItem } from '../../../components/InputItem';
import MembershipClauses from '../../../components/MembershipClauses';
import ProgressBar from '../../../components/ProgressBar';
import { ProgressBox, ProgressGuidance } from '../../styles';
import { handleBirthDateChange, handlePhoneChange } from '../../utils';

const StudentArtist2 = () => {
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
    clearUserInfo,
  } = useUserStore();
  const { univEmail, univName, major, setMajor, about, setAbout, clearStudentInfo } =
    useStudentArtistStore();
  const [isBirthdateValid, setIsBirthdateValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);

  useEffect(() => {
    setEmail(univEmail);
  }, [univEmail]);

  const { mutate: putUser } = usePutUser();
  const { mutate: postStudentArtist } = usePostStudentArtist();
  const navigate = useNavigate();

  const handleSubmit = () => {
    putUser(
      { name, birthdate, phone, email, address, nickname },
      {
        onSuccess: () => {
          postStudentArtist(
            { schoolEmail: univEmail, schoolName: univName, major, about },
            {
              onSuccess: () => {
                alert('회원가입을 축하합니다!');
                clearUserInfo();
                clearStudentInfo();
                navigate(RouterPath.home);
              },
              onError: (error) => {
                alert(error);
              },
            },
          );
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
          판매자 정보를 입력해주세요.
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
              value={univEmail}
              caution="이메일을 다시 확인해주세요."
              readOnly
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
          <InputItem label="작가 소개글">
            <CustomInput
              type="textarea"
              placeholder="작가 경력, 작품 스타일 등을 소개해주세요."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              valid={true}
            />
          </InputItem>
          <MembershipClauses />
        </form>
      </ProgressBox>
      <CTAContainer>
        <CTA
          label="가입하기"
          disabled={!(isBirthdateValid && isPhoneValid && univName && major)}
          onClick={handleSubmit}
        />
      </CTAContainer>
    </>
  );
};

export default StudentArtist2;
