import styled from '@emotion/styled';
import { useState } from 'react';

import SendIcon from '@/assets/icons/send.svg?react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    console.log('전송!'); // todo: 핸들러 구현
  };

  return (
    <StyledChatInput>
      <StyledTextarea
        placeholder="메시지 입력"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button disabled={!message} onClick={handleSendMessage}>
        <SendIcon />
      </button>
    </StyledChatInput>
  );
};

export default ChatInput;

export const CHAT_INPUT_HEIGHT = '5.4rem';

const StyledChatInput = styled.div`
  width: 100%;
  height: ${CHAT_INPUT_HEIGHT};
  display: flex;
  align-items: center;
  padding: 6px 16px;
  gap: 8px;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-md);
  position: fixed;
  bottom: 0;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  align-self: stretch;
  font-family: inherit;
  resize: none;
  overflow-y: hidden;
  padding: 12px 0;
  font-size: var(--font-size-sm);
  border: none;

  &:focus {
    outline: none;
  }
`;
