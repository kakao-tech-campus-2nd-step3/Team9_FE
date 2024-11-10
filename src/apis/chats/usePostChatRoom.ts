import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import fetchInstance from '../fetchInstance';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL_CHAT;

type PostChatRoomProps = {
  userEmail1: string;
  userEmail2: string;
};

async function postChatRoom({ userEmail1, userEmail2 }: PostChatRoomProps): Promise<void> {
  const requestBody = { userEmail1, userEmail2 };

  try {
    await fetchInstance(BASE_URL).post(`/v1/chat/rooms`, requestBody);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '채팅방 생성 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const usePostChatRoom = () => {
  return useMutation<void, Error, PostChatRoomProps>({
    mutationFn: (props: PostChatRoomProps) => postChatRoom(props),
  });
};

export default usePostChatRoom;
