# 1.618: 예술과 가치의 황금비

## 개요

대학생과 신진 작가를 위한 미술 작품 중개 서비스를 개발하였습니다.😀

졸업 전시 후 버려지는 작품들에 대한 문제성을 인식하고, 소비자의 합리적인 가격대의 미술품 및 인테리어의 수요를 충족하자는 아이디어에서 시작하여 해당 서비스를 기획•개발하게 되었습니다.

## 링크
프론트엔드 배포 : http://1.618.s3-website.ap-northeast-2.amazonaws.com/ <br>
프론트엔드 GitHub :  https://github.com/kakao-tech-campus-2nd-step3/Team9_FE <br>
백엔드 GitHub : https://github.com/kakao-tech-campus-2nd-step3/Team9_BE <br>
Swagger : http://golden-ratio.duckdns.org/swagger-ui/index.html#/ <br>

## 팀원

|Frontend|Frontend|
|:------:|:------:|
|[<img src="https://avatars.githubusercontent.com/u/91789311?v=4" width="100px">](https://github.com/joojjang)|[<img src="https://avatars.githubusercontent.com/u/74394824?v=4" width="100px">](https://github.com/seung365)|
|[김민주](https://github.com/joojjang)|[백승범](https://github.com/seung365)|

|Backend|Backend|Backend|Backend|Backend|
|:------:|:------:|:------:|:------:|:------:|
|[<img src="https://github.com/donghyuun.png" width="100px">](https://github.com/donghyuun)|[<img src="https://github.com/pjhcsols.png" width="100px">](https://github.com/pjhcsols)|[<img src="https://github.com/sim-mer.png" width="100px">](https://github.com/sim-mer)|[<img src="https://github.com/yooonwodyd.png" width="100px">](https://github.com/yooonwodyd)|[<img src="https://github.com/jupyter471.png" width="100px">](https://github.com/donghyuun)|
|[김동현](https://github.com/pjhcsols)|[박한솔](https://github.com/sim-mer)|[심규민](https://github.com/sim-mer)|[윤재용](https://github.com/yooonwodyd)|[주보경](https://github.com/jupyter471)|



## 프론트엔드 기술 스택

Frontend : React, Vite, TypeScript <br>
Package Manage : Pnpm <br>
Data Fetching : Axios, Tanstack Query <br>
CSS / UI : Chackra UI, Emotion, Swiper <br>
Form : React Hook Form <br>
Store : Zustand <br>
Deployment : AWS S3 Bucket, AWS CloudFront <br>
CI / CD : Git Action <br>

## 백엔드 기술 스택

## 프론트엔드 주요 개발 현황

### 로그인 / 회원가입
카카오 로그인을 진행하였습니다. 그 후 일반 유저와 작가 유저로 나누어 회원가입을 진행하였습니다. 또한 외부 api를 통해 작가의 경우 학생 작가 or 신진 작가에 대한 검증을 구현 하였습니다.<br>
### 피드 둘러보기
무한 스크롤을 사용하여 랜덤으로 다양한 피드를 제공합니다. <br>
### 검색
사용자가 원하는 작품 및 작가를 검색할 수 있게 합니다. <br>
최근 검색어, 검색 결과 정렬, 통합 - 작가 - 작품 검색결과를 노출하여 사용자가 검색한 작품을 보다 편하게 볼수 있게 하였습니다. <br>
### 채팅
채팅을 통해 해당 작품을 작가와 직접 거래 할 수 있는 시스템을 마련하였습니다. <br>
### 마이페이지
자신의 프로필을 확인 할 수 있습니다. 그리고 자신이 찜한 목록 및 팔로우 목록을 볼 수 있습니다.


## 프론트엔드 차후 개발 예정
유저 모드와 작가 모드를 나눈 부분을 더 활용하여 <br>
공통으론 자신의 회원 정보를 수정하게 하고 작가의 경우 자신의 작품 포스팅, 내갤러리를 확인할 수 있게 합니다.



