import styled from '@emotion/styled';
import { CompatClient } from '@stomp/stompjs';
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
import MessageItem from './components/MessageItem';

const ChatRoom = () => {
  const navigate = useNavigate();

  const { chatRoomId } = useParams();
  const chatRoomIdAsNumber = Number(chatRoomId);
  const { data: chatRoom } = useGetChatRoom(chatRoomIdAsNumber); // ChatRoom 타입
  const [client, setClient] = useState<CompatClient | null>();

  const [chatInputHeight, setChatInputHeight] = useState('5.4rem');
  const [messageList, setMessageList] = useState<ChatMessage[]>([]); // 채팅 메시지 목록

  const handleChatInputHeight = (newHeight: string) => {
    setChatInputHeight(newHeight);
  };

  // WebSocket 연결 및 구독 설정
  useEffect(() => {
    const newClient = connectWebSocket(
      chatRoomIdAsNumber,
      (receivedMessage: ChatMessage) => {
        setMessageList((prev) => [...prev, receivedMessage]);
      },
      (error) => {
        console.error('WebSocket error:', error);
      },
    );

    setClient(newClient);

    // 컴포넌트가 언마운트될 때 WebSocket 연결 해제
    if (client) {
      return () => {
        disconnectWebSocket(client);
      };
    }
  }, [chatRoomId]);

  return (
    <Wrapper>
      <Header
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
        title={chatRoom.title}
        rightSideChildren={<IconButton icon="menu-kebab" />} // todo: onClick -> 모달
      />
      <ContentWrapper marginBottom={chatInputHeight}>
        <MessageGroupByDate>
          <Date date="2024년 11월 1일" />
          {messageList &&
            messageList.map((item, index) => (
              <MessageItem
                key={index}
                senderName={item.sender.email}
                // imageUrl={item.imageUrl || undefined}
                timestamp={item.timestamp || ''}
                content={item.content}
              />
            ))}
        </MessageGroupByDate>
      </ContentWrapper>
      {client && (
        <ChatInput
          client={client}
          chatRoomId={chatRoomIdAsNumber}
          sender={chatRoom.user1}
          onHeightChange={handleChatInputHeight}
        />
      )}
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
