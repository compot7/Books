const scene = document.getElementById("scene");
const hat = document.getElementById("witch_hat");
const star = document.getElementById("star4");

function triggerShake() {
  scene.classList.add("shake");

  setTimeout(() => {
    scene.classList.remove("shake");
  }, 2000);
}

hat.addEventListener("click", triggerShake);
star.addEventListener("click", triggerShake);


const stars = [
  document.getElementById("star1"),
  document.getElementById("star2"),
  document.getElementById("star3"),
  document.getElementById("star4"),
  document.getElementById("star5")
];

const counter = document.getElementById("star-counter");

let collected = 0;

stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    e.stopPropagation();

    // ❗ чтобы не засчитывалась повторно
    if (star.dataset.clicked === "true") return;

    star.dataset.clicked = "true";

    collected++;

    // показать счётчик
    counter.classList.add("show");

    counter.textContent = `${collected}/5`;
  });
});