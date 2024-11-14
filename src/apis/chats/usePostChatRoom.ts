import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import type { ChatRoom } from '@/types/chats';
import { getQueryParams } from '@/utils/queryParams';
import fetchInstance from '../fetchInstance';
import { BASE_URL } from './index';

type PostChatRoomProps = {
  userEmail1: string;
  userEmail2: string;
};

type PostChatRoomData = ChatRoom;

async function postChatRoom({
  userEmail1,
  userEmail2,
}: PostChatRoomProps): Promise<PostChatRoomData> {
  try {
    const queryParams = getQueryParams({ userEmail1: userEmail1, userEmail2: userEmail2 });
    const response = await fetchInstance(BASE_URL).post(`/v1/chat/rooms?${queryParams}`);

    return response.data;
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
  return useMutation<PostChatRoomData, Error, PostChatRoomProps>({
    mutationFn: (props: PostChatRoomProps) => postChatRoom(props),
  });
};

export default usePostChatRoom;
