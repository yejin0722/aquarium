# 🐠 롯데월드 아쿠아리움 리뉴얼


## 📌 프로젝트 소개


본 프로젝트는 **롯데월드 아쿠아리움**의 웹사이트를 현대적인 UI/UX로 **리디자인**하고, <br>
사용자 경험을 고려하여 주요 기능을 개발한 **리뉴얼** 작업입니다. **메인페이지, 서브페이지 모두 반응형 제작**이 완료되어 있습니다.


- **목표** : 사용자 중심의 정보 구조 개선 및 시각적 완성도 향상
- **타겟** : 가족 단위 관람객, 커플, 교육 단체 등
- **형태** : 정적 웹사이트 (GitHub Pages 배포)


---


## 📅 제작기간 : 작업시간(5일)
 2025.05.12~2025.06.12


---


 ## ✨ 도메인
👉 [롯데월드 아쿠아리움 리뉴얼 웹사이트 바로가기](https://yejin0722.github.io/aquarium/index.html)


---

## 📦 프로젝트 폴더 구조

  aquarium  
┣ 📂 css  
┣ 📂 html  
┣ 📂 images  
┣ 📂 imagesSub  
┣ 📂 include  
┣ 📂 script  
┗ 📂 scss  
  index


---


## 👥 팀원 및 담당 영역


### 🔹 메인 페이지


| 이름    | 담당 섹션 |
|---------|------------|
| **문현아** | - `section - program`<br>- `section - review`<br>- `footer` |
| **조예진** | - `section - event`<br>- `section - news`<br>- `section - directions` |
| **이지호** | - `header`<br>- `section - main-visual`<br>- `section - sea creatures` |


### 🔸 서브 페이지 (총 7페이지 제작)


| 이름    | 담당 섹션 |
|---------|------------|
| **문현아** | `program`<br>└ 설명 프로그램 / 체험 프로그램 / 교육 프로그램 |
| **조예진** | `event`, `news`<br>└ 진행 중/종료된 이벤트<br>└ 뉴스, 공지사항 |
| **이지호** | `sea creatures`, `ticket`<br>└ 전시 생물 소개<br>└ 온라인 예매 |


---


## 🛠 개발 환경


- **사용 언어**: HTML, CSS, SCSS, JavaScript  
- **코드 에디터**: Visual Studio Code  


---


## ✨ 주요 기능


### 🏠 메인 페이지


<table width="100%">
  <tr>
    <td width="70%">

### Header
  - **오늘 날짜 및 실시간 기온** 표시  
  - **마우스 hover 시 애니메이션** 및 서브 페이지로 이동  
  - **모바일 반응형** 구간에서 서브 메뉴 레이아웃 자동 변경

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/6eccdebc-f3cb-4539-8880-8be7d64e4aff" alt="Header Image 1" width="100%" />
      <br/><br/>
      <img src="https://github.com/user-attachments/assets/78072c59-3ef0-4c1e-86b4-e3503d8cc270" alt="Header Image 2" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

 **Main - Program**
  - 카드에 마우스를 올리면 **동영상 자동 재생**  
  - 클릭 시 해당 프로그램 상세 페이지로 이동  

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/f0ce3b7b-1455-437e-9c4d-06acc7e7a709" alt="Program Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

 **Main - Event**
  - 이벤트 **썸네일 이미지 클릭** 시 관련 자료로 이동  
  - 이벤트 서브 페이지 연결

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/fd2f4dd3-29c8-4d2d-a2ec-afc9911ea55f" alt="Event Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

 **Main - Sea Creatures**
  - 아쿠아리움 지도 위 위치 **아이콘 클릭 시 해당 생물 정보** 확인  
  - 관련 서브 페이지로 이동 가능

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/351eace2-97e9-41d7-9fc4-b2ebc5b9454b" alt="Sea Creatures Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

 **Main - News**
  - 데스크탑: **뉴스카드 자동 슬라이드** 
  - 모바일: 슬라이드 없는 **리스트 형태로 전환** 표시  
  - 각 뉴스 클릭 시 공지사항 서브 페이지로 이동

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/f40fa99a-a73f-4476-b503-9da51bd75c92" alt="News Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

 **Main - Directions**
  - Google Maps iframe 위치 정보 표시

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/441c5e41-e3d7-4e52-86f0-3d9fec07bb85" alt="Directions Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

 **Main - Review**
  - 데스크탑: **자동 슬라이드** 리뷰  
  - 모바일: 드래그하여 리뷰 탐색, 클릭 시 상세 리뷰 확인 가능

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/92cb3e5e-26b4-4a04-ae54-27cae3fe75f1" alt="Review Image" width="100%" />
    </td>
  </tr>
</table>



---


### 📄 서브 페이지

<table width="100%">
  <tr>
    <td width="70%">

**Sub - Sea Creatures (전시 생물 소개)**
  - **층별로** 전시 생물 구분  
  - **마우스 hover 시 요약 정보** 표시 (툴팁 형식)

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/eccaf188-2640-48ab-8356-02d14f69e9be" alt="Sub Sea Creatures Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

**Sub - Event (이벤트 안내)**
  - **진행 중/종료 이벤트 구분** 표시  
  - "자세히 보기" hover 시 시각적 강조 효과

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/4677565f-b80c-447d-8cba-28fa819ca928" alt="Sub Event Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

**Sub - Program (설명, 체험, 교육 프로그램)**
  - **개인 예약**: 날짜 선택 → 예약 팝업 표시, 빈 날짜 선택 시 경고창 노출  
  - **단체 예약**: 버튼 클릭 시 안내 팝업 표시  
  - **상세 정보**: 버튼 클릭 시 숨겨진 정보 슬라이드로 표시

    </td>
    <td width="30%" align="right">
      <img src="" alt="Sub Program Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

**Sub - News (공지사항)**
  - 뉴스 리스트 항목 **hover 시 색상 변경**  
  - **페이지네이션** (처음 / 끝 / 한 페이지씩 이동)

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/e04c4e54-5d0e-492e-9943-4e489cd3ed74" alt="Sub News Image" width="100%" />
    </td>
  </tr>
  <tr>
    <td width="70%">

**Sub - Ticket (온라인 예매)**
  - **요금 종류 태그 클릭 시 관련 정보** 동적 표시  
  - **반응형 구간**에서 요금표 레이아웃 자동 변경

    </td>
    <td width="30%" align="right">
      <img src="https://github.com/user-attachments/assets/0e43183c-a8d2-4ebc-ac9e-51311b6b1210" alt="Sub Ticket Image" width="100%" />
    </td>
  </tr>
</table>


 
 ---


## 📝 라이선스

본 프로젝트는 비상업적 **학습, 포트폴리오 용도**로 제작되었습니다.
