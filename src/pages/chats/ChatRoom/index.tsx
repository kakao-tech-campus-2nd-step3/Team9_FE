import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { connectWebSocket, disconnectWebSocket } from '@/apis/chats';
import type { ChatMessage, ChatRoom } from '@/apis/chats/types';
import useGetChatRoom from '@/apis/chats/useGetChatRoom';
import IconButton from '@/components/common/IconButton';
import Header from '@/components/layouts/Header';
import { HEIGHTS } from '@/styles/constants';
import ChatInput from './components/ChatInput';
import Date from './components/Date';
// import MessageItem from './components/MessageItem'; // parameters 안 맞아서 잠시 사용 안 함 // todo: 파라미터 맞추기

const ChatRoom = () => {
  const navigate = useNavigate();

  const { chatRoomId } = useParams();
  const chatRoomIdAsNumber = Number(chatRoomId);
  const { data } = useGetChatRoom(chatRoomIdAsNumber); // ChatRoom 타입

  const [chatInputHeight, setChatInputHeight] = useState('5.4rem');
  const [messageList, setMessageList] = useState<ChatMessage[]>([]);

  const handleChatInputHeight = (newHeight: string) => {
    setChatInputHeight(newHeight);
  };

  useEffect(() => {
    connectWebSocket(
      chatRoomIdAsNumber,
      (receivedMessage: ChatMessage) => {
        setMessageList((prev) => [...prev, receivedMessage]);
      },
      (error) => {
        console.error('WebSocket error:', error);
      },
    );

    // 컴포넌트 언마운트 시 WebSocket 연결 해제
    return () => disconnectWebSocket();
  }, [chatRoomId]);

  return (
    <Wrapper>
      <Header
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
        title={data.title}
        rightSideChildren={<IconButton icon="menu-kebab" />} // todo: onClick -> 모달
      />
      <ContentWrapper marginBottom={chatInputHeight}>
        <MessageGroupByDate>
          <Date date="2024년 11월 1일" />
          {messageList && <>{messageList}</>}
          {/* {messageList.map((item, index) => (
            <MessageItem
              key={index}
              imageUrl={item.imageUrl || undefined}
              type={item.type}
              time={item.time}
              message={item.message}
            />
          ))} */}
        </MessageGroupByDate>
      </ContentWrapper>
      <ChatInput
        chatRoomId={chatRoomIdAsNumber}
        sender={data.user1}
        onHeightChange={handleChatInputHeight}
      />
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
  margin: ${HEIGHTS.HEADER} 0 ${({ marginBottom }) => marginBottom} 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MessageGroupByDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
