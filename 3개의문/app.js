(function () {
  const container = document.querySelector(".container");

  let Currentdoor;
  let Currentimg;

  function container_control(e) {

    remove_class(Currentdoor, Currentimg);

    const nearest_door = e.target.closest(".door");
    if (!nearest_door) return;
    const nearest_img = e.target.nextElementSibling.firstElementChild;
    if (!nearest_img) return;

    nearest_door.classList.add("door-open");
    // 쿼리셀렉터를 쓰지않고, 열려있는 문을 잡아냄
    Currentdoor = nearest_door;

    nearest_img.classList.add("img-open");
    // 쿼리셀렉터를 쓰지않고, 잡아냄
    Currentimg = nearest_img;
  }

  container.addEventListener("click", container_control);
})();

function remove_class(Currentdoor, Currentimg) {
  // const Currentdoor = document.querySelector(".door-open");

  if (Currentdoor) {
    Currentdoor.classList.remove("door-open");
  }

  // const Currentimg = document.querySelector(".img-open");

  if (Currentimg) {
    Currentimg.classList.remove("img-open");
  }
}

