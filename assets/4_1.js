const savedPhoto = localStorage.getItem("userPhoto");

const photos = document.querySelectorAll(".user-photo");

photos.forEach(photo => {
  photo.src = savedPhoto;
});

const dog = document.getElementById("dog");

let isFirst = true;

dog.addEventListener("click", () => {

  if (isFirst) {
    dog.src = "assets/img/page-4_1/dog1.png";
  } else {
    dog.src = "assets/img/page-4_1/dog.png";
  }

  isFirst = !isFirst;
});