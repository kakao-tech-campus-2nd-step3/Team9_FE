import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { CompatClient } from '@stomp/stompjs';

import { sendMessage } from '@/apis/chats';
import type { User } from '@/apis/chats/types';
import SendIcon from '@/assets/icons/send.svg?react';
import { countNonSpaceChars } from '@/utils';

type ChatInputProps = {
  client: CompatClient | null;
  chatRoomId: number;
  sender: User;
  onHeightChange: (height: string) => void;
};

const ChatInput = ({ client, chatRoomId, sender, onHeightChange }: ChatInputProps) => {
  // 메시지 인풋 창 높이 조정
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [chatInputHeight, setChatInputHeight] = useState<string>('5.4rem');

  const [content, setContent] = useState<string>('');

  // 내용의 세로 길이에 맞게 입력창 높이 자동 조정하는 함수
  const adjustHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'; // 초기화

    const newHeight = textarea.scrollHeight;
    textarea.style.height = `${newHeight}px`;
    setChatInputHeight(`${newHeight + 12}px`);
    onHeightChange(`${newHeight + 12}px`); // 부모로 높이 전달 (패딩 포함)
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    adjustHeight(e.target);
  };

  // 메시지 전송 핸들러
  const handleSendMessage = () => {
    if (!client || !content || content.trim() === '') {
      return;
    }

    try {
      // 파라미터: client, chatRoomId, email, content
      sendMessage(client, chatRoomId, sender.email, content);
      setContent('');
    } catch (error) {
      alert(error);
    }
  };

  // 키보드 이벤트 핸들러
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        // shift + enter는 줄바꿈
        return;
      }
      // enter만 누르면 메시지 전송
      e.preventDefault(); // 기본 Enter 동작(줄바꿈)을 막음
      handleSendMessage();
    }
  };

  return (
    <StyledChatInput height={chatInputHeight}>
      <StyledTextarea
        placeholder="메시지 입력"
        ref={textareaRef}
        value={content}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button disabled={!countNonSpaceChars(content)} onClick={handleSendMessage}>
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
