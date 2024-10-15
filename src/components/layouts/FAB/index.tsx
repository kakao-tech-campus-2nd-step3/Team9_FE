import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import AddIcon from '@/assets/icons/add.svg?react';
import ArrowUpwardIcon from '@/assets/icons/arrow-upward.svg?react';
import type { Mode } from '@/types';
import { TABBAR_HEIGHT } from '../TabBar';

interface FABContainerProps {
  mode: Mode;
}

// 추후 사용자 모드 받는 API 구현되면 수정해야 함
const FABContainer = ({ mode }: FABContainerProps) => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      {showScrollToTopButton && <ScrollToTopButton />}
      {mode === 'seller' && <PostButton />}
    </Wrapper>
  );
};

export default FABContainer;

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledScrollToTopButton onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </StyledScrollToTopButton>
  );
};

const PostButton = () => {
  return (
    <StyledPostButton>
      <AddIcon />
    </StyledPostButton>
  );
};

// styles

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: fixed;
  right: 16px;
  bottom: 16px;
  margin-bottom: ${TABBAR_HEIGHT};
`;

const StyledFAB = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledScrollToTopButton = styled(StyledFAB)`
  border: 1px solid var(--color-black);
  background: var(--color-white);

  svg {
    path {
      fill: var(--color-black);
    }
  }
`;

const StyledPostButton = styled(StyledFAB)`
  border: none;
  background: var(--color-black);

  svg {
    path {
      fill: var(--color-white);
    }
  }
`;
