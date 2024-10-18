export type Mode = 'user' | 'seller';

export type SearchWork = {
  id: number;
  src: string;
  title: string;
  artist: string;
  price: number;
};

export type SearchAd = {
  id: number;
  src: string;
};

export type Categories = {
  id: number;
  src: string;
  des: string;
};

export type PopularSearch = {
  id: number;
  text: string;
};

export type SearchArtist = {
  id: number;
  name: string;
  src: string;
  totalFollowers: number;
  totalLikes: number;
  followed: boolean;
};
