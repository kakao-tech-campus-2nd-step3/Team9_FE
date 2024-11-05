import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@/components/common/IconButton';
import Header, { HEADER_HEIGHT } from '@/components/layouts/Header';
import ChatInput from './components/ChatInput';
import MessageItem, { type MessageItemProps } from './components/MessageItem';
import Date from './components/Date';

const NICKNAME = '미니멀앤';
const messageList: MessageItemProps[] = [
  {
    type: 'send',
    time: '오후 1:30',
    message: 'One look give em Whiplash Beat drop with a big flash',
  },
  {
    type: 'send',
    time: '오후 1:30',
    message: `
      집중해 좀 더
      Think fast 
      이유 넌 이해 못 해
    `,
  },
  {
    imageUrl: '',
    type: 'receive',
    time: '오후 1:30',
    message: `
      왜 이제야 
      Know I did that 
      Day 1 know I been bad
    `,
  },
];

const ChatRoom = () => {
  const [chatInputHeight, setChatInputHeight] = useState('5.4rem');
  const navigate = useNavigate();

  const handleChatInputHeight = (newHeight: string) => {
    setChatInputHeight(newHeight);
  };

  return (
    <Wrapper>
      <Header
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
        title={NICKNAME}
        rightSideChildren={<IconButton icon="menu-kebab" />} // todo: onClick -> 모달
      />
      <ContentWrapper marginBottom={chatInputHeight}>
        <MessageGroupByDate>
          <Date date="2024년 11월 1일" />
          {messageList.map((item, index) => (
            <MessageItem
              key={index}
              imageUrl={item.imageUrl || undefined}
              type={item.type}
              time={item.time}
              message={item.message}
            />
          ))}
        </MessageGroupByDate>
      </ContentWrapper>
      <ChatInput onHeightChange={handleChatInputHeight} />
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

const ContentWrapper = styled.div<{ marginBottom: string }>`
  margin: ${HEADER_HEIGHT} 0 ${({ marginBottom }) => marginBottom} 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MessageGroupByDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
