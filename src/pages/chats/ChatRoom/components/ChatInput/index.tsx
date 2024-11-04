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
      <StyledInput value={message} onChange={(e) => setMessage(e.target.value)} />
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
  position: fixed;
  bottom: 0;
`;

const StyledInput = styled.textarea`
  flex: 1;
  align-self: stretch;
  border: 1px solid var(--color-gray-md);
  font-family: inherit;
  resize: none;
  overflow-y: hidden;
  padding: 6px;

  &:focus {
    outline: none;
  }
`;
