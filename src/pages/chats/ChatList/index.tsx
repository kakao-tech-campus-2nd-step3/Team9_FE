import styled from '@emotion/styled';
import { useState } from 'react';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import { TABBAR_HEIGHT } from '@/components/layouts/TabBar';
import ChatItem from './components/ChatItem';

const ChatList = () => {
  const [chatList, setChatList] = useState([
    { imageUrl: '', nickname: '미니멀앤', date: '2024-11-01', content: '네. 알겠습니다.' },
    { imageUrl: '', nickname: '뾰롱', date: '2024-10-31', content: '네. 그렇게 해요.' },
  ]);

  return (
    <Wrapper>
      <Header rightSideChildren={<IconButton icon="settings" />} />
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

export default ChatList;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${HEADER_HEIGHT} 0 ${TABBAR_HEIGHT} 0;
`;
