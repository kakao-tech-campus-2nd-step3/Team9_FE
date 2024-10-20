import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import type { Mode } from '@/types';
import { TABBAR_HEIGHT } from '../TabBar';
import { ScrollToTopButton, PostButton } from '.';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: fixed;
  right: 16px;
  bottom: 16px;
  margin-bottom: ${TABBAR_HEIGHT};
`;
