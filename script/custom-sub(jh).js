ticket_price = {
  price_01: {
    url: "url(../imagesSub/ticket-background01.jpg)",
    explan: "사람과 자연이 함께 꿈꾸는 바다<br> <em>롯데월드 아쿠아리움</em>에서 여러분을 초대합니다."
  }
  , price_02: {
    url: "url(../imagesSub/ticket-background02.png)",
    explan: "자주 찾을수록 더 큰 혜택! <em>마린프렌즈 전용 특별 요금</em>으로<br> 아쿠아리움을 더 가까이 즐겨보세요."
  }
  , price_03: {
    url: "url(../imagesSub/ticket-background03.png)",
    explan: "<em>푸른 바다부터 서울의 하늘까지!</em><br> 한 번에 즐기는 특별한 하루의 경험."
  }
}

//이지호 서브페이지 - 온라인 예매
let ticket_img = document.querySelector(".ticket-img");
let ticket_img_explan = document.querySelector(".ticket-img h2");
let button_ticket = document.querySelectorAll(".button-warps button");

button_ticket.forEach((btn) => {
  btn.addEventListener('click', () => {
    select_button(btn);
  });
});

function select_button(btn) {
  // 모든 버튼의 배경 이미지 초기화


  if (window.matchMedia("(max-width: 1024px)").matches) {
    console.log("모바일")
    button_ticket.forEach((button) => {
      button.classList.remove("active");
    });
    btn.classList.add("active");
    // 클릭된 버튼의 배경 이미지 변경
  }
  else {
    console.log("데탑")
    button_ticket.forEach((button) => {
      button.style.backgroundImage = "url(../imagesSub/ticket-button-none.png)";
    });
    // 클릭된 버튼의 배경 이미지 변경
    btn.style.backgroundImage = "url(../imagesSub/ticket-button-active.png)";
  }


  let btn_data = btn.getAttribute("data-img");

  switch (btn_data) {
    case "01":
      ticket_img.style.backgroundImage = ticket_price.price_01.url;
      ticket_img_explan.innerHTML = ticket_price.price_01.explan;
      break;
    case "02":
      ticket_img.style.backgroundImage = ticket_price.price_02.url;
      ticket_img_explan.innerHTML = ticket_price.price_02.explan;
      break;
    case "03":
      ticket_img.style.backgroundImage = ticket_price.price_03.url;
      ticket_img_explan.innerHTML = ticket_price.price_03.explan;
      break;
  }

}