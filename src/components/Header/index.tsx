import FavoriteIcon from '@/assets/icons/favorite-default.svg';
import SearchIcon from '@/assets/icons/search.svg';
import StoreIcon from '@/assets/icons/store-default.svg';
import Logo from '@/assets/logo.svg';
import styled from '@emotion/styled';

interface HeaderProps {
  mode: 'user' | 'seller';
  page: 'home' | 'other';
  title?: 'string';
  leftSideChildren: React.ReactNode;
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
          <IconBox>{leftSideChildren}</IconBox>
          <TitleBox>{title}</TitleBox> {/* 있을 때만 렌더링됨 */}
          <IconBox>{rightSideChildren}</IconBox> {/* 있을 때만 렌더링됨 */}
        </>
      );
    }
    return null;
  };

  return <HeaderWrapper>{renderElements()}</HeaderWrapper>;
};

export default Header;

// styles
const HEADER_HEIGHT = '44px';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 8px;
`;

const TitleBox = styled.div`
  position: absolute;
  // 중앙 배치
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;
