import styled from '@emotion/styled';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import type { Ad } from '@/constants/adList';

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
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {adList.map((ad, index) => (
          <>
            <SwiperSlide key={index}>
              <img
                src={ad.image}
                style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <Title>{ad.title}</Title>
          </>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default AdBanner;

const Wrapper = styled.div`
  margin-bottom: 16px;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-white);

    &::after {
      font-size: 32px;
    }
  }

  .swiper-pagination-bullet {
    background-color: var(--color-gray-dk);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--color-white);
  }
`;

const Title = styled.h1`
  position: absolute;
  left: 20px;
  bottom: 20px;
  z-index: 100;
`;
