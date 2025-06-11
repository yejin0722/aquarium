/* 선택자 */
let detailBtns = document.querySelectorAll('.detail-btn');
let hiddenWraps = document.querySelectorAll('.hidden-wrap');
//console.log(detailBtns,hiddenWraps)
//초기화 해서 처음에 한번 클릭 했을때 안열리는 현상 수정
hiddenWraps.forEach(wrap => {
  wrap.style.maxHeight = '0px';
})
detailBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    //console.log("클릭중", idx);
    hiddenWraps.forEach((wrap, index) => {
      //btn,wrap index 같은지 확인
      if (idx === index){
        // 클릭된 것의 maxHeight가 0인 경우 열기
        if (wrap.style.maxHeight === '0px') {
          wrap.style.maxHeight = wrap.scrollHeight + 'px';
        } else {
          // 클릭된 것의 maxHeight가 0이 아니면 닫기 (토글용)
          wrap.style.maxHeight = '0';
        }
      }else {
        // 인덱스가 같지 않으면 닫기
        wrap.style.maxHeight = '0';
      }
    });
  });
});

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

      if (scrollY > viewportHeight) {
        // 배경바꾸는 부분
        header.classList.add("active-scroll");
        for (let i = 0; i < nav_li.length; i++) {
          nav_li[i].style.color = "#333333";
          logo.style.color = "#333333";
        }
      } else {
        header.classList.remove("active-scroll");
        for (let i = 0; i < nav_li.length; i++) {
          nav_li[i].style.color = "#FFFFFF";
          logo.style.color = "#FFFFFF";
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

      header.classList.add("active");
      sub_menu.classList.add("active");
      hover_Event("#333333")
    });

    header.addEventListener("mouseleave", function () {
      header.classList.remove("active");
      sub_menu.classList.remove("active");
      hover_Event("#FFFFFF")

    });
    /* 클릭 이벤트 */
    
    PersonalBtns.forEach(btn01 => {
      btn01.addEventListener('click',() => {
      header.style.display = 'none';
      })
      closeGroupBtn.addEventListener('click',() => {
        header.style.display = '';
      })
      /* 예약버튼 조건문 완성하기  */
      reserveBtn.addEventListener('click',() => {
      let date = document.getElementById('reserve-date').value;
      if (date) {
          header.style.display = '';
        }
      });
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
  console.log(todaySpan,year,month,day);
    /* 단체 */
    GroupBtns.forEach(btn02 => {
      //버튼 클릭 시 팝업창 띄우기
      btn02.addEventListener('click',() => {
      header.style.display = 'none';
      console.log('클릭 확인용')
      })
      closeBtn.addEventListener('click',() => {
        header.style.display = '';
      })
    })
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
  //데이터 반영할 곳
  let temp = document.querySelector('.temp');
  //console.log(temp,weatherIcon)
  temp.textContent =  `${tempData}°C`
})
/* ~~~~~~~~~~ footer ~~~~~~~~~~ */
fetch('../include/footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;
  });

/* ~~~~~~~~~~ popup ~~~~~~~~~~ */
let PersonalBtns = document.querySelectorAll('.Personal-btn');
let PersonalPopUp = document.getElementById('PersonalPopUp');
let GroupBtns = document.querySelectorAll('.Group-btn');
let GroupPopUp = document.getElementById('GroupPopUp');
let reserveBtn = document.getElementById('reserve-btn');
let closeBtn = document.getElementById('close-btn');
let closeGroupBtn = document.getElementById('close-group-btn');
console.log(reserveBtn,closeGroupBtn);
let headerTop = document.querySelector('.header-include');
console.log(GroupBtns);

/* ~~~~~~~~~~ PersonalBtns ~~~~~~~~~~ */
PersonalBtns.forEach(btn => {
  btn.addEventListener('click',() => {
    //팝업창 띄우기
    PersonalPopUp.style.display = "block"
    document.body.style.overflow = 'hidden';
    //예약 버튼 클릭 시 데이터가 있는지 확인
  })
  closeBtn.addEventListener('click',() => {
    PersonalPopUp.style.display = "none"
    document.body.style.overflow = "";
  })
})
/* 한번만 띄우기 위해 밖에 배치 */
reserveBtn.addEventListener('click',() => {
  let date = document.getElementById('reserve-date').value;
  const today = new Date().toISOString().split('T')[0]; //오늘 날짜를 문자열로(toISOString 사용해서 변환) 가져와서 t 기준으로 배열을 나눈 후(split) 앞에 날짜 데이터만 가져옴 (날짜 원본 데이터 기준)
  if (!date) {
      alert("날짜를 선택해주세요!");
      return;
    }
  if (date < today) {
    alert("지난 날짜는 선택할 수 없습니다.");
    dateInput.value = '';
    return;
  }
    alert("상세예약 페이지로 이동합니다.");
    PersonalPopUp.style.display = "none"
    document.body.style.overflow = "";
})
/* ~~~~~~~~~~ PersonalBtns ~~~~~~~~~~ */
GroupBtns.forEach(btn => {
  //버튼 클릭 시 팝업창 띄우기
  btn.addEventListener('click',() => {
  GroupPopUp.style.display = "block"
  document.body.style.overflow = "hidden";
  })
  closeGroupBtn.addEventListener('click',() => {
    GroupPopUp.style.display = "none"
    document.body.style.overflow = "";
  })
})