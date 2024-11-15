import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@/components/common/IconButton';
import Header from '@/components/layouts/Header';
import { RouterPath } from '@/routes/path';
import useStudentArtistStore from '@/store/useStudentArtistStore';
import useUserStore from '@/store/useUserStore';
import { HEIGHTS } from '@/styles/constants';
import type { Mode } from '@/types/user';
import SellerProgress from './progresses/ArtistProgress';
import DefaultProgress from './progresses/DefaultProgress';
import UserProgress from './progresses/UserProgress';

const Signup = () => {
  const { clearUserInfo } = useUserStore();
  const { clearStudentInfo } = useStudentArtistStore();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>();

  const handleModeSelect = (type: Mode) => {
    setMode(type);
  };

  return (
    <Wrapper>
      <Header
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />} // todo: 카카오톡 로그인 연동되면 수정
        rightSideChildren={
          <IconButton
            icon="home"
            onClick={() => {
              if (confirm('이 페이지를 나가면 작성 중인 정보는 저장되지 않습니다.')) {
                clearUserInfo();
                clearStudentInfo();
                navigate(`${RouterPath.home}`);
              }
            }}
          />
        }
      />
      <ContentWrapper>
        {!mode && <DefaultProgress mode={mode} onSelect={handleModeSelect} />}
        {mode === 'user' && <UserProgress />}
        {mode === 'artist' && <SellerProgress />}
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
  margin: ${HEIGHTS.HEADER} 0 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
