import FavoriteIcon from '@/assets/icons/favorite-default.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import StoreIcon from '@/assets/icons/store-default.svg?react';
import Logo from '@/assets/logo.svg?react';
import styled from '@emotion/styled';

interface HeaderProps {
  mode: 'user' | 'seller';
  page: 'home' | 'other';
  title?: 'string';
  leftSideChildren?: React.ReactNode;
  rightSideChildren?: React.ReactNode;
}

const Header = ({ mode, page, title, leftSideChildren, rightSideChildren }: HeaderProps) => {
  const renderElements = () => {
    if (page === 'home') {
      return (
        <>
          <Logo />
          <IconBox>
            <SearchIcon />
            {mode === 'user' ? <FavoriteIcon /> : <StoreIcon />}
          </IconBox>
        </>
      );
    }
    if (page === 'other') {
      return (
        <>
          {/* 있을 때만 렌더링됨 */}
          <IconBox>{leftSideChildren}</IconBox>
          <TitleBox>{title}</TitleBox>
          <IconBox>{rightSideChildren}</IconBox>
        </>
      );
    }
    return null;
  };

  return <HeaderWrapper>{renderElements()}</HeaderWrapper>;
};

export default Header;

// styles
export const HEADER_HEIGHT = '4.4rem';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: var(--font-size-md);
  font-weight: 600;
`;
