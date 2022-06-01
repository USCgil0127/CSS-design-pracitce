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
})();
