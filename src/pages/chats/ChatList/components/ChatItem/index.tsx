import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import ProfileImage from '@/components/common/ProfileImage';
import { formatDate } from '@/utils/dates';

type ChatItemProps = {
  chatRoomId: number;
  imageUrl: string;
  nickname: string;
  date: string;
  content: string;
};

const ChatItem = ({ chatRoomId, imageUrl, nickname, date, content }: ChatItemProps) => {
  const formattedDate = formatDate(date);
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`${chatRoomId}`)}>
      <ProfileImage width={54} imageUrl={imageUrl} alt="profileImage" />
      <Box display="flex" flexDir="column" gap="4px" margin="0 0 0 12px">
        <Box display="flex" flexDir="row" gap="12px" alignItems="center">
          <Text fontSize="var(--font-size-md)" fontWeight="500">
            {nickname}
          </Text>
          <Text fontSize="var(--font-size-xs)" color="var(--color-gray-dk)">
            {formattedDate}
          </Text>
        </Box>
        <Text fontSize="var(--font-size-sm)" color="var(--color-gray-dk)">
          {content}
        </Text>
      </Box>
    </Wrapper>
  );
};

export default ChatItem;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--color-gray-lt);
  }
`;
