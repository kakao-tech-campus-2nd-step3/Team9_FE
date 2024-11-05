import styled from '@emotion/styled';

import ProfileImage from '@/components/common/ProfileImage';

export type MessageItemProps = {
  type: 'send' | 'receive';
  imageUrl?: string;
  time: string;
  message: string;
};

const MessageItem = ({ type, imageUrl, time, message }: MessageItemProps) => {
  return (
    <StyledMessageItem type={type}>
      {type === 'send' && (
        <>
          <Time>{time}</Time>
          <Bubble type={type}>{message}</Bubble>
        </>
      )}
      {type === 'receive' && (
        <>
          <ProfileImage width={32} imageUrl={imageUrl} />
          <Bubble type={type}>{message}</Bubble>
          <Time>{time}</Time>
        </>
      )}
    </StyledMessageItem>
  );
};

export default MessageItem;

const StyledMessageItem = styled.div<{ type: 'send' | 'receive' }>`
  width: 100%;
  height: auto;
  padding: 0 16px 8px;
  display: flex;
  gap: 8px;
  align-items: flex-start;

  ${({ type }) =>
    type === 'send' &&
    `
        justify-content: flex-end;
  `}

  ${({ type }) =>
    type === 'receive' &&
    `
        justify-content: flex-start;
  `}
`;

const Time = styled.span`
  color: var(--color-gray-dk);
  font-size: var(--font-size-xxs);
  white-space: nowrap;
  align-self: flex-end;
`;

const Bubble = styled.div<{ type: 'send' | 'receive' }>`
  padding: 6px 8px;
  max-width: 100%;
  flex-wrap: wrap;
  align-content: center;
  font-size: var(--font-size-sm);
  border-radius: var(--border-radius);
  white-space: pre-wrap;

  ${({ type }) =>
    type === 'send' &&
    `
        background-color: var(--color-black);
        border: none;
        color: var(--color-white);
  `}

  ${({ type }) =>
    type === 'receive' &&
    `
        background-color: var(--color-white);
        border: 1px solid var(--color-black);
        color: var(--color-black);
  `}
`;
