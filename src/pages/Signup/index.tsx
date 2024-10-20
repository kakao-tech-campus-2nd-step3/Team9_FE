import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { RouterPath } from '@/routes/path';
import type { Mode } from '@/types';
import DefaultProgress from './progresses/DefaultProgress';
import SellerProgress from './progresses/SellerProgress';
import UserProgress from './progresses/UserProgress';

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
        <DefaultProgress setMemberType={setMemberType} />
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
