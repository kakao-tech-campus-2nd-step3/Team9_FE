import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import AddIcon from '@/assets/icons/add.svg?react';
import ArrowUpwardIcon from '@/assets/icons/arrow-upward.svg?react';
import type { Mode } from '@/types';
import { TABBAR_HEIGHT } from '../TabBar';

interface FABContainerProps {
  mode: Mode;
  scrollContainerRef: React.RefObject<HTMLElement>;
}

const FABContainer = ({ mode, scrollContainerRef }: FABContainerProps) => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const currentContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (currentContainer?.scrollTop && currentContainer.scrollTop > 0) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };

    if (currentContainer) {
      currentContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('scroll', handleScroll); // 언마운트
      }
    };
  }, [scrollContainerRef]);

  return (
    <Wrapper>
      {showScrollToTopButton && <ScrollToTopButton scrollContainerRef={scrollContainerRef} />}
      {mode === 'seller' && <PostButton />}
    </Wrapper>
  );
};

export default FABContainer;

interface ScrollToTopButtonProps {
  scrollContainerRef: React.RefObject<HTMLElement>;
}

const ScrollToTopButton = ({ scrollContainerRef }: ScrollToTopButtonProps) => {
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    color: var(--color-black);
  }
`;

const StyledPostButton = styled(StyledFAB)`
  border: none;
  background: var(--color-black);

  svg {
    color: var(--color-white);
  }
`;
