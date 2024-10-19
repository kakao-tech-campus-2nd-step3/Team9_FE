import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import { RouterPath } from '@/routes/path';
import ProgressBar from './ProgressBar';

const Signup = () => {
  const navigate = useNavigate();

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
        </ProgressBox>
        <ProgressBox>
          <ProgressBar percentage={100} />
          <p className="guidance">
            000 님, 반가워요.
            <br />
            회원 정보를 입력해주세요.
          </p>
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
`;
