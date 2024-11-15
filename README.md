![logo(128)](https://github.com/user-attachments/assets/e421222c-50c9-4cea-8e15-2ec2443b721c)
## 1.618 | 예술과 가치의 황금비

## 개요

대학생과 신진 작가를 위한 미술 작품 중개 서비스를 개발하였습니다.😀

졸업 전시 후 버려지는 작품들에 대한 문제성을 인식하고,  
소비자의 합리적인 가격대의 미술품 및 인테리어의 수요를 충족하자는 아이디어에서 시작하여  
해당 서비스를 기획•개발하게 되었습니다.

## 링크
[1.618 홈페이지](http://1.618.s3-website.ap-northeast-2.amazonaws.com/)  

[프론트엔드 GitHub](https://github.com/kakao-tech-campus-2nd-step3/Team9_FE)  
[백엔드 GitHub](https://github.com/kakao-tech-campus-2nd-step3/Team9_BE)  

[Swagger](http://golden-ratio.duckdns.org/swagger-ui/index.html#/)  
[Figma](https://www.figma.com/design/B1WP5pDtbxGT5ZA42qfbM1/%EC%B9%B4%ED%85%8C%EC%BA%A0_step3-%5B1.618%5D?node-id=0-1&t=1Ysk1xzjdd4Px0RG-1)  

## 팀원

|Frontend|Frontend|
|:------:|:------:|
|[<img src="https://avatars.githubusercontent.com/u/91789311?v=4" width="100px">](https://github.com/joojjang)|[<img src="https://avatars.githubusercontent.com/u/74394824?v=4" width="100px">](https://github.com/seung365)|
|[김민주](https://github.com/joojjang)|[백승범](https://github.com/seung365)|

|Backend|Backend|Backend|Backend|Backend|
|:------:|:------:|:------:|:------:|:------:|
|[<img src="https://github.com/donghyuun.png" width="100px">](https://github.com/donghyuun)|[<img src="https://github.com/pjhcsols.png" width="100px">](https://github.com/pjhcsols)|[<img src="https://github.com/sim-mer.png" width="100px">](https://github.com/sim-mer)|[<img src="https://github.com/yooonwodyd.png" width="100px">](https://github.com/yooonwodyd)|[<img src="https://github.com/jupyter471.png" width="100px">](https://github.com/jupyter471)|
|[김동현](https://github.com/donghyuun)|[박한솔](https://github.com/pjhcsols)|[심규민](https://github.com/sim-mer)|[윤재용](https://github.com/yooonwodyd)|[주보경](https://github.com/jupyter471)|

## 기술 스택

### Frontend

![TypeScript](https://img.shields.io/badge/typescript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite&labelColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10.2.3-CB3837?style=flat-square&logo=npm&labelColor=white)
![Zustand](https://img.shields.io/badge/Zustand-4.5.0-black?style=flat-square&labelColor=white)
![styled-components](https://img.shields.io/badge/styled_components-6.1.8-black?style=flat-square&logo=styled-components&logoColor=white&labelColor=DB7093)
Data Fetching : Axios, Tanstack Query <br>
CSS / UI : Chackra UI, Emotion, Swiper <br>
Form : React Hook Form <br>
Store : Zustand <br>
Deployment : AWS S3 Bucket, AWS CloudFront <br>
CI / CD : Git Action <br>

### Backend

![Java](https://img.shields.io/badge/java-17-007396?style=flat-square&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.1.8-6DB33F?style=flat-square&logo=springboot&logoColor=6DB33F)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat-square&logo=MySQL&logoColor=white)

### DevOps

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-181717?style=flat-square&logo=GitHub&logoColor=white)
![Google Cloud Platform](https://img.shields.io/badge/Google_Cloud_Platforms-4285F4?style=flat-square&logo=GoogleCloud&logoColor=white)

## 주요 개발 현황

### Frontend

#### 로그인 / 회원가입
카카오 로그인을 진행하였습니다. 그 후 일반 유저와 작가 유저로 나누어 회원가입을 진행하였습니다. 또한 외부 api를 통해 작가의 경우 학생 작가 or 신진 작가에 대한 검증을 구현 하였습니다.<br>
#### 피드 둘러보기
무한 스크롤을 사용하여 랜덤으로 다양한 피드를 제공합니다. <br>
#### 검색
사용자가 원하는 작품 및 작가를 검색할 수 있게 합니다. <br>
최근 검색어, 검색 결과 정렬, 통합 - 작가 - 작품 검색결과를 노출하여 사용자가 검색한 작품을 보다 편하게 볼수 있게 하였습니다. <br>
#### 채팅
채팅을 통해 해당 작품을 작가와 직접 거래 할 수 있는 시스템을 마련하였습니다. <br>
#### 마이페이지
자신의 프로필을 확인 할 수 있습니다. 그리고 자신이 찜한 목록 및 팔로우 목록을 볼 수 있습니다.

### Backend


## 차후 개발 계획

### Frontend

- 유저 모드와 작가 모드를 나눈 부분을 더 활용하여 모드에 따라 유저들이 서비스를 편리하게 이용하도록 화면 구성 및  
탠스택 쿼리 서스펜스를 사용한 코드를 발전시켜 데이터 페칭 시 UX를 개선할 예정입니다.  
- API 통신 코드의 에러 핸들링을 개선할 예정입니다.  
- 미구현한 기능 -회원 정보 수정, 작품 포스팅, 내 갤러리, 채팅 이미지 전송- 을 이어서 구현할 예정입니다.  
- 프로젝트 구조를 개선하고 도메인을 분리할 예정입니다.  
- 중복되거나 성능 개선이 필요한 부분을 테스트 도구를 활용하여 개선할 예정입니다.  

### Backend



