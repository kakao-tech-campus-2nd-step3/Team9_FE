import { RouterPath } from '@/routes/path';
import { useNavigate } from 'react-router-dom';
import { MenuItem, UlWrapper, Wrapper } from './styles';

const UserMenuSection = () => {
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

export default UserMenuSection;
