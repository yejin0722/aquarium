/* ~~~~~~~~~~ haeder ~~~~~~~~~~ */
fetch('../include/header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.header-include').innerHTML = data;
    /* nav */
    let logo = document.querySelector(".logo");
    let nav_li = document.querySelectorAll('nav ul li');
    console.log(logo, nav_li);
    function hover_Event(_color) {
      if (header.classList.contains("active-scroll")) {

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
      let mobile_menu_btn = this.document.querySelector(".mobile-menu-btn i");
      console.log(mobile_menu_btn + "!@#!@#");
      if (scrollY > viewportHeight) {
        // 배경바꾸는 부분
        header.classList.add("active-scroll");
        for (let i = 0; i < nav_li.length; i++) {
          nav_li[i].style.color = "#333333";
          logo.style.color = "#333333";
          mobile_menu_btn.style.color = "rgba(1, 1, 24, 0.95)";
          console.log("@@");
        }
      } else {
        header.classList.remove("active-scroll");
        for (let i = 0; i < nav_li.length; i++) {
          nav_li[i].style.color = "#FFFFFF";
          logo.style.color = "#FFFFFF";
          mobile_menu_btn.style.color = "white";
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

    let header = document.querySelector(".header");
    let sub_menu = document.querySelector(".sub-menu");



    header.addEventListener("mouseover", function () {
      let mobile_menu_btn = document.querySelector(".mobile-menu-btn i");

      header.classList.add("active");
      sub_menu.classList.add("active");
      mobile_menu_btn.style.color = "rgba(1, 1, 24, 0.95)";
      hover_Event("#333333")

    });

    header.addEventListener("mouseleave", function () {

      let mobile_menu_btn = document.querySelector(".mobile-menu-btn i");

      header.classList.remove("active");
      sub_menu.classList.remove("active");
      mobile_menu_btn.style.color = "white";
      hover_Event("#FFFFFF")

    });
    /* 모바일? */
    let mobile_menu_btn = document.querySelector(".mobile-menu-btn");
    let mobile_menu = document.querySelector(".mobile-menu");
    console.log("mobile_menu @@@@@@@@@@@@@@", mobile_menu);
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
    console.log(todaySpan, year, month, day);
  });
/* ~~~~~~~~~~ weaderAPI ~~~~~~~~~~ */
let apiKey = 'b759f620bccb71b6422c30364c1a6460';
let lat = 37.513532;
let lon = 127.104847;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  .then(res => {
    console.log('응답중', res.status);
    return res.json();
  })
  .then(data => {
    console.log('데이터정보', data);
    //온도
    let tempData = Math.round(data.main.temp);
    //날씨 아이콘
    let iconData = data.weather[0].icon;
    //console.log(tempData,iconData)

    console.log(data)
    //데이터 반영할 곳
    let temp = document.querySelector('.temp');
    //console.log(temp,weatherIcon)
    temp.textContent = `${tempData}°C`

  })
// icon list
let weatherIcons = {
  "01d": 'bi bi-brightness-high',
  "01n": 'bi bi-brightness-high',
  "02d": 'bi bi-cloud-sun',
  "02n": 'bi bi-cloud-sun',
  "03d": 'bi bi-cloud',
  "03n": 'bi bi-cloud',
  "04d": 'bi bi-clouds',
  "04n": 'bi bi-clouds',
  "09d": 'bi bi-cloud-rain',
  "09n": 'bi bi-cloud-rain',
  "10d": 'bi bi-cloud-rain-heavy',
  "10n": 'bi bi-cloud-rain-heavy',
  "11d": 'bi bi-cloud-lightning',
  "11n": 'bi bi-cloud-lightning',
  "13d": 'bi bi-cloud-snow',
  "13n": 'bi bi-cloud-snow',
  "50d": 'bi bi-cloud-haze2',
  "50n": 'bi bi-cloud-haze2'
}
/* ~~~~~~~~~~ footer ~~~~~~~~~~ */
fetch('../include/footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;
  });