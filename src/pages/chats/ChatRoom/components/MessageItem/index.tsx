import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

import ProfileImage from '@/components/common/ProfileImage';
import { formatTimestamp } from '@/utils/dates';

export type MessageItemProps = {
  senderName: string;
  profileImageUrl?: string;
  timestamp: string;
  content: string;
};

const MessageItem = ({ senderName, profileImageUrl, timestamp, content }: MessageItemProps) => {
  const isMe = true; // todo: 고치기
  const timeAsString = formatTimestamp(timestamp); // 시간만 추출

  return (
    <StyledMessageItem isMe={isMe}>
      {isMe && (
        <>
          <Time>{timeAsString}</Time>
          <Bubble isMe={isMe}>{content}</Bubble>
        </>
      )}
      {!isMe && (
        <>
          <ProfileImage width={32} imageUrl={profileImageUrl} alt="messageItem" />
          <Box display="flex" flexDir="column" gap="8px">
            <Name>{senderName}</Name>
            <Box display="flex" flexDir="row" gap="8px">
              <Bubble isMe={isMe}>{content}</Bubble>
              <Time>{timeAsString}</Time>
            </Box>
          </Box>
        </>
      )}
    </StyledMessageItem>
  );
};

export default MessageItem;

const StyledMessageItem = styled.div<{ isMe: boolean }>`
  width: 100%;
  height: auto;
  padding: 0 16px 8px;
  display: flex;
  gap: 8px;
  align-items: flex-start;

  ${({ isMe }) =>
    isMe === true &&
    `
        justify-content: flex-end;
  `}

  ${({ isMe }) =>
    isMe === false &&
    `
        justify-content: flex-start;
  `}
`;

const Name = styled.p`
  color: var(--color-black);
  font-size: var(--font-size-sm);
  white-space: nowrap;
`;

const Time = styled.span`
  color: var(--color-gray-dk);
  font-size: var(--font-size-xxs);
  white-space: nowrap;
  align-self: flex-end;
`;

const Bubble = styled.div<{ isMe: boolean }>`
  padding: 6px 8px;
  max-width: 100%;
  flex-wrap: wrap;
  align-content: center;
  font-size: var(--font-size-sm);
  border-radius: var(--border-radius);
  white-space: pre-wrap;

  ${({ isMe }) =>
    isMe === true &&
    `
        background-color: var(--color-black);
        border: none;
        color: var(--color-white);
  `}

  ${({ isMe }) =>
    isMe === false &&
    `
        background-color: var(--color-white);
        border: 1px solid var(--color-black);
        color: var(--color-black);
  `}
`;
