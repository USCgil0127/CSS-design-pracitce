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

function remove_class() {
  const doorAll = document.querySelectorAll(".door");
  for (let i = 0; i < doorAll.length; i++) {
    const element = doorAll[i];
    if (element.classList.contains("door-open")) {
      element.classList.remove("door-open");
    }
  }

  const imgAll = document.querySelectorAll("img");
  for (let i = 0; i < imgAll.length; i++) {
    const element = imgAll[i];
    if (element.classList.contains("img-open")) {
      element.classList.remove("img-open");
    }
  }
}
