import { usePostFollow } from '@/apis/users/usePostFollow';
import ArtistItem from '@/components/common/ArtistItem';
import ProductItem from '@/components/common/ProductItem';
import { SearchArtist, SearchWork } from '@/types/index';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styled from '@emotion/styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface SwiperFrame {
  children: SearchArtist[] | SearchWork[];
}

const SwiperFrame = ({ children }: SwiperFrame) => {
  const { mutate: postFollow } = usePostFollow();

  const handleFollow = (artistId: number) => {
    postFollow(artistId);
  };

  return (
    <SwiperWrapper
      modules={[Scrollbar, Navigation]}
      slidesPerView="auto"
      spaceBetween={3}
      navigation={true}
    >
      {children.map((item) => (
        <StyledSwiperSlide key={item.id}>
          {'title' in item && (
            <ProductItem
              author={item.artist}
              title={item.title}
              src={item.src}
              price={item.price}
              key={item.id}
            />
          )}
          {'name' in item && (
            <ArtistItem
              author={item.name}
              src={item.src}
              like={item.totalLikes}
              follower={item.totalFollowers}
              key={item.id}
              onFollow={() => handleFollow(item.id)}
              isFollow={item.followed}
            />
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
  padding: 0 16px;
  .swiper-button-next,
  .swiper-button-prev {
    color: #333;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 5px;

    &:hover {
      color: var(--color-white);
    }
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 180px;
  height: 144px;
`;
