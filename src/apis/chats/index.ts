import { Client, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL_CHAT;

export type ChatMessage = {
  sender: { email: string };
  content: string;
  imageUrl?: string;
};

// const accessToken = localStorage.getItem('accessToken');

//  STOMP 클라이언트
let stompClient: Client | null = null;

/**
 * WebSocket과 서버와의 연결 설정 함수
 * @param onMessageReceived - 수신된 메시지를 처리할 콜백 함수
 * @param onError - 에러 시 호출될 콜백 함수
 */
export const connectWebSocket = (
  chatRoomId: number,
  onMessageReceived?: (message: ChatMessage) => void,
  onError?: (error: string) => void,
): void => {
  // WebSocket 연결
  const socket = new SockJS(`${BASE_URL}/ws`);

  // STOMP 클라이언트 설정
  stompClient = Stomp.over(socket);

  // 연결이 열렸을 때 호출될 콜백 함수
  stompClient.onConnect = (frame) => {
    console.log('Connected: ' + frame);

    // 토픽 구독
    stompClient?.subscribe(`/sub/chat/rooms/${chatRoomId}`, (message) => {
      const parsedMessage: ChatMessage = JSON.parse(message.body);

      if (onMessageReceived) {
        onMessageReceived(parsedMessage);
      }
    });

    console.log('WebSocket 연결 성공');
  };

  // 메시지 수신 시 호출될 콜백 함수
  stompClient.onStompError = (errorFrame) => {
    console.error('Broker reported error: ' + errorFrame.headers['message']);

    if (onError) {
      onError(errorFrame.headers['message']);
    }
  };

  stompClient.activate();
};

// 메시지 전송 함수
export const sendMessage = (chatRoomId: number, message: ChatMessage): void => {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: `/pub/chat/${chatRoomId} `,
      body: JSON.stringify(message),
    });
  } else {
    throw new Error('STOMP 클라이언트를 먼저 연결해주세요');
  }
};

// WebSocket 연결 해제
export const disconnectWebSocket = (): void => {
  if (stompClient) {
    stompClient.deactivate();
    stompClient = null;
  }
};
