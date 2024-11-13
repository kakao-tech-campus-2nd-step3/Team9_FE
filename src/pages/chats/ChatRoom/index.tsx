// import styled from '@emotion/styled';
// import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import { connectWebSocket, disconnectWebSocket } from '@/apis/chats';
// import type { ChatMessage, ChatRoom } from '@/apis/chats/types';
// import useGetChatRoom from '@/apis/chats/useGetChatRoom';
// import IconButton from '@/components/common/IconButton';
// import Header from '@/components/layouts/Header';
// import { HEIGHTS } from '@/styles/constants';
// import ChatInput from './components/ChatInput';
// import Date from './components/Date';
// // import MessageItem from './components/MessageItem'; // parameters 안 맞아서 잠시 사용 안 함 // todo: 파라미터 맞추기

// const ChatRoom = () => {
//   const navigate = useNavigate();

//   const { chatRoomId } = useParams();
//   const chatRoomIdAsNumber = Number(chatRoomId);
//   const { data } = useGetChatRoom(chatRoomIdAsNumber); // ChatRoom 타입

//   const [chatInputHeight, setChatInputHeight] = useState('5.4rem');
//   const [messageList, setMessageList] = useState<ChatMessage[]>([]);

//   const handleChatInputHeight = (newHeight: string) => {
//     setChatInputHeight(newHeight);
//   };

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

//   return (
//     <Wrapper>
//       <Header
//         leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
//         title={data.title}
//         rightSideChildren={<IconButton icon="menu-kebab" />} // todo: onClick -> 모달
//       />
//       <ContentWrapper marginBottom={chatInputHeight}>
//         <MessageGroupByDate>
//           <Date date="2024년 11월 1일" />
//           {messageList && <>{messageList}</>}
//           {/* {messageList.map((item, index) => (
//             <MessageItem
//               key={index}
//               imageUrl={item.imageUrl || undefined}
//               type={item.type}
//               time={item.time}
//               message={item.message}
//             />
//           ))} */}
//         </MessageGroupByDate>
//       </ContentWrapper>
//       <ChatInput
//         chatRoomId={chatRoomIdAsNumber}
//         sender={data.user1}
//         onHeightChange={handleChatInputHeight}
//       />
//     </Wrapper>
//   );
// };

// export default ChatRoom;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   overflow-y: auto;
//   min-height: 100vh;
//   position: relative;
// `;

// const ContentWrapper = styled.div<{ marginBottom: string }>`
//   margin: ${HEIGHTS.HEADER} 0 ${({ marginBottom }) => marginBottom} 0;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const MessageGroupByDate = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

import { useEffect, useState } from 'react';
import { Stomp, CompatClient } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import { ChatMessage } from '@/apis/chats/types';

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL_CHAT;

const ChatRoom = () => {
  const { chatRoomId } = useParams();
  const chatRoomIdAsNumber = Number(chatRoomId);

  const userEmail = 'ble6859@knu.ac.kr';
  const [messages, setMessages] = useState<ChatMessage[]>([]); // 채팅 메시지 상태
  const [messageContent, setMessageContent] = useState(''); // 메시지 입력 상태
  const [client, setClient] = useState<CompatClient | null>(null); // stomp client 상태

  // WebSocket 연결 및 구독 설정
  useEffect(() => {
    const socket = new SockJS(`${BASE_URL}/ws`);
    const stompClient = Stomp.over(() => socket);

    stompClient.connect({}, () => {
      // 채팅방에 대한 초기 메시지 구독
      stompClient.subscribe(`/v1/sub/chat/rooms/${chatRoomIdAsNumber}/list`, (message) => {
        const initialMessages = JSON.parse(message.body);
        setMessages(initialMessages);
      });

      // 새로운 메시지 수신
      stompClient.subscribe(`/v1/sub/chat/rooms/${chatRoomIdAsNumber}`, (message) => {
        const receivedMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      });
    });

    // 클라이언트 상태에 설정
    setClient(stompClient);

    // 컴포넌트가 언마운트될 때 WebSocket 연결 종료
    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, [chatRoomIdAsNumber]);

  // 메시지 전송 함수
  const sendMessage = () => {
    if (client && messageContent.trim() !== '') {
      const messageDto = {
        sender: userEmail,
        content: messageContent,
        messageType: 'TEXT', // 예시로 텍스트 메시지
      };

      // 메시지 전송
      client.send(`/v1/pub/chat/${chatRoomIdAsNumber}`, {}, JSON.stringify(messageDto));
      setMessageContent(''); // 메시지 전송 후 입력창 초기화
    }
  };

  return (
    <div>
      <h2>Chat Room: {chatRoomId}</h2>

      {/* 메시지 리스트 */}
      <div style={{ marginBottom: '20px' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender.email}:</strong> {msg.content}
          </div>
        ))}
      </div>

      {/* 메시지 입력 */}
      <input
        type="text"
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        placeholder="메시지를 입력하세요..."
        style={{ marginRight: '10px' }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
