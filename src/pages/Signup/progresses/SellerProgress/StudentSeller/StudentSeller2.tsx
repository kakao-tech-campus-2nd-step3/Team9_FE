import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import usePostStudentArtist from '@/apis/artists/usePostStudentArtist';
import CTA, { CTAContainer } from '@/components/common/CTA';
import { RouterPath } from '@/routes/path';
import useStudentInfoStore from '@/store/useStudentInfoStore';
import { CustomInput, InputItem } from '../../../components/InputItem';
import MembershipClauses from '../../../components/MembershipClauses';
import ProgressBar from '../../../components/ProgressBar';
import { ProgressBox, ProgressGuidance } from '../../styles';
import { handleEmailChange } from '../../utils';

const StudentSeller2 = () => {
  const { email, setEmail, univName, major, setMajor, about, setAbout, clearStudentInfo } =
    useStudentInfoStore();
  const [isEmailFormValid, setIsEmailFormValid] = useState<boolean>(true);

  const { mutate: postStudentArtist } = usePostStudentArtist();
  const navigate = useNavigate();

  const handleSubmit = () => {
    postStudentArtist(
      { schoolEmail: email, schoolName: univName, major, about },
      {
        onSuccess: () => {
          alert('회원가입을 축하합니다!');
          clearStudentInfo();
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
        <ProgressGuidance>판매자 정보를 입력해주세요.</ProgressGuidance>
        <form className="progress-container">
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
          <MembershipClauses />
        </form>
      </ProgressBox>
      <CTAContainer>
        <CTA
          label="가입하기"
          disabled={!(isEmailFormValid && univName && major)}
          onClick={handleSubmit}
        />
      </CTAContainer>
    </>
  );
};

export default StudentSeller2;
