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

export type User = {
  userId: number;
  nickname: string;
  userImageUrl: string;
  totalFollowers: number;
  totalLikes: number;
};

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

export type SearchArtistInfo = {
  id: number;
  nickname: string;
  artistImageUrl: string;
  totalFollowers: number;
  totalLikes: number;
  isFollowing: boolean;
};

export type SearchArtistsResponse = {
  artists: SearchArtistInfo[];
  hasNext: boolean;
};

export type APIResponse<T = unknown> = {
  code: number;
  message: string;
  data: T;
};

export type InfiniteAPIResponse<T> = {
  pages: APIResponse<T>[];
  pageParams: number[];
};

export type SearchProductInfo = {
  id: number;
  name: string;
  artist: string;
  thumbnailUrl: string;
  price: number;
};

export type SearchProductsResponse = {
  products: SearchProductInfo[];
  hasNext: boolean;
};

export type DetailArtistInfo = {
  id: number;
  userId: number;
  artistName: string;
  artistImageUrl: string;
  artistType: string;
  totalFollowers: number;
  totalLikes: number;
  about: string;
};

export type ProductResponse = {
  id: number;
  name: string;
  category: string;
  size: string;
  price: number;
  description: string;
  preferredLocation: string;
  hashTags: string[];
  artistInfo: DetailArtistInfo;
  imageUrls: string[];
};

export type ProfileResponse = {
  id: number;
  nickname: string;
  description: string;
  totalFollowers: number;
  totalLikes: number;
  about: string;
  ImageUrl: string;
  isFollowed: boolean;
};
