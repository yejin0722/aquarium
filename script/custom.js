
/* ~~~~~~~~~~ haeder ~~~~~~~~~~ */
fetch('/aquarium/include/header.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.header-include').innerHTML = data;
  /* ~~~~~~~~~~ haeder script ~~~~~~~~~~ */
  /* nav */
  let logo = document.querySelector(".logo");
  let nav_li = document.querySelectorAll('nav ul li');
  console.log(logo, nav_li);
  function hover_Event(_color) {
    if (header_.classList.contains("active-scroll")) {
    }
    else {
      logo.style.color = _color;
      for (let i = 0; i < nav_li.length; i++) {
        nav_li[i].style.color = _color;
      }
    }
  }
  
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // 현재 스크롤 위치
    const viewportHeight = window.innerHeight * 0.1; // 현재 뷰포트 높이 (100vh)
    let mobile_menu_btn=document.querySelector(".mobile-menu-btn i");
    console.log(mobile_menu_btn+"!@");
    if (scrollY > viewportHeight) {
      // 배경바꾸는 부분
      header_.classList.add("active-scroll");
      for (let i = 0; i < nav_li.length; i++) {
        nav_li[i].style.color = "#333333";
        logo.style.color = "#333333";
        mobile_menu_btn.style.color="rgba(1, 1, 24, 0.95)";
        console.log("@@");
      }
    } else {
      header_.classList.remove("active-scroll");
      for (let i = 0; i < nav_li.length; i++) {
        nav_li[i].style.color = "#FFFFFF";
        logo.style.color = "#FFFFFF";
        mobile_menu_btn.style.color="white";
        console.log("!!");
      }
    }
  });

  let sub_menu_inner = document.querySelector(".sub-menu-inner");
  console.log(sub_menu_inner);

  sub_menu_inner.addEventListener("mouseenter", function () {
    sub_menu.classList.add("active");
  });

  sub_menu_inner.addEventListener("mouseleave", function () {
    sub_menu.classList.remove("active");
  });
  let header_ = document.querySelector(".header");
  let sub_menu = document.querySelector(".sub-menu");
    header_.addEventListener("mouseover", function () {
      let mobile_menu_btn = document.querySelector(".mobile-menu-btn i");
    header_.classList.add("active");
    sub_menu.classList.add("active");
    mobile_menu_btn.style.color = "rgba(1, 1, 24, 0.95)";
    hover_Event("#333333")
  });

  header_.addEventListener("mouseleave", function () {
    let mobile_menu_btn = document.querySelector(".mobile-menu-btn i");
    header_.classList.remove("active");
    sub_menu.classList.remove("active");
    mobile_menu_btn.style.color = "white";
    hover_Event("#FFFFFF")
  });

  /* 모바일? */
  let mobile_menu_btn = document.querySelector(".mobile-menu-btn");
  let mobile_menu = document.querySelector(".mobile-menu");
  console.log("mobile_menu @@@@@@@@@@@@@@" ,mobile_menu);
  mobile_menu_btn.addEventListener('click', () => {
    mobile_menu.classList.toggle("active");
  });
  let sub_menu_list_li = document.querySelectorAll('.sub-menu-list > li');
  sub_menu_list_li.forEach(li => {
    li.addEventListener("click", () => {
      li.classList.toggle("active")
      li.querySelector(".sub-menu-list-content").classList.toggle("active");
      console.log(li.querySelector(".sub-menu-list-content"))
    });
  });
  /* 실시간 날짜 */
  let todaySpan = document.querySelector('.data-today');
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let day = String(today.getDate()).padStart(2, '0');
  let weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  let weekDay = weekDays[today.getDay()];
  todaySpan.textContent = `${year}년${month}월${day}일 ${weekDay}요일`
  console.log(todaySpan,year,month,day);
});

