type Category = {
  src: string;
  title: string;
};

export const CATEGORY_LIST: Category[] = [
  {
    src: 'https://images.unsplash.com/photo-1580136608079-72029d0de130?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVCJThGJTk5JUVDJTk2JTkxJUVBJUI3JUI4JUVCJUE2JUJDfGVufDB8fDB8fHww',
    title: '동양화/한국화',
  },
  {
    src: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTg0JTlDJUVDJTk2JTkxJUVEJTk5JTk0fGVufDB8fDB8fHww',
    title: '서양화',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1672287578309-2a2115000688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUExJUIwJUVBJUIwJTgxfGVufDB8fDB8fHww',
    title: '조각',
  },
  {
    src: 'https://images.unsplash.com/photo-1590605105526-5c08f63f89aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVCJThGJTg0JUVDJTk4JTg4fGVufDB8fDB8fHww',
    title: '도예/공예',
  },
  {
    src: 'https://images.unsplash.com/photo-1682159672286-40790338349b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVCJTg5JUI0JUVCJUFGJUI4JUVCJTk0JTk0JUVDJTk2JUI0fGVufDB8fDB8fHww',
    title: '뉴미디어',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1663100678842-d89cb7b084ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQiU5NCU5NCVFQyU5RSU5MCVFQyU5RCVCOHxlbnwwfHwwfHx8MA%3D%3D',
    title: '디자인',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1723075214781-ea091374d81c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVEJThDJTkwJUVEJTk5JTk0fGVufDB8fDB8fHww',
    title: '드로잉/판화',
  },
  {
    src: 'https://images.unsplash.com/photo-1506434304575-afbb92660c28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVDJTgyJUFDJUVDJUE3JTg0JUVDJTgyJUFDfGVufDB8fDB8fHww',
    title: '사진',
  },
  {
    src: 'https://images.unsplash.com/photo-1546638008-efbe0b62c730?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVCJThGJTk5JUVDJTk2JTkxJUVBJUI3JUI4JUVCJUE2JUJDfGVufDB8fDB8fHww',
    title: '서예/캘리그라피',
  },
];

type Curation = { title: string; des: string };

export const CURATION_LIST: Curation[] = [
  {
    title: '매거진',
    des: '숨겨진 무한의 가치를 발견하고 싶다면',
  },
  {
    title: '아티스트 그라운드',
    des: '내 취향대로 작가 골라보기',
  },
];
