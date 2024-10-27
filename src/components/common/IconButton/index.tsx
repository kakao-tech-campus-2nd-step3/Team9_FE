import styled from '@emotion/styled';

import ArrowBackIcon from '@/assets/icons/arrow-back.svg?react';
import ArrowForward from '@/assets/icons/arrow-forward.svg?react';
import FavoriteDefaultIcon from '@/assets/icons/favorite-default.svg?react';
import HomeIcon from '@/assets/icons/home-default.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import StoreDefaultIcon from '@/assets/icons/store-default.svg?react';

interface IconButtonProps {
  icon: 'arrow-back' | 'arrow-forward' | 'favorite-default' | 'home' | 'search' | 'store-default';
  color?: string;
  onClick?: () => void;
}

const IconButton = ({ icon, color = 'var(--color-black)', onClick }: IconButtonProps) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'arrow-back':
        return <ArrowBackIcon style={{ color: `${color}` }} />;
      case 'arrow-forward':
        return <ArrowForward />;
      case 'favorite-default':
        return <FavoriteDefaultIcon />;
      case 'home':
        return <HomeIcon style={{ color: `${color}` }} />;
      case 'search':
        return <SearchIcon />;
      case 'store-default':
        return <StoreDefaultIcon />;
      default:
        throw new Error('icon prop을 명시해주세요');
    }
  };

  return <StyledIconButton onClick={onClick}>{renderIcon(icon)}</StyledIconButton>;
};

export default IconButton;

const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  svg {
    color: white;
  }
`;