/* ~~~~~~~~~~ weaderAPI ~~~~~~~~~~ */
let apiKey = 'b759f620bccb71b6422c30364c1a6460';
let lat = 37.513532;
let lon = 127.104847;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
.then(res => {
  console.log('응답중',res.status);
    return res.json();
})
.then(data => {
  console.log('데이터정보',data);
  //온도
  let tempData = Math.round(data.main.temp);
  //날씨 아이콘
  let iconData = data.weather[0].icon;
  //console.log(tempData,iconData)
  let weatherIconClass = weatherIcons[iconData] || iconData;

  
  console.log(data)
  //데이터 반영할 곳
  let temp = document.querySelector('.temp');
  let weatherIconIn = document.getElementById('weather-icon');
  //console.log(temp,weatherIcon)
  temp.textContent =  `${tempData}°C`
  if(weatherIconIn==null)
  {return}
  weatherIconIn.className = weatherIconClass;
})
// icon list
let weatherIcons = {
"01d":'bi bi-brightness-high',
"01n":'bi bi-brightness-high',
"02d":'bi bi-cloud-sun',
"02n":'bi bi-cloud-sun',
"03d":'bi bi-cloud',
"03n":'bi bi-cloud',
"04d":'bi bi-clouds',
"04n":'bi bi-clouds',
"09d":'bi bi-cloud-rain',
"09n":'bi bi-cloud-rain',
"10d":'bi bi-cloud-rain-heavy',
"10n":'bi bi-cloud-rain-heavy',
"11d":'bi bi-cloud-lightning',
"11n":'bi bi-cloud-lightning',
"13d":'bi bi-cloud-snow',
"13n":'bi bi-cloud-snow',
"50d":'bi bi-cloud-haze2',
"50n":'bi bi-cloud-haze2'
}


/* ~~~~~~~~~~ section : event ~~~~~~~~~~ */
let eventContents = document.querySelectorAll('.event-content-wrap');
document.addEventListener('DOMContentLoaded', () => {
  // 처음 로딩 시 첫 콘텐츠 보이게
  eventContents.forEach((content, index) => {
    content.classList.toggle('active', index === 0);
    if (index === 0) {
      let firstThumb = content.querySelector('.event-thumb-btn img');
      firstThumb.classList.add('active');
    }
  });
  // 썸네일 클릭 이벤트
  document.querySelectorAll('.event-thumb-btn img').forEach(img => {
  img.addEventListener('click', () => {
    let targetId = img.alt;
    // 콘텐츠 토글
    eventContents.forEach(content => {
      if (content.id === targetId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    // 버튼 필터 상태 갱신
    document.querySelectorAll('.event-thumb-btn').forEach(group => {
      let groupParent = group.closest('.event-content-wrap');
      group.querySelectorAll('img').forEach(btn => {
        // 이 이미지가 속한 콘텐츠가 현재 선택한 콘텐츠이고
        // alt 값도 현재 선택한 콘텐츠 ID와 같으면 active 부여
        if (groupParent.id === targetId && btn.alt === targetId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });
  });
  });
});

/* ~~~~~~~~~~ creatures ~~~~~~~~~~ */
let creatures_map_ping = document.querySelectorAll(".creatures-map i");
let creatures_info = document.querySelectorAll(".creatures-info");

creatures_map_ping.forEach(function (ping) {
  ping.addEventListener("click", function () {
    creatures_map_ping.forEach(function (p) {
      p.classList.remove("active");
    });

    ping.classList.add("active");
    let ping_id = ping.id;
    creatures_info.forEach(function (info) {
      info.classList.remove("active");
      if (info.id === ping_id) {
        info.classList.add("active");
      }
    });
  });
});


/* ~~~~~~~~~~ section : news ~~~~~~~~~~ */
let swiper = null;
function initSwiper() {
  if (window.innerWidth >= 1023 && !swiper) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth < 768 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}
initSwiper();
window.addEventListener('resize', () => {
  initSwiper();
});

/* ~~~~~~~~~~ review-swiper ~~~~~~~~~~ */
if(matchMedia("screen and (max-width: 767px)").matches){
  console.log("mobile");
  var swiperReview = new Swiper(".review-swiper", {
    nit: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 3000,
  loop: true,
  freeMode: true,
  freeModeMomentum: false, //관성 스크롤 제거로 부드럽게
  allowTouchMove: true     //드래그 허용으로 변경
  });
}else if(matchMedia("screen and (min-width: 768px)").matches){
  console.log("desktop");
  var swiperReview = new Swiper(".review-swiper", {
    init: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 3000,
    loop: true,
    freeMode: true,
    freeModeMomentum: false, // 관성 스크롤 제거로 부드럽게
    allowTouchMove: false,   // 사용자 드래그 금지
  });
  const swiperContainer = document.querySelector('.review-swiper');
  //마우스 올리면 autoPlay 멈춤
  swiperContainer.addEventListener('mouseenter', function () {
    swiperReview.autoplay.stop();
    swiperReview.setTranslate(swiperReview.getTranslate());
  });
  //마우스 벗어나면 autoPlay 동작
  swiperContainer.addEventListener('mouseleave', function () {
    swiperReview.autoplay.start();
  });


};
/* 크기 변할때 자동 새로고침 */
window.onresize = function(){
  document.location.reload();
};

/* ~~~~~~~~~~ footer ~~~~~~~~~~ */
fetch('/aquarium/include/footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;
  });
