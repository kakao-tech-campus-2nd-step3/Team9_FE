export type Ad = {
  image: string;
  title: string;
  description: string;
};

export const adList: Ad[] = [
  {
    image: 'https://ilmin.org/wp-content/uploads/2023/04/20230411_010038-scaled.jpg',
    title: '《히스테리아: 동시대 리얼리즘 회화》',
    description: '동시대 작가 13인의 작업을 통해 본 회화의 ‘리얼’한 경향',
  },
  {
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA2MjNfMTA4/MDAxNjU1OTEwNDk2NzMy.fbBXgjxLuDJ3kWi0V2PsgWc4TCs_lit7amI_Cp6Slkkg.Olza3bFhl1gEc6w4bKb5--Ow6ylipBJ5Bd1bNyDO4Rog.JPEG.joimy/njpartcenter_274340073_1166895660732614_805209592907099087_n.jpg?type=w800',
    title: '백남준 탄생 90주년 특별전',
    description: '백남준의 결정적인 열 가지 장면을 조명하다',
  },
  {
    image: 'https://diaf.or.kr/img/diaf/msec02.jpg',
    title: '제 17회 대구국제아트페어',
    description: '티켓 사전 구매 시 추첨을 통해 경품 증정',
  },
];
