import styled from '@emotion/styled';

import AddIcon from '@/assets/icons/add.svg?react';
import ArrowUpwardIcon from '@/assets/icons/arrow-upward.svg?react';

interface ScrollToTopButtonProps {
  scrollContainerRef: React.RefObject<HTMLElement>;
}

export const ScrollToTopButton = ({ scrollContainerRef }: ScrollToTopButtonProps) => {
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

export const PostButton = () => {
  return (
    <StyledPostButton>
      <AddIcon />
    </StyledPostButton>
  );
};

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
