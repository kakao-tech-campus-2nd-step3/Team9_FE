import styled from '@emotion/styled';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';

import { connectWebSocket, disconnectWebSocket } from '@/apis/chats';
import type { ChatMessage, ChatRoom } from '@/apis/chats/types';
import useGetChatRoom from '@/apis/chats/useGetChatRoom';
import IconButton from '@/components/common/IconButton';
import Header from '@/components/layouts/Header';
import { HEIGHTS } from '@/styles/constants';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL_CHAT;

// const senderExample = {
//   id: 5,
//   email: 'ble6859@knu.ac.kr',
// };

const ChatRoom = () => {
  const navigate = useNavigate();

  const { chatRoomId } = useParams();
  const chatRoomIdAsNumber = Number(chatRoomId);
  const { data } = useGetChatRoom(chatRoomIdAsNumber); // ChatRoom 타입
  const [client, setClient] = useState<CompatClient | null>(null); // stomp client 상태

  const [chatInputHeight, setChatInputHeight] = useState('5.4rem');
  const [messageList, setMessageList] = useState<ChatMessage[]>([]); // 채팅 메시지 목록

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
        setClient(stompClient);
      }, 3000);
    };

    // 클라이언트 상태에 설정
    setClient(stompClient);

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

  return (
    <Wrapper>
      <Header
        leftSideChildren={<IconButton icon="arrow-back" onClick={() => navigate(-1)} />}
        title={data.title}
        rightSideChildren={<IconButton icon="menu-kebab" />} // todo: onClick -> 모달
      />
      <ContentWrapper marginBottom={chatInputHeight}>
        <MessageList messageList={messageList} />
      </ContentWrapper>
      <ChatInput
        client={client}
        chatRoomId={chatRoomIdAsNumber}
        sender={data.user1}
        onHeightChange={handleChatInputHeight}
      />
    </Wrapper>
  );
};

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

// const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocket 상태
// const [content, setContent] = useState<string>(''); // 채팅 메시지 상태
// const [file, setFile] = useState<File | null>(null); // 업로드된 파일 상태
// const [messages, setMessages] = useState<ChatMessage[]>([]); // 채팅 메시지 목록
// const messageListRef = useRef<HTMLDivElement | null>(null); // 메시지 리스트 참조

// WebSocket 연결
// useEffect(() => {
//   const socket = new SockJS(`${BASE_URL}/ws`);
//   socket.onopen = () => {
//     console.log('WebSocket 연결 성공!');
//   };

//   socket.onmessage = (event: MessageEvent) => {
//     const serverMessage: ChatMessage = JSON.parse(event.data);
//     setMessages((prevMessages) => [...prevMessages, serverMessage]); // 서버에서 받은 메시지 추가
//   };

//   socket.onerror = (error: Event) => {
//     console.error('WebSocket 오류:', error);
//   };

//   socket.onclose = () => {
//     console.log('WebSocket 연결 종료!');
//   };

//   setSocket(socket);

//   return () => {
//     socket.close(); // 컴포넌트가 언마운트 될 때 WebSocket 연결 종료
//   };
// }, []);

//   // 파일 선택 핸들러
//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files ? e.target.files[0] : null;
//     setFile(selectedFile);
//   };

//   // 파일 전송 함수
//   const sendFile = () => {
//     if (!file) {
//       alert('파일을 선택해주세요.');
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = function (e) {
//       const fileBytes = e.target?.result; // 파일 데이터를 읽어옴

//       if (fileBytes) {
//         // WebSocket 메시지 보내기
//         const message = {
//           chatRoomId: chatRoomId,
//           userEmail: userEmail,
//           fileBytes: Array.from(new Uint8Array(fileBytes as ArrayBuffer)), // Uint8Array로 변환하여 전송
//         };

//         socket?.send(JSON.stringify(message)); // WebSocket을 통해 서버로 메시지 전송
//       }
//     };

//     reader.readAsArrayBuffer(file); // 파일을 ArrayBuffer로 읽음
//   };

//   // 채팅 메시지 입력 처리
//   const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setContent(event.target.value);
//   };

//   // 채팅 메시지 전송
//   const sendMessage = () => {
//     if (content.trim()) {
//       // 텍스트 메시지 전송
//       const message = {
//         chatRoomId: chatRoomId,
//         userEmail: userEmail,
//         messageContent: content,
//       };
//       socket?.send(JSON.stringify(message));
//       setContent('');
//     }
//   };

//   // 이미지 표시 함수
//   const displayImage = (encodedContent: string) => {
//     return `data:image/jpeg;base64,${encodedContent}`;
//   };

//   // 메시지 목록 렌더링
//   const renderMessages = () => {
//     return messages.map((msg, index) => (
//       <div key={index} className="message">
//         {msg.messageType === 'IMAGE' ? (
//           <img src={displayImage(msg.content || '')} alt="Uploaded file" />
//         ) : (
//           <p>{msg.content}</p>
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div className="chat-room">
//       <h2>Chat Room: {chatRoomId}</h2>

//       {/* 파일 업로드 */}
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={sendFile}>파일 전송</button>

//       {/* 메시지 입력 */}
//       <div>
//         <textarea
//           value={content}
//           onChange={handleMessageChange}
//           placeholder="메시지를 입력하세요"
//         />
//         <button onClick={sendMessage}>전송</button>
//       </div>

//       {/* 채팅 메시지 리스트 */}
//       <div ref={messageListRef} className="message-list">
//         {renderMessages()}
//       </div>
//     </div>
//   );
// };

export default ChatRoom;
