import styled from '@emotion/styled';
import { isSameDay } from 'date-fns';
import { Fragment } from 'react';

import type { ChatMessage } from '@/apis/chats/types';
import { formatDate, getDay } from '@/utils';
import MessageItem from '../MessageItem';

type MessageListProps = {
  messageList: ChatMessage[];
};

const MessageList = ({ messageList }: MessageListProps) => {
  let lastMessageDate: Date | null = null;

  return (
    <Wrapper>
      {messageList.map((item, index) => {
        const messageDate = new Date(item.timestamp); // 메시지 타임스탬프
        const formattedDate = formatDate(messageDate.toString());
        const day = getDay(messageDate);

        // lastMessageDate가 없거나 마지막 보여준 날짜와 메시지 타임스탬프의 날짜가 같지 않다면 true로 설정
        const showDate = !lastMessageDate || !isSameDay(lastMessageDate, messageDate);

        if (showDate) {
          lastMessageDate = messageDate; // 날짜 UI를 보여주었다면 마지막 날짜를 업데이트
        }

        return (
          <Fragment key={item.id}>
            {/* 날짜가 바뀌는 경우에만 렌더링 */}
            {showDate && (
              <StyledDate>
                {formattedDate} {day}
              </StyledDate>
            )}
            <MessageItem
              key={index}
              senderName={item.sender.email}
              // imageUrl={item.imageUrl || undefined}
              timestamp={item.timestamp || ''}
              content={item.content}
            />
          </Fragment>
        );
      })}
    </Wrapper>
  );
};

export default MessageList;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledDate = styled.p`
  padding: 16px;
  color: var(--color-gray-dk);
  text-align: center;
  font-size: var(--font-size-xs);
  font-weight: 500;
`;
