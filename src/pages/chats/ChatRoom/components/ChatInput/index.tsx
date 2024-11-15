import styled from '@emotion/styled';
import { CompatClient } from '@stomp/stompjs';
import { useRef, useState } from 'react';

import { sendFile, sendMessage } from '@/apis/chats';
import CancelIcon from '@/assets/icons/cancel-default.svg?react';
import ImageIcon from '@/assets/icons/image.svg?react';
import SendIcon from '@/assets/icons/send.svg?react';
import type { User } from '@/types/chats';
import { countNonSpaceChars } from '@/utils/strings';

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

  // SEND DTO
  const [content, setContent] = useState<string>('');
  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);

  // 내용의 세로 길이에 맞게 입력창 높이 자동 조정하는 함수
  const adjustHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'; // 초기화

    const newHeight = textarea.scrollHeight;
    textarea.style.height = `${newHeight}px`;
    setChatInputHeight(`${newHeight + 12}px`);
    onHeightChange(`${newHeight + 12}px`); // 부모로 높이 전달 (패딩 포함)
  };

  // 텍스트 컨텐트 핸들러
  const handleTextContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    adjustHeight(e.target);
  };

  // 메시지(TEXT) 전송 핸들러
  const handleSendText = async () => {
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

  // 이미지 선택 핸들러
  const handleUploadImage = () => {
    fileRef.current?.click();
  };

  // 이미지 미리보기
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileBlob = e.target.files ? e.target.files[0] : null;
    setImage(fileBlob); // File 객체를 직접 설정합니다.

    // 미리보기를 위해 FileReader를 사용합니다.
    if (fileBlob) {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);

      reader.onload = () => {
        if (reader.result && typeof reader.result === 'string') {
          // 여기서 미리보기 이미지 URL을 설정합니다.
          const imgElement = document.querySelector('#previewImage') as HTMLImageElement;
          if (imgElement) {
            imgElement.src = reader.result;
          }
        }
      };
    }
  };

  // 이미지 삭제 핸들러
  const handleDeleteImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setImage(null);
  };

  // 메시지(IMAGE) 전송 핸들러
  const handleSendImage = async () => {
    if (!client || !image) {
      return;
    }

    try {
      // 파라미터: client, chatRoomId, email, file
      sendFile(client, chatRoomId, sender.email, image);
      setImage(null);
    } catch (error) {
      alert(error);
    }

    // // 이미지 전송 test
    // const reader = new FileReader();

    // reader.onload = function (e) {
    //   const fileBytes = new Uint8Array(e.target?.result as ArrayBuffer);
    //   const fileBase64 = btoa(
    //     fileBytes.reduce((data, byte) => data + String.fromCharCode(byte), ''),
    //   );

    //   if (fileBase64) {
    //     const message = {
    //       chatRoomId,
    //       userEmail: sender.email,
    //       fileBase64,
    //     };

    //     client.send(JSON.stringify(message));
    //   }
    // };

    // reader.readAsArrayBuffer(image); // 파일을 ArrayBuffer로 읽음
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
      handleSendText();
      handleSendImage();
    }
  };

  return (
    <StyledChatInput height={chatInputHeight}>
      {/* 텍스트 전송 */}
      {!image && (
        <>
          <button onClick={handleUploadImage}>
            <ImageIcon />
            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </button>
          <StyledTextarea
            placeholder="메시지 입력"
            ref={textareaRef}
            value={content}
            onChange={handleTextContent}
            onKeyDown={handleKeyDown}
          />
          <button disabled={!countNonSpaceChars(content)} onClick={handleSendText}>
            <SendIcon />
          </button>
        </>
      )}
      {/* 이미지 전송 */}
      {image && (
        <>
          <PreviewImageContainer>
            <PreviewImage id="previewImage" src="" />
            <DeleteImageButton onClick={handleDeleteImage}>
              <CancelIcon />
            </DeleteImageButton>
          </PreviewImageContainer>
          <button disabled={!image} onClick={handleSendImage}>
            <SendIcon />
          </button>
        </>
      )}
    </StyledChatInput>
  );
};

export default ChatInput;

const StyledChatInput = styled.div<{ height: string }>`
  width: 100%;
  min-height: 5.4rem;
  display: flex;
  justify-content: space-between;
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

const PreviewImageContainer = styled.div`
  position: relative;
  max-height: 120px;
  aspect-ratio: 1 / 1;
`;

const PreviewImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
  border: var(--color-gray-md) 1px solid;
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  outline: none;
  color: var(--color-gray-md);
`;
