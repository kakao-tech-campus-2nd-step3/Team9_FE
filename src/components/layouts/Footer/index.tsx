import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

import GitHubIcon from '@/assets/github.svg?react';
import NotionIcon from '@/assets/notion.svg?react';

const Footer = () => {
  return (
    <Wrapper>
      <Box display="flex" flexDirection="column" gap="12px">
        <p>
          더 자세한 정보를 확인하려면 아래 웹사이트를 방문하십시오. <br />
          Visit our websites below for more information.
        </p>
        <Box display="flex" gap="12px">
          <GitHubIcon />
          <NotionIcon />
        </Box>
      </Box>
      <p>©️ 2024. 구해줘 쿠키즈 All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;

// styles

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: #f0f0f0;
  margin: auto 0 0 0;

  font-size: var(--font-size-xs);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
