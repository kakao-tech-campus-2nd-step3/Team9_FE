export type UserType = 'USER' | 'STUDENT' | 'BUSINESS'; // 서버에서 페칭한 유저 타입

export type Mode = 'user' | 'artist'; // 가입 절차 선택 및 화면 제공 용도

export type UserInfo = {
  username?: string; // user은 이거,
  name?: string; // user details는 이게 오는..;; // todo: 키명 수정 요청
  userImageUrl: string;
  nickname?: string;
  email?: string;
  birthdate?: string;
  phone?: string;
  address?: string;
  hashTags: string[];
};
