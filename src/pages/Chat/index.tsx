import styled from '@emotion/styled';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import { useNavigate } from 'react-router-dom';
import ChatItem from './components/ChatItem';

const chatList = [
  { imageUrl: '', nickname: '미니멀앤', date: '2024-11-01', content: '네. 알겠습니다.' },
  { imageUrl: '', nickname: '뾰롱', date: '2024-10-31', content: '네. 그렇게 해요.' },
];

const Chat = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />} />
      {chatList.map((item, index) => (
        <ChatItem
          key={index}
          imageUrl={item.imageUrl}
          nickname={item.nickname}
          date={item.date}
          content={item.content}
        />
      ))}
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
