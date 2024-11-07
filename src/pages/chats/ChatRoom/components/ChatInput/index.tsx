import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import SendIcon from '@/assets/icons/send.svg?react';
import { countNonSpaceChars } from '@/utils';

type ChatInputProps = {
  onHeightChange: (height: string) => void;
};

const ChatInput = ({ onHeightChange }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [chatInputHeight, setChatInputHeight] = useState<string>('5.4rem');

  // 내용의 세로 길이에 맞게 입력창 높이 자동 조정하는 함수
  const adjustHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'; // 초기화

    const newHeight = textarea.scrollHeight;
    textarea.style.height = `${newHeight}px`;
    setChatInputHeight(`${newHeight + 12}px`);
    onHeightChange(`${newHeight + 12}px`); // 부모로 높이 전달 (패딩 포함)
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustHeight(e.target);
  };

  const handleSendMessage = () => {
    console.log('전송!'); // todo: 핸들러 구현
  };

  return (
    <StyledChatInput height={chatInputHeight}>
      <StyledTextarea
        placeholder="메시지 입력"
        ref={textareaRef}
        value={message}
        onChange={handleInput}
      />
      <button disabled={!countNonSpaceChars(message)} onClick={handleSendMessage}>
        <SendIcon />
      </button>
    </StyledChatInput>
  );
};

export default ChatInput;

const StyledChatInput = styled.div<{ height: string }>`
  width: 100%;
  min-height: 5.4rem;
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
  overflow-y: hidden;
  font-size: var(--font-size-sm);
`;
