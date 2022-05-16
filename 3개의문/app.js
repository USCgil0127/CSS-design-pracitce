(function () {
  const container = document.querySelector(".container");

  function container_control(e) {
    remove_class();

    const nearest_door = e.target.closest(".door");
    if (!nearest_door) return;
    const nearest_img = e.target.nextElementSibling.firstElementChild;
    if (!nearest_img) return;

    nearest_door.classList.add("door-open");

    nearest_img.classList.add("img-open");
  }

  container.addEventListener("click", container_control);
})();

function remove_class() {
  const Currentdoor = document.querySelector(".door-open");

  if (Currentdoor) {
    Currentdoor.classList.remove("door-open");
  }

  const Currentimg = document.querySelector(".img-open");

  if (Currentimg) {
    Currentimg.classList.remove("img-open");
  }
}

