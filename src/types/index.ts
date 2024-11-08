export type Mode = 'user' | 'artist';

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

export interface User {
  userId: number;
  nickname: string;
  userImageUrl: string;
  totalFollowers: number;
  totalLikes: number;
}

export type FollowResponse = { content: User[] };

export type UserInfo = {
  username: string;
  hashTags: string[];
  userImageUrl: string;
};

export type ArtistInfo = {
  nickname: string;
  description: string;
  totalFollowers: number;
  totalLikes: number;
  about: string;
  ImageUrl: string;
};

export type APIResponse<T = unknown> = {
  code: number;
  message: string;
  data: T;
};
