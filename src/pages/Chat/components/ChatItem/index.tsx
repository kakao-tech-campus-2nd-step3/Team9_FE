import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { formatDate } from '@/utils';

type ChatItemProps = {
  imageUrl: string;
  nickname: string;
  date: string;
  content: string;
};

const ChatItem = ({ imageUrl, nickname, date, content }: ChatItemProps) => {
  const formattedDate = formatDate(date);

  return (
    <Wrapper>
      <Box
        width="54px"
        aspectRatio="1 / 1"
        borderRadius="50px"
        border="1px solid var(--color-gray-md)"
        backgroundColor="var(--color-gray-lt)"
      >
        <img src={imageUrl} />
      </Box>
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
`;
