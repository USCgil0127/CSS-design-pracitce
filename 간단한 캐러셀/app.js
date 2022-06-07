(function () {
  const container = document.querySelector(".btn-container");
  let count = 1;

  container.addEventListener("click", clickAfter);

  function clickAfter(e) {
    const btn = e.target.closest("button");

    console.log(btn);

    if (!btn) {
      return;
    }

    const imgContainer = document.querySelector(".slide-container");

    if (btn.classList.contains("slide-1")) {
      imgContainer.style.transform = "translateX(0vw)";
      count = 1;
    } else if (btn.classList.contains("slide-2")) {
      imgContainer.style.transform = "translateX(-100vw)";
      count = 2;
    } else if (btn.classList.contains("slide-3")) {
      imgContainer.style.transform = "translateX(-200vw)";
      count = 3;
    }

    if (btn.classList.contains("next")) {
      if (count === 1) {
        imgContainer.style.transform = "translateX(-100vw)";
        count = 2;
      } else if (count === 2) {
        imgContainer.style.transform = "translateX(-200vw)";
        count = 3;
      } else if (count === 3) {
        imgContainer.style.transform = "translateX(0vw)";
        count = 1;
      }
    } else {
      return;
    }
  }

  const slideContainer = document.querySelector(".slide-container");
  const slides = document.querySelectorAll(".slide-box");

  let begin = 0;
  let isBegin = false;
  let final = 0;

  // slides[0]

  slides[0].addEventListener("mousedown", function (e) {
    slideContainer.classList.remove("smooth");
    console.log("mousedown event is located at", e.clientX);
    begin = e.clientX;
    isBegin = true;
  });

  slides[0].addEventListener("mousemove", function (e) {
    console.log("mousemove event is located at", e.clientX);
    // e.clientX - begin;
    console.log("최종 거리는 ", begin - e.clientX);

    if (isBegin === true) {
      // 애는 음수도 찍어야 원하는 방향으로 가기 때문에
      // e.clientX - begin 로 설정
      slideContainer.style.transform = `translateX(${e.clientX - begin}px)`;
      // 그러나 실제 거리는 양수로 나와야 더 가독성이 있어서
      final = begin - e.clientX;
    }
  });

  slides[0].addEventListener("mouseup", function () {
    isBegin = false;
    if (final >= 300) {
      slideContainer.classList.add("smooth");
      slideContainer.style.transform = "translateX(-100vw)";
    } else if (final < 300) {
      slideContainer.classList.add("smooth");
      slideContainer.style.transform = "translateX(0vw)";
    }
  });
  // 2회전
  // 첫번쨰 이미지 일떄는 에러가 없는데,
  // 두번째 이미지를 마우스 다운 했을 때, 첫번째 이미지의 특정 위치로 이동한다.
  // mousedown 이슈 같아서, 코드를 봐도 특정 위치로
  // 라인 106번에 첫번쨰 이미지에서는 ㄱㅊ은데, 2번쨰 이미지에서는
  // 첫번째 이미지의 위치와 같은 그래서 width 값을 한 번 더해줘서 해결
  slides[1].addEventListener("mousedown", function (e) {
    slideContainer.classList.remove("smooth");
    console.log("mousedown event is located at", e.clientX);
    // 이 부분!!
    begin = e.clientX + 1000;
    isBegin = true;
  });

  slides[1].addEventListener("mousemove", function (e) {
    console.log("mousemove event is located at", e.clientX);
    // e.clientX - begin;
    console.log("최종 거리는 ", begin - e.clientX);

    if (isBegin === true) {
      // 애는 음수도 찍어야 원하는 방향으로 가기 때문에
      // e.clientX - begin 로 설정
      slideContainer.style.transform = `translateX(${e.clientX - begin}px)`;
      // 그러나 실제 거리는 양수로 나와야 더 가독성이 있어서
      final = begin - e.clientX;
    }
  });

  slides[1].addEventListener("mouseup", function () {
    isBegin = false;
    if (final >= 300) {
      slideContainer.classList.add("smooth");
      slideContainer.style.transform = "translateX(-200vw)";
    } else if (final < 300) {
      slideContainer.classList.add("smooth");
      slideContainer.style.transform = "translateX(-100vw)";
    }
  });

  // 3회전
})();
