import { useSuspenseQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import type { ChatRoom } from '@/types/chats';
import fetchInstance from '../fetchInstance';
import QUERY_KEYS from '../queryKeys';
import { BASE_URL } from './index';

type GetChatRoomProps = {
  chatRoomId: number;
};

type GetChatRoomData = ChatRoom;

async function getChatRoom({ chatRoomId }: GetChatRoomProps): Promise<GetChatRoomData> {
  try {
    const response = await fetchInstance(BASE_URL).get(`/v1/chat/rooms/${chatRoomId}`);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || '채팅방 정보 가져오기 실패');
      } else {
        throw new Error('네트워크 오류 또는 서버에 연결할 수 없습니다.');
      }
    } else {
      throw new Error('알 수 없는 오류입니다.');
    }
  }
}

const useGetChatRoom = (chatRoomId: number) => {
  return useSuspenseQuery<GetChatRoomData, Error>({
    queryKey: [QUERY_KEYS.CHAT_ROOM, chatRoomId],
    queryFn: () => getChatRoom({ chatRoomId }),
  });
};

export default useGetChatRoom;
