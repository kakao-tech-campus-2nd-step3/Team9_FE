import { RouterPath } from '@/routes/path';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';

const MenuSection = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <UlWrapper>
        <MenuItem onClick={() => navigate(RouterPath.orders)}>구매 내역</MenuItem>
        <MenuItem onClick={() => navigate(RouterPath.favorites)}>찜 / 팔로우</MenuItem>
        <MenuItem>회원 정보 수정</MenuItem>
      </UlWrapper>
    </Wrapper>
  );
};

export default MenuSection;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const UlWrapper = styled.ul`
  width: 100%;
`;
