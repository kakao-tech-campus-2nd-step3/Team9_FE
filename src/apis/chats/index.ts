import { CompatClient } from '@stomp/stompjs';
// import { Client, CompatClient, Stomp } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';

// import type { ChatMessage } from './types';

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL_CHAT;

// let stompClient: Client | null = null;

// /**
//  * WebSocket과 서버와의 연결 설정 함수
//  * @param onMessageReceived - 수신된 메시지를 처리할 콜백 함수
//  * @param onError - 에러 시 호출될 콜백 함수
//  */
// export function connectWebSocket(
//   chatRoomId: number,
//   onMessageReceived?: (message: ChatMessage) => void,
//   onError?: (error: string) => void,
// ): void {
//   // WebSocket 연결, STOMP 클라이언트 설정
//   const socket = new SockJS(`${BASE_URL}/ws`);
//   stompClient = Stomp.over(() => socket);

//   // 연결이 열렸을 때 호출될 콜백 함수
//   stompClient.onConnect = () => {
//     // SUBSCRIBE
//     stompClient?.subscribe(`/v1/sub/chat/rooms/${chatRoomId}`, (message) => {
//       console.log('received messages: ', message);

//       // const parsedMessage: ChatMessage = JSON.parse(message.body);

//       // if (onMessageReceived) {
//       //   onMessageReceived(parsedMessage);
//       // }
//     });
//   };

//   // 에러 났을 때 호출될 콜백 함수
//   stompClient.onStompError = (errorFrame) => {
//     console.error('Broker reported error: ' + errorFrame.headers['message']);

//     if (onError) {
//       onError(errorFrame.headers['message']);
//     }
//   };

//   // CONNECT
//   stompClient.activate();
// }

// 메시지(TEXT) 전송 함수
export function sendMessage(
  stompClient: CompatClient,
  chatRoomId: number,
  email: string,
  content: string,
): void {
  const message = {
    sender: email,
    content,
    messageType: 'TEXT',
  };

  if (stompClient && stompClient.connected) {
    // SEND
    stompClient.publish({
      destination: `/v1/pub/chat/${chatRoomId}`,
      body: JSON.stringify(message),
      // headers: { receipt: 'message-12345' },
    });
  } else {
    console.log('STOMP 클라이언트를 먼저 연결해주세요');
    throw new Error('연결이 끊겼습니다. 새로고침 해주세요.');
  }
}

// 파일 전송 함수
export async function sendFile(
  stompClient: CompatClient,
  chatRoomId: number,
  email: string,
  file: File,
): Promise<void> {
  // File을 바이너리 데이터로 변환
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      if (stompClient && stompClient.connected && reader.result) {
        // const fileBuffer = reader.result as ArrayBuffer;
        const fileBytes = new Uint8Array(reader.result as ArrayBuffer);
        const fileBase64 = btoa(
          fileBytes.reduce((data, byte) => data + String.fromCharCode(byte), ''),
        );

        const message = {
          chatRoomId,
          userEmail: email,
          // fileBytes: fileBuffer,
          // fileBytes,
          fileBase64: fileBase64,
        };

        try {
          stompClient.publish({
            destination: `/v1/pub/chat/${chatRoomId}/file`,
            body: JSON.stringify(message),
          });
          resolve();
        } catch (error) {
          console.error('Failed to send file:', error);
          reject(error);
        }
      } else {
        console.log('STOMP 클라이언트를 먼저 연결해주세요');
        reject('연결이 끊겼습니다. 새로고침 해주세요.');
      }
    };

    reader.onerror = (error) => {
      console.error('File reading error:', error);
      reject(error);
    };
  });
}

// WebSocket 연결 해제 함수
export function disconnectWebSocket(stompClient: CompatClient) {
  if (stompClient) {
    // DISCONNECT
    stompClient.deactivate();
    // stompClient.disconnect();
  }
}
