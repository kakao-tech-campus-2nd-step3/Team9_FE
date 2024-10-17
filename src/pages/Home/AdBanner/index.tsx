import styled from '@emotion/styled';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import type { Ad } from '@/constants/adList';
import { Box } from '@chakra-ui/react';

type AdBannerProps = {
  adList: Ad[];
};

const AdBanner = ({ adList }: AdBannerProps) => {
  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50, // 각 슬라이드의 회전 각도
          stretch: 30, // 슬라이드 간의 간격
          depth: 100, // 슬라이드의 깊이
          modifier: 1, // 효과의 강도 조절
          slideShadows: true, // 그림자 표시 여부
        }}
        loop={true} // 무한 반복
        centeredSlides={true} // 슬라이드를 중앙에 정렬
        slidesPerView={1.2} // 한 번에 보이는 슬라이드 개수
        spaceBetween={12} // 슬라이드 간의 간격
      >
        {adList.map((ad, index) => (
          <SwiperSlide key={index}>
            <img
              src={ad.image}
              style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }}
            />
            <Description>
              <h1 className="title">{ad.title}</h1>
              <p className="description">{ad.description}</p>
            </Description>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default AdBanner;

const Wrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
  cursor: pointer;

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-white);

    &::after {
      font-size: 32px;
    }
  }

  .swiper-pagination {
    bottom: 10px;
  }
  .swiper-pagination-bullet {
    background-color: var(--color-gray-dk);
    opacity: 1;
    border-radius: 0%;
    width: 20px;
    height: 4px;
    margin: 0;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--color-white);
  }
`;

const Description = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 40px;

  .title {
    display: inline-block; // block과 달리 자기 너비만큼만 차지
    background-color: rgba(0, 0, 0, 0.5);
    padding: 8px 12px;
    color: var(--color-white);
    font-size: var(--font-size-xl);
    font-weight: 800;

    @media (min-width: 480px) {
      font-size: var(--font-size-xxl);
    }
  }

  .description {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 8px 12px;
    color: var(--color-white);
    font-size: var(--font-size-md);
    font-weight: 500;

    @media (min-width: 480px) {
      font-size: var(--font-size-xl);
    }
  }
`;
