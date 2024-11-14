import { RouterPath } from '@/routes/path';
import { useNavigate } from 'react-router-dom';
import { MenuItem, UlWrapper, Wrapper } from './styles';

const menuItems = [
  { label: '판매 내역', path: RouterPath.sales },
  { label: '찜 / 팔로우', path: RouterPath.favorites },
  { label: '내 갤러리', path: RouterPath.gallery },
  { label: '회원 정보 수정', path: '' },
];

const ArtistMenuSection = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <UlWrapper>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => item.path && navigate(item.path)}>
            {item.label}
          </MenuItem>
        ))}
      </UlWrapper>
    </Wrapper>
  );
};

export default ArtistMenuSection;
