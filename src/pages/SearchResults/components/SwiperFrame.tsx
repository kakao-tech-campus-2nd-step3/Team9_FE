import { SearchArtist, SearchWork } from '@/types/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import styled from '@emotion/styled';

import 'swiper/css';
import 'swiper/css/scrollbar'; // Add this line to import scrollbar styles

interface SwiperFrame {
  children: SearchArtist[] | SearchWork[];
}

const SwiperFrame = ({ children }: SwiperFrame) => {
  return (
    <SwiperWrapper
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
      slidesPerView={3}
      spaceBetween={40}
    >
      {children.map((item) => (
        <StyledSwiperSlide key={item.id}>
          <Image src={item.src} alt={'title' in item ? item.title : item.name} />
          {'title' in item && (
            <>
              <p>제목: {item.title}</p>
              <p>작가: {item.artist}</p>
              <p>가격: {item.price}원</p>
            </>
          )}
          {'name' in item && (
            <>
              <p>이름: {item.name}</p>
              <p>팔로워 수: {item.totalFollowers}</p>
              <p>좋아요 수: {item.totalLikes}</p>
              <p>{item.followed ? '팔로우 중' : '팔로우 안 함'}</p>
            </>
          )}
        </StyledSwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default SwiperFrame;

const SwiperWrapper = styled(Swiper)`
  width: 100%;
  height: 223px;
  padding: 10px 0;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 180px;
  height: 144px;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
`;
