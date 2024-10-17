import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

import IconButton from '@/components/common/IconButton';

interface ArticleBannerProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const ArticleBanner = ({ image, title, subtitle, description }: ArticleBannerProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Box display="grid" gridTemplateColumns="1fr 1.5fr">
        <ImageWrapper>
          <img src={image} />
        </ImageWrapper>
        <Description>
          <h2 className="subtitle">{subtitle}</h2>
          <p className="description">{description}</p>
          <div className="icon-button-wrapper">
            <IconButton icon="arrow-forward" />
          </div>
        </Description>
      </Box>
    </Wrapper>
  );
};

export default ArticleBanner;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 16px 0;

  @media (min-width: 480px) {
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  text-align: start;
  margin-left: 8px;
  font-size: var(--font-size-lg);
  font-weight: 700;

  @media (min-width: 480px) {
    font-size: var(--font-size-xl);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  position: relative;

  .subtitle {
    text-align: start;
    font-size: var(--font-size-md);
    font-weight: 600;
    word-break: keep-all;
    margin-bottom: 10px;

    @media (min-width: 480px) {
      font-size: var(--font-size-lg);
    }
  }

  .description {
    text-align: start;
    font-size: var(--font-size-sm);
    font-weight: 400;
    word-break: keep-all;
    margin-bottom: 20px;

    @media (min-width: 480px) {
      font-size: var(--font-size-sm);
    }
  }

  .icon-button-wrapper {
    position: absolute;
    bottom: 36px;
    right: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 16px;
    right: 20px;
    width: 220px;
    height: 4px;
    background-color: var(--color-black);
  }
`;
