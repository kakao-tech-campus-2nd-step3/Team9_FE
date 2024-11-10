import { RouterPath } from '@/routes/path';
import { useNavigate } from 'react-router-dom';
import { MenuItem, UlWrapper, Wrapper } from './ArtistMenuSection.styles';

const ArtistMenuSection = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <UlWrapper>
        <MenuItem onClick={() => navigate(RouterPath.sales)}>판매 내역</MenuItem>
        <MenuItem onClick={() => navigate(RouterPath.favorites)}>찜 / 팔로우</MenuItem>
        <MenuItem onClick={() => navigate(RouterPath.gallery)}>내 갤러리</MenuItem>
        <MenuItem>회원 정보 수정</MenuItem>
      </UlWrapper>
    </Wrapper>
  );
};

export default ArtistMenuSection;
