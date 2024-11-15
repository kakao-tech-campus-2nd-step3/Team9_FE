type PopularSearch = {
  id: number;
  text: string;
};

export const POPULAR_SEARCH_LIST: PopularSearch[] = [
  { id: 1, text: '모던 아트' },
  { id: 2, text: '추상화' },
  { id: 3, text: '인상파' },
  { id: 4, text: '인물화' },
  { id: 5, text: '풍경화' },
  { id: 6, text: '큐비즘' },
  { id: 7, text: '디지털 아트' },
  { id: 8, text: '팝 아트' },
  { id: 9, text: '아크릴화' },
  { id: 10, text: '수채화' },
];

//

type SearchAd = {
  id: number;
  src: string;
};

export const AD_LIST: SearchAd[] = [
  {
    id: 1,
    src: ' https://images.unsplash.com/photo-1579273166152-d725a4e2b755?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCVFQSVCNyVCOCVFQiVBNiVCQ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQyU4NCU5QyVFQyU5NiU5MSVFRCU5OSU5NHxlbnwwfHwwfHx8MA%3D%3D',
  },
];
