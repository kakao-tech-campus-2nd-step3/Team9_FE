import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import Logo from '@/assets/logo.svg?react';
import IconButton from '@/components/common/IconButton';
import { RouterPath } from '@/routes/path';
import useModeStore from '@/store/useModeStore';
import useSearchModalStore from '@/store/useSearchModalStore';
import { HEIGHTS, Z_INDEX } from '@/styles/constants';

interface HeaderProps {
  title?: string;
  leftSideChildren?: React.ReactNode;
  rightSideChildren?: React.ReactNode;
}

const Header = ({ title, leftSideChildren, rightSideChildren }: HeaderProps) => {
  const { pathname } = useLocation();
  const { mode } = useModeStore();
  const { isModalOpen, setIsModalOpen } = useSearchModalStore();

  const renderElements = () => {
    if (pathname === RouterPath.home) {
      return (
        <>
          <Logo />
          <IconBox>
            <IconButton icon="search" onClick={() => setIsModalOpen(!isModalOpen)} />
            {mode === 'user' ? (
              <IconButton icon="favorite-default" />
            ) : (
              <IconButton icon="store-default" />
            )}
          </IconBox>
        </>
      );
    } else {
      return (
        <>
          {/* 있을 때만 렌더링됨 */}
          <IconBox>{leftSideChildren}</IconBox>
          <TitleBox>{title}</TitleBox>
          <IconBox>{rightSideChildren}</IconBox>
        </>
      );
    }
  };

  return <Wrapper>{renderElements()}</Wrapper>;
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  z-index: ${Z_INDEX.Header};
  top: 0;
  width: 100%;
  height: ${HEIGHTS.HEADER};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
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
