export const SEARCH_ARRAY_KEY = 'searchArray';

export const POPULAR_SEARCH_LIST: string[] = [
  '#모던 아트',
  '#추상화',
  '#인상파',
  '#인물화',
  '#풍경화',
  '#큐비즘',
  '#디지털 아트',
  '#팝 아트',
  '#아크릴화',
  '#수채화',
];

//

type Ad = {
  title: string;
  imageUrl: string;
  artist: string;
  des: string;
};

export const AD_LIST: Ad[] = [
  {
    title: '',
    imageUrl:
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCVFQSVCNyVCOCVFQiVBNiVCQ3xlbnwwfHwwfHx8MA%3D%3D',
    artist: '',
    des: '',
  },
  {
    title: '',
    imageUrl:
      'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQyU4NCU5QyVFQyU5NiU5MSVFRCU5OSU5NHxlbnwwfHwwfHx8MA%3D%3D',
    artist: '',
    des: '',
  },
];
