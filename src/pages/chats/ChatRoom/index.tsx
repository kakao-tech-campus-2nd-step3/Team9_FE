import styled from '@emotion/styled';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';

import { BASE_URL, disconnectWebSocket } from '@/apis/chats';
import useGetChatRoom from '@/apis/chats/useGetChatRoom';
import IconButton from '@/components/common/IconButton';
import Header from '@/components/layouts/Header';
import useUserStore from '@/store/useUserStore';
import { HEIGHTS } from '@/styles/constants';
import type { ChatMessage, ChatRoom } from '@/types/chats';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

const ChatRoom = () => {
  const navigate = useNavigate();

  const [chatInputHeight, setChatInputHeight] = useState('5.4rem');

  const { chatRoomId } = useParams();
  const chatRoomIdAsNumber = Number(chatRoomId);
  // const { data } = useGetChatRoom(chatRoomIdAsNumber); // ChatRoom 타입
  // const { email } = useUserStore();
  // const senderEmail = email || 'ble6859@knu.ac.kr'; // todo: 테스트용 없애기
  const senderEmail = 'ble6859@knu.ac.kr'; // test
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);
  const [messageList, setMessageList] = useState<ChatMessage[]>([]);

  // 컴포넌트 높이 조절
  const handleChatInputHeight = (newHeight: string) => {
    setChatInputHeight(newHeight);
  };

  // WebSocket 연결 및 구독 설정
  useEffect(() => {
    const socket = new SockJS(`${BASE_URL}/ws`);
    const stompClient = Stomp.over(() => socket);

    stompClient.connect({}, () => {
      // SUBSCRIBE - 채팅방에 대한 초기 메시지 구독
      stompClient.subscribe(`/v1/sub/chat/rooms/${chatRoomIdAsNumber}/list`, (message) => {
        const initialMessages = JSON.parse(message.body);
        setMessageList(initialMessages);
      });

      // SUBSCRIBE - 새로운 메시지 수신
      stompClient.subscribe(`/v1/sub/chat/rooms/${chatRoomIdAsNumber}`, (message) => {
        const receivedMessage = JSON.parse(message.body);
        setMessageList((prevMessages) => [...prevMessages, receivedMessage]);
      });
    });

    socket.onclose = (e) => {
      console.log('WebSocket closed, attempting to reconnect...', e);

      // 재연결 시도
      setTimeout(() => {
        const newSocket = new SockJS(`${BASE_URL}/ws`);
        const stompClient = Stomp.over(() => newSocket);
        setStompClient(stompClient);
      }, 3000);
    };

    // 클라이언트 상태에 설정
    setStompClient(stompClient);

    // 컴포넌트가 언마운트될 때 WebSocket 연결 해제
    return () => {
      if (stompClient) {
        disconnectWebSocket(stompClient);
        // stompClient.disconnect();
      }
    };
  }, [chatRoomIdAsNumber]);

  //   useEffect(() => {
  //     connectWebSocket(
  //       chatRoomIdAsNumber,
  //       (receivedMessage: ChatMessage) => {
  //         setMessageList((prev) => [...prev, receivedMessage]);
  //       },
  //       (error) => {
  //         console.error('WebSocket error:', error);
  //       },
  //     );

  //     // 컴포넌트 언마운트 시 WebSocket 연결 해제
  //     return () => disconnectWebSocket();
  //   }, [chatRoomId]);

  //

  return (
    <Wrapper>
      <Header
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
        // title={data.title}
        rightSideChildren={<IconButton icon="menu-kebab" />} // todo: onClick -> 모달
      />
      <ContentWrapper marginBottom={chatInputHeight}>
        <MessageList messageList={messageList} />
      </ContentWrapper>
      <ChatInput
        client={stompClient}
        chatRoomId={chatRoomIdAsNumber}
        senderEmail={senderEmail}
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
