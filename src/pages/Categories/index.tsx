import Category from './components/Category';
import Grid from './components/Grid';
import styled from '@emotion/styled';
import SearchBar from '@/components/SearchBar';
import Gap from '@/components/Gap';

const categories = [
  {
    id: 1,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '동양화/서양화',
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '서양화/현대미술',
  },
  {
    id: 3,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '민화/추상화',
  },
  {
    id: 4,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '동양화/모던아트',
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '서양화/클래식',
  },
  {
    id: 6,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '수묵화/풍경화',
  },
  {
    id: 7,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '동양화/인물화',
  },
  {
    id: 8,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '서양화/정물화',
  },
  {
    id: 9,
    src: 'https://i.pinimg.com/474x/45/37/93/4537932e76ebcc6186f86b75d9eeac87.jpg',
    des: '동양화/서양화',
  },
];

const Categories = () => {
  return (
    <Wrapper>
      <SearchBar includeFavorite={true} />
      <Grid>
        {categories.map((category) => (
          <Category key={category.id} src={category.src} des={category.des} />
        ))}
      </Grid>
      <Gap height={18} />
      <SectionWrapper>
        <p style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold' }}>매거진</p>
        <p style={{ fontSize: 'var(--font-size-sm)' }}>숨겨진 무한의 가치를 발견하고 싶다면</p>
      </SectionWrapper>
      <Gap height={2} />
      <SectionWrapper>
        <p style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold' }}>아티스트 그라운드</p>
        <p style={{ fontSize: 'var(--font-size-sm)' }}>내 취향대로 작가 골라보기</p>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div``;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px 32px 16px;
  gap: 10px;
`;
