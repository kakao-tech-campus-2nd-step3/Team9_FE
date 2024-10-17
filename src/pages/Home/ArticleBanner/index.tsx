import styled from '@emotion/styled';

import IconButton from '@/components/common/IconButton';
import type { Article } from '@/constants/articleList';

type ArticleBannerProps = Article;

const ArticleBanner = ({ image, title, subtitle, description }: ArticleBannerProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <BannerLayout>
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
      </BannerLayout>
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
  margin: 0 8px;
  font-size: var(--font-size-xl);
  font-weight: 700;

  @media (min-width: 480px) {
    font-size: var(--font-size-xl);
  }
`;

const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
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

    @media (min-width: 480px) {
      font-size: var(--font-size-sm);
    }
  }

  .icon-button-wrapper {
    position: absolute;
    right: 20px;

    @media (min-width: 480px) {
      position: absolute;
      bottom: 36px;
      right: 20px;
    }
  }

  @media (min-width: 480px) {
    &::after {
      content: '';
      position: absolute;
      bottom: 16px;
      right: 20px;
      width: 220px;
      height: 4px;
      background-color: var(--color-black);
    }
  }
`;
