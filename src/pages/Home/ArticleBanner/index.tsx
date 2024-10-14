import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface ArticleBannerProps {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
}

const ArticleBanner = ({ image, title, subtitle, description }: ArticleBannerProps) => {
  return (
    <Wrapper>
      <Text as="title" margin="0 0 0 8px" fontSize="var(--font-size-lg)" fontWeight="700">
        {title}
      </Text>
      <Box height="17rem" display="grid" grid-template-columns="1fr 1fr">
        <Image src={image} alt="이미지" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          alignSelf="stretch"
          padding="10px 16px"
        >
          <Text textAlign="center" fontSize="var(--font-size-md)" fontWeight="600">
            {subtitle}
          </Text>
          <Text textAlign="center" fontSize="var(--font-size-xs)" fontWeight="400">
            {description}
          </Text>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default ArticleBanner;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;
