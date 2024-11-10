export type Article = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

export const ARTICLE_LIST: Article[] = [
  {
    image: 'http://www.mediadale.com/news/photo/202007/53159_63324_3446.jpg',
    title: '예술계가 주목하는 대학생 신인 작가, 마르코',
    subtitle: '한계를 부수고, 더 많이 그리고 싶어요',
    description:
      '자신의 예술적 경계를 넘어서기 위해 끊임없이 노력하는 23세의 젊은 작가를 소개합니다.',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRsCNS%2FbtruXXySAou%2Fb2sKldvj8EfKSMpePKTYmk%2Fimg.jpg',
    title: '백남준 탄생 90주년 특별전 《아방가르드는 당당하다》',
    subtitle: '백남준의 결정적인 열 가지 장면',
    description: '항상 새로운 매체와 예술에 도전했던 아방가르드 예술가 백남준을 조명합니다.',
  },
];

//

export type HomeAd = {
  image: string;
  title: string;
  description: string;
};

export const AD_LIST: HomeAd[] = [
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
  {
    image: 'https://groundseesaw.co.kr/web/product/big/202409/677bbc59cec139dfc8c237e38626bbc7.jpg',
    title: '일상을 딛고 세계 곳곳을 여행하자',
    description: '얼리버드 구매 시 50% 할인',
  },
];
