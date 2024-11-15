import styled from '@emotion/styled';
import { useState } from 'react';

import IconButton from '@/components/common/IconButton';
import Header from '@/components/layouts/Header';
import { HEIGHTS } from '@/styles/constants';
import ChatItem from './components/ChatItem';

const ChatList = () => {
  const [chatList] = useState([
    {
      chatRoomId: 1,
      imageUrl: '',
      nickname: '미니멀앤',
      date: '2024-11-01',
      content: '네. 알겠습니다.',
    },
    {
      chatRoomId: 2,
      imageUrl: '',
      nickname: '뾰롱',
      date: '2024-10-31',
      content: '네. 그렇게 해요.',
    },
  ]);

  return (
    <Wrapper>
      <Header rightSideChildren={<IconButton icon="settings" />} />
      {chatList.map((item, index) => (
        <ChatItem
          key={index}
          chatRoomId={item.chatRoomId}
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
  margin: ${HEIGHTS.HEADER} 0 ${HEIGHTS.BOTTOM} 0;
`;
