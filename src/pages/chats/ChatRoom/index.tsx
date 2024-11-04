import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';

const NICKNAME = '미니멀앤';

const ChatRoom = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
        title={NICKNAME}
        rightSideChildren={<IconButton icon="menu-kebab" />} // todo: onClick -> 모달
      />
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
};

export default ChatRoom;

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
`;
