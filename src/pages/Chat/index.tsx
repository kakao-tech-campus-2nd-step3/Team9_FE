import styled from '@emotion/styled';

import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import IconButton from '@/components/common/IconButton';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />} />
      {/* 채팅 목록 */}
    </Wrapper>
  );
};

export default Chat;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${HEADER_HEIGHT} 0 ${TABBAR_HEIGHT} 0;
`;
