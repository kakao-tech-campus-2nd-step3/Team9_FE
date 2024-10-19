import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import { RouterPath } from '@/routes/path';
import { Mode } from '@/types';
import ProgressBar from './ProgressBar';
import Button from './components/Button';

const Signup = () => {
  const navigate = useNavigate();
  const [memberType, setMemberType] = useState<Mode | undefined>();

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
        <ProgressBox>
          <ProgressBar percentage={50} />
          <p className="guidance">
            1.618이 처음이시네요!
            <br />
            회원 유형을 선택해주세요.
          </p>
          <form className="signup-form">
            <Box display="flex" width="100%" gap="8px">
              <Button label="일반 회원" onClick={() => setMemberType('user')} />
              <Button label="작가(판매자) 회원" onClick={() => setMemberType('seller')} />
            </Box>
          </form>
        </ProgressBox>
        <ProgressBox>
          <ProgressBar percentage={100} />
          <p className="guidance">
            000 님, 반가워요.
            <br />
            회원 정보를 입력해주세요.
          </p>
          <form></form>
        </ProgressBox>
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

  .guidance {
    padding: 16px 16px 32px 16px;
    align-self: stretch;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
    margin: 0 0 16px 0;
    gap: 8px;
    align-self: stretch;
    padding: 0 16px;
  }
`;
